import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule, AlertModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, NavModule, PaginationModule, SharedModule, SpinnerModule, TableModule, TabsModule, WidgetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { VoitureRoutingModule } from '../voiture/voiture-routing.module';
import { ReparationHistoriqueComponent } from './reparation-historique/reparation-historique.component';
import { VoitureRecuperationComponent } from './voiture-recuperation/voiture-recuperation.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { ChartsModule } from '../charts/charts.module';
import { BonSortieComponent } from './bon-sortie/bon-sortie.component';


@NgModule({
  declarations: [
    ReparationHistoriqueComponent,
    VoitureRecuperationComponent,
    StatistiqueComponent,
    BonSortieComponent
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
    FormsRoutingModule,
    IconModule,
    ModalModule,
    AlertModule,
    CardModule,
    TableModule,
    PaginationModule,
    SpinnerModule,
    VoitureRoutingModule,
    AccordionModule,
    ChartjsModule,
    ChartsModule,
    TabsModule,
    NavModule,
    WidgetModule
  ]
})
export class VoitureModule {
}
