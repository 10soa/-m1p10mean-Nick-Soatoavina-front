import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, ButtonModule, TableModule, PageItemComponent, PaginationComponent, PaginationModule, ModalHeaderComponent, ModalModule, SpinnerModule, WidgetModule, DropdownModule, SharedModule, ProgressModule, FormModule, AlertModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DepotComponent } from './depot/depot.component';
import { VoitureDeposerComponent } from './voiture-deposer/voiture-deposer.component';
import { DepotRoutingModule } from './Depot-routing.module';
import { PagesModule } from '../pages/pages.module';
import { ReparationComponent } from './reparation/reparation.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReparationClientComponent } from './reparation-client/reparation-client.component';
import { BonSortieComponent } from './bon-sortie/bon-sortie.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    DepotRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    CardModule,
    GridModule,
    NavModule,
    TabsModule,
    TableModule,
    ButtonModule,
    UtilitiesModule,
    PagesModule,
    PaginationModule,
    ModalModule,
    SpinnerModule,  
    ChartjsModule,
    WidgetModule,
    DropdownModule,
    SharedModule,
    ProgressModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    DragDropModule
  ],
  declarations: [
    DepotComponent,
    VoitureDeposerComponent,
    ReparationComponent,
    ReparationClientComponent,
    BonSortieComponent
  ]
})
export class DepotModule {
}
