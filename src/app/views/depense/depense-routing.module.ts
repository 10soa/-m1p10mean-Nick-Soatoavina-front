import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepenseComponent } from './depense.component';
const routes: Routes = [
  {
    path: '',
    component: DepenseComponent,
    data: {
      title: 'Depense'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepenseRoutingModule {}
