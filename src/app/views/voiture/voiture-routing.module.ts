import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReparationHistoriqueComponent } from './reparation-historique/reparation-historique.component';

const routes: Routes = [
  {
    path: 'historique',
    component: ReparationHistoriqueComponent,
    data: {
      title: "Historique"
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoitureRoutingModule {
}
