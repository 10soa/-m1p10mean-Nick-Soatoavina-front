import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import api from 'src/app/const/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  form : FormGroup = this.formBuilder.group({
    username: ['Rabe10', Validators.required],
    password: ['1234', Validators.required]
});
  loading = false;
  submitted = false;
  visibleError = false;
  error = "";
  dismissible = true;
  constructor( private http: HttpClient,private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { 
    }

  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['Rabe10', Validators.required],
        password: ['1234', Validators.required]
    });
  }

  get f() { 
    return this.form.controls; 
  }

  onAlertVisibleChange(eventValue: any = this.visibleError) {
    this.visibleError = eventValue;
  }

  login(){
    
    this.submitted = true;
    console.log( this.f['username'].value,this.f['password'].value);
    
    if(  this.f['username'].value !== '' &&  this.f['password'].value !==''){
      this.loading = true;
    this.http.post(api('login'),{ nom: this.f['username'].value, mdp:this.f['password'].value}).subscribe((result: any) => {
    localStorage.setItem('type_user',result.type_user);
    localStorage.setItem('utilisateur',JSON.stringify(result.utilisateur));
    this.router.navigateByUrl('/dashboard');
    }, error => {
      this.visibleError = true;
      this.error = error.error.message;
      this.loading = false;
    })
    }
   
  }
}
