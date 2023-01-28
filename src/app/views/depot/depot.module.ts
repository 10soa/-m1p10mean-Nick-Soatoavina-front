import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, ButtonModule, TableModule, PageItemComponent, PaginationComponent, PaginationModule, ModalHeaderComponent, ModalModule, SpinnerModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DepotComponent } from './depot/depot.component';
import { VoitureDeposerComponent } from './voiture-deposer/voiture-deposer.component';
import { DepotRoutingModule } from './Depot-routing.module';
import { PagesModule } from '../pages/pages.module';

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
    SpinnerModule
  ],
  declarations: [
    DepotComponent,
    VoitureDeposerComponent
  ]
})
export class DepotModule {
}
