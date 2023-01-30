import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import api from 'src/app/const/api';

@Component({
  selector: 'app-liste-proforma',
  templateUrl: './liste-proforma.component.html',
  styleUrls: ['./liste-proforma.component.scss']
})
export class ListeProformaComponent implements OnInit {
  public liveDemoVisible = false;
  public paginations = [1];
  public reparationSelectioned = [ { reparation: '', prix: 0 }];
  loading = false;
  demandeProforma = [
    {
      _id: "",
      marque: "",
      modele: "",
      numero: "",
      type_voiture:"",
      client_id: 0,
      reparation: [{reparation: '', prix: 0}],
      date_demande: Date,
      client: [{nom: "",prenom: "",}]
    }];
  page = 0;
  pageNumber = 20;
  totalPage = 0;
  index = 0;
  listeDemande!: [any];
  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.getDemandeProforma(this.page,this.pageNumber)
   }
 
   getDemandeProforma(page : number,pageNumber: number){
    this.http.get(api('Proforma?page='+page+'&pageNumber='+pageNumber)).subscribe((result:any) => {
      this.demandeProforma = result.data.liste;
      this.totalPage = result.data.totalPage;
      this.pageNumber = result.data.pageNumber;
      this.page = result.data.page;
      this.pagination(result.data.totalPage);
      this.listeDemande = result.data.liste;
    }, error => {})
   }

  pagination(totalPage: number){
    let page = [];
    for (let i = 1; i <= totalPage; i++) {
      page.push(i);
    }
    this.paginations = page;
   }

   comparaison(page: number,i:number){
    
    if(page == i){
      return true;
    }
    else{
      return false;
    }
   }

   toggleLiveDemo(index :  number) {
    
    this.setIndex(index);
    this.reparationSelectioned =this.demandeProforma[this.index].reparation;
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.getDemandeProforma(this.page,this.pageNumber)
    this.liveDemoVisible = event;
  }

  validationProforma(){
    this.loading = true;
    this.demandeProforma[this.index].reparation = [...this.reparationSelectioned];
    this.http.post(api('Proforma/reponse'),{url: window.location.origin , ...this.demandeProforma[this.index]}).subscribe(async (result) => {
      await this.getDemandeProforma(this.page,this.pageNumber);
      this.loading = false;
      this.liveDemoVisible = false;
    },error => {})
  }

  validation(index:number,i:number){
  }

  setIndex(index : number){
    this.index = index;
  }
   
}
