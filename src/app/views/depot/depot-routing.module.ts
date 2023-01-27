import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepotComponent } from './depot/depot.component';
import { VoitureDeposerComponent } from './voiture-deposer/voiture-deposer.component';

const routes: Routes = [
  {
    path: ':off/:lim',
    component: VoitureDeposerComponent,
    data: {
      title: 'Deposer'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotRoutingModule {}
