import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import api from 'src/app/const/api';

@Component({
  selector: 'app-chiffre-affaire',
  templateUrl: './chiffre-affaire.component.html',
  styleUrls: ['./chiffre-affaire.component.scss']
})
export class ChiffreAffaireComponent {
  public tempsMoyen = '';
  ready = false;
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
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('mois')
  });
  public listeAnnee = [0];
  public mois!:string;
  public annee!:string;
  public colorChiffreAffaire = ["rgb(229, 83, 83)","rgb(128,0,64)"];
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

  public month = true;
  public day = false;

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  async ngOnInit() {
    this.tempsReparationMoyen();
    this.getChiffreAffaire(this.typeDonnee,null);
    const date = new Date(Date.now());
    const annee = [date.getFullYear()];
    for(let i =date.getFullYear()-1;i>=1999;i--){
      annee.push(i)
    }
    this.listeAnnee = annee;
  }

  tempsReparationMoyen(){
    this.http.get(api('Voiture/statistique/tempsMoyenReparation')).subscribe((result:any) => {
      this.tempsMoyen = result.duree;
    })
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.ready = false;
    const date = new Date(Date.now())
    if(value === "mois"){
      this.month = true;
      this.donnee = date.getFullYear();
      this.day = false;
      this.getChiffreAffaire(value,this.donnee);
    }
    else{
      this.donnee = [];
      this.day = true;
      this.month = false;
      this.donnee[0] = date.getFullYear();
      this.donnee[1]=date.getMonth()
      this.getChiffreAffaire(value,this.donnee);
    }
    
  }

  getChiffreAffaire(typeDonee:string,donnee:any){
    this.ready = false;
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
      this.ready = true;
    },error => {})
  }

  onSelected(value:string): void {
		this.annee = value;
	}

  onSelectedMois(value:string): void {
		this.donnee[1] = value;
	}

  onSelectedAnnee(value:string): void {
		this.donnee[0] = value;
	}

}
