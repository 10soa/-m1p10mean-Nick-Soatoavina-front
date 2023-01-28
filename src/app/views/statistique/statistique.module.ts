import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule, AlertModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, PaginationModule, SharedModule, SpinnerModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { StatistiqueRoutingModule } from '../statistique/statistique-routing.module';


@NgModule({
  declarations: [
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
    StatistiqueRoutingModule,
    AccordionModule
  ]
})
export class StatistiqueModule {
}
