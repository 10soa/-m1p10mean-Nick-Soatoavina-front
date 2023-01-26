import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProformaDemandeComponent } from './proforma-demande/proforma-demande.component';

const routes: Routes = [
  {
    path: 'demande',
    component: ProformaDemandeComponent,
    data: {
      title: "Demande d'un proforma"
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProformaRoutingModule {
}
