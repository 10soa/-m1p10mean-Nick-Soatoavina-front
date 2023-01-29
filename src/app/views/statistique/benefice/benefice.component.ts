import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import api from 'src/app/const/api';

@Component({
  selector: 'app-benefice',
  templateUrl: './benefice.component.html',
  styleUrls: ['./benefice.component.scss']
})
export class BeneficeComponent {
  public tempsMoyen = '';
  ready = false;
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
  public annee!:string;
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
    this.getBenefice(null);
    this.tempsReparationMoyen();
    const date = new Date(Date.now());
    const annee = [date.getFullYear()];
    for(let i =date.getFullYear()-1;i>=1999;i--){
      annee.push(i)
    }
    this.listeAnnee = annee;
  }

  getBenefice(annee:any){
    this.ready = false;
    let url = 'Voiture/statistique/benefice';
    if(annee !== null){
      console.log(false);
      url = url +'?année=' + annee;
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

  onSelected(value:string): void {
		this.annee = value;
	}

 
}
