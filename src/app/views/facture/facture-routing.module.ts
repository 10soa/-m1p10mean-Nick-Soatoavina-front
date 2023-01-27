import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureListeComponent } from './facture-liste/facture-liste.component';

const routes: Routes = [
  {
    path: 'liste',
    component: FactureListeComponent,
    data: {
      title: "Liste des factures"
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule {
}
