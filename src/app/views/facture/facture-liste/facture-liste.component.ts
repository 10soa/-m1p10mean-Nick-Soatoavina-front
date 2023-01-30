import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import api from 'src/app/const/api';
import { pagination } from 'src/app/const/api';

@Component({
  selector: 'app-facture-liste',
  templateUrl: './facture-liste.component.html',
  styleUrls: ['./facture-liste.component.scss']
})
export class FactureListeComponent implements OnInit{
    public facture = { _id : '',
    marque: "",
    modele: "",
    numero: "",
    type_voiture: "",
    client_id: 0,
    reparation: {
      montant_total: 0,
      date_deposition: '',
      date_reception: '',
      montant_paye: 0,
      bon_sortie: '',
      date_recuperation:'',
      liste_reparation: [{reparation: "",prix:0,avancement:0}],
      paiement: [{montant:0,date:"",validation:1},],
    },};
    public liveDemoVisible = false;
    public liste_reparation = [{reparation: "",prix:0,avancement:0}]
    public listeFacture = [
      {
        _id : '',
        marque: "",
        modele: "",
        numero: "",
        type_voiture: "",
        client_id: 0,
        reparation: {
          montant_total: 0,
          date_deposition: '',
          date_reception: '',
          montant_paye: 0,
          bon_sortie: '',
          date_recuperation:'',
          liste_reparation: [{reparation: "",prix:0,avancement:0}],
          paiement: [{montant:0,date:"",validation:1},],
        }
      }];
    page = 0;
    pageNumber = 20;
    paginations!:number[];
    ready = false;
    public client = JSON.parse(localStorage.getItem('utilisateur') || '{}');
    constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router){}

    ngOnInit(): void {
        this.getListefacture(this.page,this.pageNumber);
    }

    getListefacture(page : number,pageNumber : number){
      this.http.get(api('Voiture/clientFactures/'+this.client.client_id+'?page='+page+'&pageNumber='+pageNumber)).subscribe((result:any) => {
          this.page = page;
          this.pageNumber = pageNumber;
          this.listeFacture = result.factures.facture;
          this.paginations = pagination(result.factures.totalPage);
          this.ready = true;
      })
    }

    paiement(montant:number){
      this.http.put(api('Voiture/paiement/'+this.client.client_id),{montant:montant,date_deposition:this.facture.reparation.date_deposition, ...this.facture}).subscribe((result) => {
        this.liveDemoVisible = false;
      },error => { console.log(error.error.message)})
    }
  
    handleLiveDemoChange(event: boolean) {
      this.liveDemoVisible = event;
    }

    comparaison(page: number,i:number){
    
      if(page == i){
        return true;
      }
      else{
        return false;
      }
     }

     factureDetails(id:string,date:string){
      this.http.get(api('Voiture/facture/'+id+'?date_deposition='+date)).subscribe((result:any) => {
        this.facture = result.result[0];
        this.liste_reparation = this.facture.reparation.liste_reparation;
        this.liveDemoVisible = true;
    })
     }
}
