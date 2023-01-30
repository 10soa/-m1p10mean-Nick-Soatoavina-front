import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoitureDeposerComponent } from './voiture-deposer/voiture-deposer.component';
import { ReparationComponent } from './reparation/reparation.component';
import { ReparationClientComponent } from './reparation-client/reparation-client.component';
import { BonSortieComponent } from './bon-sortie/bon-sortie.component';
import { CrudReparationComponent } from './crud-reparation/crud-reparation.component';
const routes: Routes = [
  {
    path: 'liste',
    component: VoitureDeposerComponent,
    data: {
      title: 'Deposer'
    }
  },
  {
    path: 'reparation',
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
  },
  {
    path: 'actusReparation',
    component: CrudReparationComponent,
    data: {
      title: 'Actus réparation'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotRoutingModule {}
