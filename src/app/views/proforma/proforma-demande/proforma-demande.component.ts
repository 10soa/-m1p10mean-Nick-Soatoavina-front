import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import api from '../../../const/api';
@Component({
  selector: 'app-proforma-demande',
  templateUrl: './proforma-demande.component.html',
  styleUrls: ['./proforma-demande.component.scss']
})
export class ProformaDemandeComponent implements OnInit {
  public liveDemoVisible = false;
  dismissible = true;
  public voitureVisible = false;
  public listeVoiture = [{ numero : '', marque : '' , modele : '', type_voiture : ''}];
  public voiture = { numero : '', marque : '' , modele : '', type_voiture : ''};
  error = '';
  visibleError = false;
  public type = "SUV";
  public index = -1;
  form : FormGroup = this.formBuilder.group({
    numero: ['', Validators.required],
    marque: ['', Validators.required],
    modele: ['', Validators.required],
});
  rep = true;
  public listeTypeVoiture = ["SUV","4*4","camion","petit"];
  public client = JSON.parse(localStorage.getItem('utilisateur') || '{}');
  public listeReparation = [{reparation:'',montant:0}];
  public reparations  = [{reparation : '',montant:0}];
  // public client : Object = JSON.parse(localStorage.getItem('utilisateur'));
  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
   this.getVoitures();
  }

  getVoitures(){
    this.http.get(api("Voiture/historique/"+this.client.client_id)).subscribe( (result : any) =>{
      this.listeVoiture = result.data;
    }
      )
  }


  onAlertVisibleChange(eventValue: any = this.visibleError) {
    this.visibleError = eventValue;
  }

  addReparation(){
    if(this.reparations[0].reparation === ''){
      this.reparations[0] = this.listeReparation[this.index];
    }
    else{
      this.reparations.push(this.listeReparation[this.index]);
    }
    this.liveDemoVisible = false;
  }

  repSelected(value:string){
    this.index = Number(value);
  }

  supprimerReparation(i:Number){
    this.reparations = this.reparations.filter((rep,index) => index!==i);
  }

  getReparations(){
    this.http.get(api("Reparation/typeVoiture?type="+this.voiture.type_voiture)).subscribe( (result : any) =>{
      this.listeReparation = result.result;
    }
      )
  }

  demandeProforma(){
    if(this.reparations.length > 0 && this.voiture.marque!==''){
      if(this.reparations[0].reparation!==''){
        this.http.post(api("Proforma/demande"),{ client_id:this.client.client_id , marque : this.voiture.marque , numero : this.voiture.numero , modele : this.voiture.modele , reparation : this.reparations}).subscribe((res) => {
          this.router.navigateByUrl('/dashboard');},
          error => {})
      }
      else {
        this.visibleError = true;
        this.error = "Vous devez selectionner au moins une reparation et une voiture"
        }
    }
    else{
      this.visibleError = true;
      this.error = "Vous devez selectionner au moins une reparation et une voiture"
    }
  }

  onSelected(value:string): void {
		if(value >="0"){
      this.voiture=this.listeVoiture[Number(value)];
      this.getReparations();
      this.rep = false;
      console.log(this.rep);
    }
    else if (value ==="-1"){
      this.voitureVisible = true;
    }
	}

  get f() { 
    return this.form.controls; 
  }

  

  addVoiture(){
    this.listeVoiture.push({ type_voiture : this.type , modele : String(this.f['modele'].value),marque : String(this.f['marque'].value),numero : String(this.f['numero'].value)});
    this.voitureVisible = false;
    // console.log(this.type);
    
  }

  typeSelected(value:string): void {
		this.type = value;
    console.log(this.type,"type");
    
	}

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    console.log("demo",this.liveDemoVisible);
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  toggleVoiture() {
    this.voitureVisible = !this.voitureVisible;
  }

  handleVoitureChange(event: boolean) {
    console.log(event);
    this.voitureVisible = event;
  }
}
