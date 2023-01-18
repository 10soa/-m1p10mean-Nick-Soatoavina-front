import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private http: HttpClient ) {}
  login(name: string, mdp:string){
  this.http.post('http://localhost/Mean_projet/Responsable/login',{ nom: name, mdp:mdp}).subscribe((result: any) => {
    console.log(result) 
  }, error => {
    console.log("error")
  })
  }
}
