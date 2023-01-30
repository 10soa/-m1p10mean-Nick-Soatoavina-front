import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import api from 'src/app/const/api';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export class ReparationComponent implements OnInit{
  form : FormGroup = this.formBuilder.group({
    taux: ['', Validators.required]
});

  dismissible = true;
  ready = false;
  error = '';
  visibleError = false;
  count!: Number;
  submitted = false;
  public off:number = 0;
  public lim!:Number;
  public nb!: number[];
  public avance!:number;
  public client_id!:number;
  public client = JSON.parse(localStorage.getItem('utilisateur') || '{}');
  public liveDemoVisible = false;
  public mq!:string;
  public mod!:string;
  public num!:string;
  public type!: string;
  public listeRep={
    liste_reparation:[{
      reparation:'',
      prix:0,
      avancement:0
    }],
    date_deposition: new Date()
  }

  public listeVt =[{
    marque:'',
    modele:'',
    numero:'',
    type_voiture:'',
    client_id:0,
    reparation:{
      liste_reparation:[{
        reparation:'',
        prix:0,
        avancement:0
      }],
      date_deposition: new Date()
    }
  }]

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.countListe();
    this.listeVoiture(this.off);
    this.form = this.formBuilder.group({
      taux: ['', Validators.required]
    });
  }

  countListe(){
    var url="http://localhost/Mean_projet/Voiture/countreparationAvecAvancement";
    this.http.get(url).subscribe(
      (response :any)=>{
        var value=Number.parseInt(response.result);
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

  listeVoiture(off:number){
    var url="http://localhost/Mean_projet/Voiture/reparationAvecAvancement/"+(off*5)+"/5";
    this.http.get(url).subscribe(
      (response :any)=>{
        this.listeVt=response.result;
      },
      (err)=>{console.log(err);}
    );
  }

  get f() { 
    return this.form.controls; 
  }


  detail(i:number){
    this.listeRep=this.listeVt[i].reparation;
    this.type=this.listeVt[i].type_voiture;
    this.mq=this.listeVt[i].marque;
    this.mod=this.listeVt[i].modele;
    this.num=this.listeVt[i].numero;
    this.client_id = this.listeVt[i].client_id;
    this.liveDemoVisible=true;
    this.submitted=false;
  }

  modifier(date:Date,nomRep:string,av:number){
    this.avance=Number.parseInt(this.f['taux'].value).valueOf()+av;
    if(this.avance>100){
      this.error="Vous dépassez la limite!";
      this.visibleError=true;
      this.submitted=false;
    }else{
      this.http.put('http://localhost/Mean_projet/Voiture/modificationAvancement/'+this.mq+'/'+this.mod+'/'+this.num+'/'+this.type+'/'+this.client_id+'/'+date+'/'+nomRep+'/'+this.avance,
    { 
      
    }).subscribe((result: any) => {
      this.countListe();
      this.route.params.subscribe(params => {
        this.off=params['off'];
      });
      this.listeVoiture(this.off);
      this.form = this.formBuilder.group({
        taux: ['', Validators.required]
      });
      this.liveDemoVisible = false;
      }, error => {
        console.log(error.error.message)
      });
    this.submitted=false;
    this.visibleError=false;
    }
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    //console.log("demo",this.liveDemoVisible);
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  onAlertVisibleChange(eventValue: any = this.visibleError) {
    this.visibleError = eventValue;
  }

}
