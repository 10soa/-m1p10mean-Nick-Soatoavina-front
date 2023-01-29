import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficeComponent } from './benefice/benefice.component';
import { ChiffreAffaireComponent } from './chiffre-affaire/chiffre-affaire.component';
// import { ReparationHistoriqueComponent } from './reparation-historique/reparation-historique.component';

const routes: Routes = [
  {
    path: 'chiffreAffaire',
    component: ChiffreAffaireComponent,
    data: {
      title: "Statistique "
    }
  },
  {
    path: 'benefice',
    component: BeneficeComponent,
    data: {
      title: "Statistique "
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiqueRoutingModule {
}
