import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent  implements OnInit {
  form : FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    utilisateur: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', Validators.required],
    adresse: ['', Validators.required],
    password: ['', Validators.required]
});
  loading = false;
  submitted = false;
  constructor(private http: HttpClient,private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { 
    }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      utilisateur: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      adresse: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { 
    return this.form.controls; 
  }

  inscription(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.http.post('http://localhost/Mean_projet/Client/inscriptionClient',
    { 
      nom: this.f['nom'].value,
      prenom: this.f['prenom'].value,
      nom_utilisateur :this.f['utilisateur'].value,
      mdp : this.f['password'].value,
      mail : this.f['email'].value,
      adresse : this.f['adresse'].value,
      contact : this.f['contact'].value
    }).subscribe((result: any) => {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
      this.router.navigateByUrl(returnUrl);
  
  }, error => {
    console.log(error.error.message)
  })
  }
}
