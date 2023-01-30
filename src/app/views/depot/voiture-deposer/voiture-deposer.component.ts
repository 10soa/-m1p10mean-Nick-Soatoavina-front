import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import api from 'src/app/const/api';

@Component({
  selector: 'app-voiture-deposer',
  templateUrl: './voiture-deposer.component.html',
  styleUrls: ['./voiture-deposer.component.scss']
})
export class VoitureDeposerComponent {

  public off:number=0;
  index = 0;
  public liveDemoVisible = false;
  loading = false;
  public lim!:Number;
  public clientID!: number;
  public dateDepos!: Date;
  count!: Number;
  public nb!: number[];
  public reparation=[{
    reparation:{
      liste_reparation:[{
        reparation:'',
        prix:0,
        avancement:0
      }] 
    }
  }]
  public liste =[
    {
      _id:'',
      marque:'',
      modele:'',
      numero:'',
      type_voiture:'',
      client_id:0,
      reparation:{
        date_deposition: new Date(),
        liste_reparation : [{
          reparation:'',
          avancement:0
        }]
      }}
  ];
  //public liste = new Object([]);

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.countListe();
    this.listeVoitureDeposer(this.off);
  }

  listeVoitureDeposer(off:number){
    var url=api("Voiture/listeVoitureDeposer/"+(off*5)+"/5");
    this.http.get(url).subscribe(
      (response :any)=>{
        this.liste=response.result;
      },
      (err)=>{console.log(err);}
    );
    
  }

  countListe(){
    var url=api("Voiture/countListeVoitureDeposer");
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

  detail(id:number,date:Date){
    var url=api("Voiture/listeReparationVoiture1/"+id+"/"+date);
    this.http.get(url).subscribe(
      (response :any)=>{
        this.reparation=response.result;
        this.liveDemoVisible=true;
        console.log(this.reparation);
      },
      (err)=>{console.log(err);}
    );
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    //console.log("demo",this.liveDemoVisible);
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  validerReception(id:string,date:Date){
    this.http.post(api('Voiture/receptionVoiture/'+id+'/'+date),
    { 
      
    }).subscribe((result: any) => {
      this.countListe();
      this.route.params.subscribe(params => {
        this.off=params['off'];
      });
      this.listeVoitureDeposer(this.off);
      }, error => {
        console.log(error.error.message)
      });
  }
}
