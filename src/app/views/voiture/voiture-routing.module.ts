import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReparationHistoriqueComponent } from './reparation-historique/reparation-historique.component';
import { VoitureRecuperationComponent } from './voiture-recuperation/voiture-recuperation.component';

const routes: Routes = [
  {
    path: 'historique',
    component: ReparationHistoriqueComponent,
    data: {
      title: "Historique"
    }
  },
  {
    path: 'recuperation',
    component: VoitureRecuperationComponent,
    data: {
      title: "Recupération des voitures"
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoitureRoutingModule {
}
