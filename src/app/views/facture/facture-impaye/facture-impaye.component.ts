import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import api, { pagination } from 'src/app/const/api';

@Component({
  selector: 'app-facture-impaye',
  templateUrl: './facture-impaye.component.html',
  styleUrls: ['./facture-impaye.component.scss']
})
export class FactureImpayeComponent {
  dismissible = true;
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
  index!:number;
  diff!:number;
  paie!:number;
  error = '';
  visibleError = false;
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
  pageNumber = 100;
  paginations!:number[];
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
    })
  }

  paiement(montant:number){
    if(montant > this.diff){
      this.error = "Le montant est supérieur au montant que vous devez payer";
      this.visibleError = true;
    }
    else{
      this.http.put(api('Voiture/paiement/'+this.client.client_id),{montant:montant,date_deposition:this.facture.reparation.date_deposition, ...this.facture}).subscribe((result) => {
        this.facture.reparation.montant_paye = this.facture.reparation.montant_paye + montant;
        this.paie = 1;
        this.liveDemoVisible = false;
      },error => { console.log(error.error.message)})
    }
    
  }

  onAlertVisibleChange(eventValue: any = this.visibleError) {
    this.visibleError = eventValue;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
    this.error = "";
    this.paie = 1;
    this.visibleError = false;
  }

  pagePaiement(i:number,diff:number){
    this.index = i;
    this.diff = diff;
    this.facture = this.listeFacture[i];
    this.liste_reparation = this.listeFacture[i].reparation.liste_reparation;
    this.liveDemoVisible = true;
  }
}
