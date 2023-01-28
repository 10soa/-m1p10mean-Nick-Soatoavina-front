import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureImpayeComponent } from './facture-impaye/facture-impaye.component';
import { FactureListeComponent } from './facture-liste/facture-liste.component';

const routes: Routes = [
  {
    path: 'liste',
    component: FactureListeComponent,
    data: {
      title: "Liste des factures"
    }
  },
  {
    path: 'impaye',
    component: FactureImpayeComponent,
    data: {
      title: "Liste des factures impayés"
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule {
}
