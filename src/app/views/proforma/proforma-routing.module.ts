import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProformaComponent } from './liste-proforma/liste-proforma.component';
import { ProformaDemandeComponent } from './proforma-demande/proforma-demande.component';

const routes: Routes = [
  {
    path: 'demande',
    component: ProformaDemandeComponent,
    data: {
      title: "Demande d'un proforma"
    }
  },
  {
    path: 'liste',
    component: ListeProformaComponent,
    data: {
      title: "Liste des proforma"
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProformaRoutingModule {
}
