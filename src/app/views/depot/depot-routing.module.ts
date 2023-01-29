import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepotComponent } from './depot/depot.component';
import { VoitureDeposerComponent } from './voiture-deposer/voiture-deposer.component';
import { ReparationComponent } from './reparation/reparation.component';
import { ReparationClientComponent } from './reparation-client/reparation-client.component';
import { BonSortieComponent } from './bon-sortie/bon-sortie.component';
const routes: Routes = [
  {
    path: 'liste/:off',
    component: VoitureDeposerComponent,
    data: {
      title: 'Deposer'
    }
  },
  {
    path: 'reparation/:off',
    component: ReparationComponent,
    data: {
      title: 'Reparation Avancement'
    }
  },
  {
    path: 'reparationClient',
    component: ReparationClientComponent,
    data: {
      title: 'Reparation Avancement'
    }
  },
  {
    path: 'bonSortie',
    component: BonSortieComponent,
    data: {
      title: 'Validation bon de sortie'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotRoutingModule {}
