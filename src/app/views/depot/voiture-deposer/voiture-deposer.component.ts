import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as internal from 'stream';

@Component({
  selector: 'app-voiture-deposer',
  templateUrl: './voiture-deposer.component.html',
  styleUrls: ['./voiture-deposer.component.scss']
})
export class VoitureDeposerComponent {

  off!: string;
  lim!:string;
  count!: Number;
  public reparation={date_deposition:''}
  public liste =[
    {marque:'',modele:'',numero:'',type_voiture:'',client_id:'',
    reparation:[this.reparation]}
  ];
  //public liste = new Object([]);

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }

  listeVoitureDeposer(off:string,lim:string){
    var url="http://localhost/Mean_projet/Voiture/listeVoitureDeposer/"+Number.parseInt(off)+"/"+Number.parseInt(lim);
    return this.http.get(url);
    
  }

  countListe(){
    var url="http://localhost/Mean_projet/Voiture/countListeVoitureDeposer";
    this.http.get(url).subscribe(
      (response :any)=>{
        this.count=response.result;
      },
      (err)=>{console.log(err);}
    ); ;
  }

}
