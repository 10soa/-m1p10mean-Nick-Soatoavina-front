import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as internal from 'stream';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})

export class VerificationComponent implements OnInit{
  nom !: string;
  prenom!: string;
  mail!: string;
  client!: any;

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }

  clientInscription(nom:string,prenom:string,mail:string){
    var url="http://localhost/Mean_projet/Client/clientInscription/"+nom+"/"+prenom+"/"+mail;
    return this.http.get(url);
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nom=params['nom'];
      this.prenom=params['prenom'];
      this.mail=params['mail'];
      //console.log("lc"+localStorage.getItem("utilisateur"));
      this.http.post('http://localhost/Mean_projet/Client/validationCompte',
      { 
        nom: this.nom,
        prenom: this.prenom,
        mail : this.mail
      }).subscribe((result: any) => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
        this.router.navigateByUrl(returnUrl);
    
    }, error => {
      console.log(error.error.message)
    })
    });  
    this.clientInscription(this.nom,this.prenom,this.mail).subscribe(
      (response)=>{
        this.client=response;
        localStorage.setItem("type_user","Client");
        localStorage.setItem("utilisateur",this.client.data[0].nom+" "+this.client.data[0].mail);
      },
      (err)=>{console.log(err);}
    ); 
    console.log(localStorage.getItem("utilisateur"));
  }
  /*localStorage.removeItem("utilisateur");
  localStorage.removeItem("type_user");*/
}
