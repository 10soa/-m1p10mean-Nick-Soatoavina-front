import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import api from 'src/app/const/api';

@Component({
  selector: 'app-reparation-client',
  templateUrl: './reparation-client.component.html',
  styleUrls: ['./reparation-client.component.scss']
})
export class ReparationClientComponent implements OnInit{
  count!: Number;
  public nb!: number[];
  public avance!:number;
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
    this.listeVoiture();
    console.log(this.client.client_id);
  }

  listeVoiture(){
    var url="http://localhost/Mean_projet/Voiture/reparationAvancementClient/"+this.client.client_id;
    this.http.get(url).subscribe(
      (response :any)=>{
        this.listeVt=response.result;
      },
      (err)=>{console.log(err);}
    );
  }

  detail(i:number){
    this.listeRep=this.listeVt[i].reparation;
    this.type=this.listeVt[i].type_voiture;
    this.mq=this.listeVt[i].marque;
    this.mod=this.listeVt[i].modele;
    this.num=this.listeVt[i].numero;
    this.liveDemoVisible=true;
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    //console.log("demo",this.liveDemoVisible);
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

}
