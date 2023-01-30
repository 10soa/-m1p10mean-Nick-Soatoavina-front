import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, ButtonModule, TableModule, PageItemComponent, PaginationComponent, PaginationModule, ModalHeaderComponent, ModalModule, SpinnerModule, WidgetModule, DropdownModule, SharedModule, ProgressModule, FormModule, AlertModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DepenseComponent } from './depense.component';
import { PagesModule } from '../pages/pages.module';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DepenseRoutingModule} from './depense-routing.module'

@NgModule({
  imports: [
    CommonModule,
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
    DepenseRoutingModule,
  ],
  declarations: [
    DepenseComponent,
  ]
})
export class DepenseModule {
}
