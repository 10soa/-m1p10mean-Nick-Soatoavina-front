import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import api from 'src/app/const/api';

@Component({
  selector: 'app-reparation-historique',
  templateUrl: './reparation-historique.component.html',
  styleUrls: ['./reparation-historique.component.scss']
})
export class ReparationHistoriqueComponent implements OnInit{
  public ready = false;
  public listeVoiture = [{
    _id: "",
    marque: "",
    modele: "",
    numero: "",
    type_voiture: "",
    client_id: 0,
    __v: 0,
    reparation: [
      {
          montant_total: 0,
          liste_reparation: [
              {
                  reparation: "",
                  prix: 0,
                  avancement: 0
              }
          ],
          date_deposition: "",
          date_reception: "",
          montant_paye: 0,
          bon_sortie: "",
          date_recuperation: ""
      }
  ],
  }];
  public client = JSON.parse(localStorage.getItem('utilisateur') || '{}');

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
      this.getHistoriqueClient();
  }

  getHistoriqueClient(){
    this.http.get(api('Voiture/historique/'+this.client.client_id)).subscribe((result : any) => {
      this.listeVoiture = result.data;
      this.ready = true;
    })
  }
}
