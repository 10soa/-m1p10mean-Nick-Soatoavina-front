import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonSortieComponent } from './bon-sortie/bon-sortie.component';
import { ReparationHistoriqueComponent } from './reparation-historique/reparation-historique.component';
import { StatistiqueComponent } from './statistique/statistique.component';
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
  {
    path: 'bon-sortie',
    component: BonSortieComponent,
    data: {
      title: "Liste des bon de sorties"
    }
  },
  {
    path: 'statistique',
    component: StatistiqueComponent,
    data: {
      title: "Statistique"
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoitureRoutingModule {
}
