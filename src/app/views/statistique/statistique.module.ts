import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  AlertModule, ButtonGroupModule, ButtonModule, CalloutModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, NavModule, PaginationModule, SharedModule, SpinnerModule, TableModule, TabsModule, WidgetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsRoutingModule } from '../forms/forms-routing.module';
import { StatistiqueRoutingModule } from '../statistique/statistique-routing.module';
import { ChartjsModule } from '@coreui/angular-chartjs';
// import { ChartsModule } from '../charts/charts.module';
import { ChiffreAffaireComponent } from './chiffre-affaire/chiffre-affaire.component';
import { BeneficeComponent } from './benefice/benefice.component';


@NgModule({
  declarations: [
    ChiffreAffaireComponent,
    BeneficeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    FormsModule,
    ReactiveFormsModule,
    // FormsRoutingModule,
    IconModule,
    ModalModule,
    AlertModule,
    CardModule,
    TableModule,
    PaginationModule,
    SpinnerModule,
    StatistiqueRoutingModule,
    ChartjsModule,
    // ChartsModule,
    TabsModule,
    NavModule,
    WidgetModule,
    CalloutModule,
  ]
})
export class StatistiqueModule {
}
