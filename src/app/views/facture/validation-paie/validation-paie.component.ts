import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validation-paie',
  templateUrl: './validation-paie.component.html',
  styleUrls: ['./validation-paie.component.scss']
})
export class ValidationPaieComponent {

  public off:number=0;
  public nomClient!:string;
  index = 0;
  public liveDemoVisible = false;
  loading = false;
  public lim!:Number;
  public clientID!: number;
  public dateDepos!: Date;
  count!: Number;
  public nb!: number[];
  public paiement=
    {
      marque:'',
      modele:'',
      numero:'',
      type_voiture:'',
      client_id:0,
      reparation:{
        date_deposition: new Date(),
        montant_total:0,
        montant_paye:0,
        liste_reparation : [{
          reparation:'',
          avancement:0,
          prix:0
        }],
        paiement : [{
          montant:0,
          date :new Date(),
          validation:0
        }]
      },
      client:[{
        nom_utilisateur:''
      }]
    };

  public liste =[
    {
      marque:'',
      modele:'',
      numero:'',
      type_voiture:'',
      client_id:0,
      reparation:{
        date_deposition: new Date(),
        montant_total:0,
        montant_paye:0,
        liste_reparation : [{
          reparation:'',
          avancement:0,
          prix:0
        }],
        paiement : [{
          montant:0,
          date :new Date(),
          validation:0
        }]
      },
      client:[{
        nom_utilisateur:''
      }]
    }
  ];

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.countListe();
    this.listePaiementNV(this.off);
  }

  countListe(){
    var url="http://localhost/Mean_projet/Voiture/countlistePaiementNV";
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

  listePaiementNV(off:number){
    var url="http://localhost/Mean_projet/Voiture/listePaiementNV/"+(off*5)+"/5";
    this.http.get(url).subscribe(
      (response :any)=>{
        this.liste=response.result;
        console.log(this.liste);
      },
      (err)=>{console.log(err);}
    );
  }

  detail(i:number){
      this.paiement=this.liste[i];
      this.nomClient=this.liste[i].client[0].nom_utilisateur;
      this.liveDemoVisible=true;
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    //console.log("demo",this.liveDemoVisible);
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  validerPaiement(mq:string,mod:string,num:string,tp:string,clientID:number,dateD:Date,dateP:Date,paye:number,montP:number,index:number){
    this.http.put('http://localhost/Mean_projet/Voiture/validationPaiement',
    { 
      marque: mq,
      modele:mod,
      numero:num,
      type_voiture:tp,
      client_id:clientID,
      dateDepos:dateD,
      datePaye:dateP,
      paye:paye,
      montantPaye:montP
    }).subscribe((result: any) => {
      this.liveDemoVisible=false;
      this.listePaiementNV(this.off);
      }, error => {
        console.log(error.error.message)
      });
  }

}
