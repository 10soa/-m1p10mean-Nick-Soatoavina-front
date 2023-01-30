import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import api, { pagination } from 'src/app/const/api';

@Component({
  selector: 'app-bon-sortie',
  templateUrl: './bon-sortie.component.html',
  styleUrls: ['./bon-sortie.component.scss']
})
export class BonSortieComponent implements OnInit {
  public listeBonSortie = [
    {
      _id: "",
      marque: "",
      modele: "",
      numero: "",
      type_voiture: "",
      client_id: 4,
      reparation: {
          montant_total: 250.5,
          liste_reparation: [
              {
                  reparation: "",
                  prix: 250.5,
                  avancement: 100
              }
          ],
          date_deposition: "",
          date_reception: "",
          montant_paye: 250.5,
          bon_sortie: "",
          date_recuperation: ""
      },
      __v: 0,
      client: [
          {
              _id: "",
              nom: "",
              prenom: "",
              nom_utilisateur: "",
              mdp: "",
              mail: "",
              adresse: "",
              contact: "",
              valider: 1,
              client_id: 4,
              __v: 0
          }]
    }];
  public page = 0;
  public pageNumber = 20;
  public paginations = [1];
  ready = false;

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }
  
  ngOnInit(): void {
      this.getBonSorties(this.page,this.pageNumber);
  }

  getBonSorties(page:number,pageNumber:number){
    this.http.get(api('Voiture/listeBonSortie/'+page+'/'+pageNumber)).subscribe((result:any) => {
      this.page = result.result.page;
      this.pageNumber = result.result.pageNumber;
      this.paginations = pagination(result.result.totalPage);
      this.listeBonSortie = result.result.bonSortie;
      this.ready = true;
    },error => {})
  }

  comparaison(page: number,i:number){
    
    if(page == i){
      return true;
    }
    else{
      return false;
    }
   }
}