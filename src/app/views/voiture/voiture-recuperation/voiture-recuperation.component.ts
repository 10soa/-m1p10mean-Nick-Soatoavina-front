import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import api from 'src/app/const/api';

@Component({
  selector: 'app-voiture-recuperation',
  templateUrl: './voiture-recuperation.component.html',
  styleUrls: ['./voiture-recuperation.component.scss']
})
export class VoitureRecuperationComponent implements OnInit{
  
  public client = JSON.parse(localStorage.getItem('utilisateur') || '{}');
  dismissible = true;
  error = '';
  loading = false;
  visibleError = false;
  public listeVoiture = [{ 
    marque: "Peugeot",
    modele: "206",
    numero: "1245 TAB",
    type_voiture: "SUV",
    client_id: 4,
    reparation: {
        montant_total: 250.5,
        liste_reparation: [{reparation: "",prix: 0.,avancement: 0}],
        date_deposition: "",
        date_reception: "",
        montant_paye: 0
  }}]
  ready = false ;

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.getListeVoitureR()
  }

  getListeVoitureR(){
    this.http.get(api('Voiture/recuperationVoiture/'+this.client.client_id)).subscribe((result :any) => {
      this.listeVoiture = result.result;
      this.ready = true;
    },error => {
      this.error = error.error.message;
      this.visibleError = true;
    })
  }

  onAlertVisibleChange(eventValue: any = this.visibleError) {
    this.visibleError = eventValue;
  }

  recuperer(i: number){
    this.loading = true;
    this.http.put(api('Voiture/validationRecuperationVoiture/'+this.listeVoiture[i].marque+'/'+this.listeVoiture[i].modele+'/'+this.listeVoiture[i].numero+'/'+this.listeVoiture[i].type_voiture+'/'+this.client.client_id+'/'+this.listeVoiture[i].reparation.montant_total+'/'+this.listeVoiture[i].reparation.date_deposition),{}).subscribe((result:any) => {
      this.listeVoiture = this.listeVoiture.filter((rep,index) => index!==i);
      this.error =""
      this.visibleError = false;
      this.loading = false;
    },error => {
      this.error = error.error.message;
      this.visibleError = true;
      this.loading = false;
    })
  }

}
