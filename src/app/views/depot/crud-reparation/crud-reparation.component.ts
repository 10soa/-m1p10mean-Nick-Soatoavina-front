import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import api from 'src/app/const/api';

@Component({
  selector: 'app-crud-reparation',
  templateUrl: './crud-reparation.component.html',
  styleUrls: ['./crud-reparation.component.scss']
})
export class CrudReparationComponent implements OnInit{
  form : FormGroup = this.formBuilder.group({
    reparation: ['', Validators.required],
    montant: ['', Validators.required]
  });
  form1 : FormGroup = this.formBuilder.group({
    typeVt: ['', Validators.required],
    reparation: ['', Validators.required],
    montant: ['', Validators.required]
  });
  dismissible = true;
  rep!:string;
  tp!:string;
  mont!:number;
  error = '';
  visibleError = false;
  count!: Number;
  submitted = false;
  submittedModifier = false;
  public off:number = 0;
  public lim!:Number;
  public nb!: number[];
  public liveDemoVisibleModification = false;
  public liste=[{
    _id:'',
    reparation:'',
    montant :0,
    type_voiture :''
  }];
  loading = false;
  type!:string;
  type1!:string;
  iD!:string;
  public listeTypeVoiture = ["SUV","4*4","camion","petit"];

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.countListe();
    this.listeReparation(this.off);
    this.form1 = this.formBuilder.group({
      reparation: ['', Validators.required],
      montant: ['', Validators.required],
      typeVt: ['', Validators.required],
    });
    this.form =this.formBuilder.group({
      reparation: ['', Validators.required],
      montant: ['', Validators.required]
    });
  }

  listeReparation(off:number){
    var url=api("Reparation/"+(off*5)+"/5");
    this.http.get(url).subscribe(
      (response :any)=>{
        this.liste=response.data;
      },
      (err)=>{console.log(err);
        this.liste=[{
          _id:'',
          reparation:'',
          montant :0,
          type_voiture :''
        }];}
    );
  }

  get f() { 
    return this.form.controls; 
  }

  get f1() { 
    return this.form1.controls; 
  }

  countListe(){
    var url=api("Reparation/countReparation");
    this.http.get(url).subscribe(
      (response :any)=>{
        var value=Number.parseInt(response.data);
        if((value%5)!=0){
          this.count=(Math.floor(value/5))+1;
        }else{
          this.count=value.valueOf()/5;
        }
        var ii=[];
        for(var i=0;i<this.count;i++){
          if(i<value){
            ii.push(i+1);
          }
        }
        this.nb=ii;
      },
      (err)=>{console.log(err);}
    ); 
  }

  modificationModal(rep:string,tp:string,mont:number,id:string){
    console.log(tp,"turpr");
    this.liveDemoVisibleModification=true;
    this.submittedModifier=false;
    this.iD=id;
    this.f1['reparation'].setValue(rep, {onlySelf: true, emitEvent: false});
    this.f1['montant'].setValue(mont, {onlySelf: true, emitEvent: false});
    this.f1['typeVt'].setValue(tp, {onlySelf: true, emitEvent: false});
    console.log(this.iD);
  }

  suppression(id:string){
    this.http.delete(api('Reparation/'+id),
    { 
    }).subscribe((result: any) => {
      this.countListe();
      this.route.params.subscribe(params => {
        this.off=params['off'];
      });
      this.listeReparation(this.off);
      this.form1 = this.formBuilder.group({
        reparation: ['', Validators.required],
        montant: ['', Validators.required],
        typeVt: ['', Validators.required],
      });
      this.form =this.formBuilder.group({
        reparation: ['', Validators.required],
        montant: ['', Validators.required]
      });
      }, error => {
        console.log(error.error.message)
      });
  }

  modifierReparation(id:string){
    
    //console.log(this.f1['reparation'].value,"//",mont,"//",tp);
    this.http.put(api('Reparation/'+id),
    { 
      reparation: this.f1['reparation'].value,
      montant : this.f1['montant'].value,
      type_voiture: this.f1['typeVt'].value
    }).subscribe((result: any) => {
      this.countListe();
      this.route.params.subscribe(params => {
        this.off=params['off'];
      });
      this.listeReparation(this.off);
      this.form1 = this.formBuilder.group({
        reparation: ['', Validators.required],
        montant: ['', Validators.required],
        typeVt: ['', Validators.required],
      });
      this.form =this.formBuilder.group({
        reparation: ['', Validators.required],
        montant: ['', Validators.required]
      });
      this.submittedModifier=false;
      this.liveDemoVisibleModification=false;
      }, error => {
        console.log(error.error.message)
      });
  }

  handleLiveDemoChangeModifier(event: boolean) {
    this.liveDemoVisibleModification = event;
  }

  typeSelected(value:string): void {
		this.type = value;
    console.log(this.type,"type");
	}

  typeSelectedModif(value:string): void {
    this.f1['typeVt'].setValue(value, {onlySelf: true, emitEvent: false});
    //console.log(this.f1['typeVt'],"type");
	}

  ajouter(){
    this.submitted=true;
    if (this.form.invalid) {
      return;
    }
    var rep=this.f['reparation'].value;
    var prix=this.f['montant'].value;
    this.http.post(api('Reparation'),
    { 
      reparation: rep,
      montant :prix,
      type_voiture: this.type
    }).subscribe((result: any) => {
      this.countListe();
      this.route.params.subscribe(params => {
        this.off=params['off'];
      });
      this.listeReparation(this.off);
      this.form = this.formBuilder.group({
        reparation: ['', Validators.required],
        montant: ['', Validators.required]
      });
      this.submitted=false;
      }, error => {
        console.log(error.error.message)
      });
  }

}
