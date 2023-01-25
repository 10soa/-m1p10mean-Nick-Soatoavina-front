import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as internal from 'stream';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})

export class VerificationComponent implements OnInit{
  nom !: string;
  prenom!: string;
  mail!: string;
  
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nom=params['nom'];
      this.prenom=params['prenom'];
      this.mail=params['mail'];
     // console.log(this.nom,this.prenom,this.mail);
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
  }
}

