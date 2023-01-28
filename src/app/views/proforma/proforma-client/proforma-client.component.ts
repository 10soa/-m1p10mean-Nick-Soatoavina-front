import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as internal from 'stream';

@Component({
  selector: 'app-proforma-client',
  templateUrl: './proforma-client.component.html',
  styleUrls: ['./proforma-client.component.scss']
})
export class ProformaClientComponent {
  public client = JSON.parse(localStorage.getItem('utilisateur') || '{}');
  public index1=0;
  public index2=1;
  public listeE=[{
    marque:'',
    modele:'',
    numero:'',
    client_id:0,
    type_voiture:'',
    reparation:[{
      reparation:'',
      avancement:0,
      prix:0
    }]
  }];
  public listeV=[{
    marque:'',
    modele:'',
    numero:'',
    client_id:0,
    montant_total:0,
    type_voiture:'',
    reparation:[{
      reparation:'',
      avancement:0,
      prix:0
    }]
   
  }];

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.listeEnCours(this.client.client_id);
    this.listeValide(this.client.client_id);
  }

  listeEnCours(clientID:number){
    var url="http://localhost/Mean_projet/Proforma/listeProformaClient1EnCours/"+clientID;
    this.http.get(url).subscribe(
      (response :any)=>{
        this.listeE=response.data;
      },
      (err)=>{console.log(err);}
    );
  }

  listeValide(clientID:number){
    var url="http://localhost/Mean_projet/Proforma/listeProformatClient1Valide/"+clientID;
    this.http.get(url).subscribe(
      (response :any)=>{
        this.listeV=response.data;
      },
      (err)=>{console.log(err);}
    );
  }

  depotVoiture(i:number,marque:string,modele:string,numero:string,type:string){
    this.http.post('http://localhost/Mean_projet/Voiture/'+modele+'/'+marque+'/'+numero+'/'+type+'/'+this.client.client_id,
    { 
        reparation : {
          montant_total : this.listeV[i].montant_total,
          liste_reparation : this.listeV[i].reparation
        }
    }).subscribe((result: any) => {
      this.listeEnCours(this.client.client_id);
      this.listeValide(this.client.client_id);
  }, error => {
    console.log(error.error.message)
  })
  }



}
