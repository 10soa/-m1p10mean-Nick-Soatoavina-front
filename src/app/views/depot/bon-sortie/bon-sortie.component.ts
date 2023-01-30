import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import api from 'src/app/const/api';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bon-sortie',
  templateUrl: './bon-sortie.component.html',
  styleUrls: ['./bon-sortie.component.scss']
})
export class BonSortieComponent {
  
  public listeVt =[{
    marque:'',
    modele:'',
    numero:'',
    type_voiture:'',
    client_id:0,
    reparation:{
      date_deposition: new Date(),
      date_reception: new Date(),
      date_recuperation: new Date(),
    }
  }]

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder) { }


  ngOnInit(){
    this.listeVtRecuperer();
  }

  public todo !: string[];
  public param !: string[];

  public done=[''];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      var data1=event.container.data[0].split(",,")[0];
      var data2=event.container.data[0].split(",,")[1];
      console.log(data1+"//"+data2);
      //mq:string,mod:string,num:string,tp:string,clientID:string,dateD:string,dateR:string
      this.modifier(data1.split(",")[0],data1.split(",")[1],data1.split(",")[2],data1.split(",")[3],data2.split(",")[0],data2.split(",")[1].replace("Z","+00:00"),data2.split(",")[2].replace("Z","+00:00"));
    }
  }

  listeVtRecuperer(){
    var url="http://localhost/Mean_projet/Voiture/voitureRecupere";
    this.http.get(url).subscribe(
      (response :any)=>{
        var data=response.data;
        var todo=[];
        for(var i=0;i<data.length;i++){
          var lt=data[i].marque+","+data[i].modele+","+data[i].numero+","+data[i].type_voiture+",,"+data[i].client_id+","+data[i].reparation.date_deposition+","+data[i].reparation.date_recuperation;
          todo.push(lt);
        }
        this.todo=todo;
        console.log(this.todo);
      },
      (err)=>{console.log(err);}
    ); 
  }

  modifier(mq:string,mod:string,num:string,tp:string,clientID:string,dateD:string,dateR:string){
    this.http.put('http://localhost/Mean_projet/Voiture/validationBD',
    { 
      marque: mq,
      modele: mod,
      numero: num,
      type_voiture: tp, 
      client_id: Number(clientID),
      date_deposition: dateD,
      date_recuperation: dateR
    }).subscribe((result: any) => {
      }, error => {
        console.log(error.error.message)
      });
  }

  rafraichir(){
   this.done = [''];
  }
}
