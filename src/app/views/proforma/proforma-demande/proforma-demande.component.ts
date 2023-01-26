import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import api from '../../../const/api';
@Component({
  selector: 'app-proforma-demande',
  templateUrl: './proforma-demande.component.html',
  styleUrls: ['./proforma-demande.component.scss']
})
export class ProformaDemandeComponent implements OnInit {
  public liveDemoVisible = false;
  public voitureVisible = false;
  public listeVoiture = [{ numero : '', marque : '' , modele : '', type_voiture : ''
  }];
  public voiture = { numero : '', marque : '' , modele : '', type_voiture : ''
};
  public type = "";
  form : FormGroup = this.formBuilder.group({
    numero: ['', Validators.required],
    marque: ['', Validators.required],
    modele: ['', Validators.required],
});

  public listeTypeVoiture = ["SUV","4*4","camion","petit"];
  public client = JSON.parse(localStorage.getItem('utilisateur') || '{}');
  public listeReparation = {};
  public reparations = [];
  // public client : Object = JSON.parse(localStorage.getItem('utilisateur'));
  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.getVoitures();
  }

  getVoitures(){
    this.http.get(api("Voiture/historique/"+this.client.client_id)).subscribe( (result : any) =>{
      this.listeVoiture = result.data;
    }
      )
  }

  getReparations(){
    this.http.get(api("Reparation/typeVoiture/"+this.voiture.type_voiture)).subscribe( (result : any) =>{
      this.listeVoiture = result.data;
    }
      )
  }

  onSelected(value:string): void {
		if(value !=="-1"){
      this.voiture=this.listeVoiture[Number(value)];
    }
    else if (value ==="-1"){
      console.log("lol");
      
      this.voitureVisible = true;
    }
	}

  get f() { 
    return this.form.controls; 
  }

  

  addVoiture(){
    this.listeVoiture.push({ type_voiture : this.type , modele : String(this.f['modele'].value),marque : String(this.f['marque'].value),numero : String(this.f['numero'].value)});
    this.voitureVisible = false;
  }

  typeSelected(value:string): void {
		this.type = value;
    console.log(this.type,"type");
    
	}

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    this.voitureVisible = false;
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
