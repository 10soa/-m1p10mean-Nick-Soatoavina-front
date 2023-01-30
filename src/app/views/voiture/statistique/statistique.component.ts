import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import api from 'src/app/const/api';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent {
  public tempsMoyen = '';
  ready = false;
  ready1 = false;
  public donnee:any;
  public typeDonnee = "mois";
  public listeMois = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  public index1=0;
  public index2=1;
  public listeAnnee = [0];
  public dataBenefice = {
    labels: [""],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgb(229, 83, 83)',
        borderColor: 'rgb(229, 83, 83)',
        pointBackgroundColor: 'rgb(229, 83, 83)',
        pointBorderColor: '#fff',
        data: [0]
      } 
    ],
  };
  public mois!:string;
  public annee!:string;
  public typeDonnees = ["mois","jour"];
  public colorChiffreAffaire = ["rgb(0,64,128)","rgb(128,0,64)"];
  public dataChiffreAffaire = {
    labels: [""],
    datasets: [
      {
        label: '',
        backgroundColor: '',
        borderColor: '',
        pointBackgroundColor: '',
        pointBorderColor: '#fff',
        data: [0]
      } 
    ],
  };
  public option = {
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    }
  }

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  async ngOnInit() {
    this.getChiffreAffaire(this.typeDonnee,null);
    this.tempsReparationMoyen();
    
    this.getBenefice(null);
  }

  getBenefice(annee:any){
    let url = 'Voiture/statistique/benefice';
    if(annee !== null){
      console.log(false);
      url = '?annee=' + annee;
    }
    this.http.get(api(url)).subscribe((result:any) => {
      let label = [""];
      let data= [0];
      let max = 0;
      result.benefice.forEach((element:any) => {
        label.push(element.mois);
        data.push(element.benefice);
        if(max<Number(element.benefice)){
          console.log(true);
          max = element.benefice;
        }
        });
        data.push(max+100);
        this.dataBenefice.labels = label;
        this.dataBenefice.datasets[0].data = data;
        this.dataBenefice.datasets[0].label="Benefice par mois pour l'année "+result.annee;
        console.log(this.dataBenefice,"lol");
        this.ready = true;
    },error => {})
  }

  tempsReparationMoyen(){
    this.http.get(api('Voiture/statistique/tempsMoyenReparation')).subscribe((result:any) => {
      this.tempsMoyen = result.duree;
    })
  }

  getChiffreAffaire(typeDonee:string,donnee:any){

    let url = 'Voiture/statistique/chiffreAffaire?typeDonnee=' + typeDonee;
    if(typeDonee === "jour"){
      if( donnee === null){

      }
      else if(typeof donnee !== "object"){
        url = url + "&donnee=" + donnee.toString();
        
        console.log("donee",url);
      }
      else{
        url = url + "&donnee=" + donnee[0] + "&donnee=" + donnee[1];
      }
    }
    else{
      if(donnee !== null){
        url = url + "&donnee=" + donnee;
      }
    }
    this.http.get(api(url)).subscribe((result:any) => {
      let label = [""];
      let data= [0];
      let max = 0;
      result.chiffreAffaire.forEach((element:any) => {
        label.push(element.mois);
        data.push(element.revenu);
        if(max<Number(element.revenu)){  
          max = element.revenu;
        }
      });
      data.push(max+100);
      this.dataChiffreAffaire.labels = label;
      if(typeDonee === "mois"){
        this.dataChiffreAffaire.datasets[0].label="Chiffre d'affaire par mois pour l'année "+result.donnee;
        this.dataChiffreAffaire.datasets[0].backgroundColor = this.colorChiffreAffaire[0];
        this.dataChiffreAffaire.datasets[0].pointBackgroundColor = this.colorChiffreAffaire[0];
        this.dataChiffreAffaire.datasets[0].borderColor = this.colorChiffreAffaire[0];
      }
      else {
        this.dataChiffreAffaire.datasets[0].label="Chiffre d'affaire par jour pour le mois "+result.donnee[1]+" et l'année "+result.donnee[0];
        this.dataChiffreAffaire.datasets[0].backgroundColor = this.colorChiffreAffaire[1];
        this.dataChiffreAffaire.datasets[0].pointBackgroundColor = this.colorChiffreAffaire[1];
        this.dataChiffreAffaire.datasets[0].borderColor = this.colorChiffreAffaire[1];
      }
      this.dataChiffreAffaire.datasets[0].data = data;
      console.log("couc");
      // if(this.ready1){
      //   this.ready = true;
      // }
      // this.ready = true;
    },error => {})
  }
}
