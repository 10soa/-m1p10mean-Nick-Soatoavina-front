import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule, BadgeModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, PaginationModule, SharedModule, SpinnerModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactureListeComponent } from './facture-liste/facture-liste.component';
import { FactureRoutingModule } from './facture-routing.module';

@NgModule({
  declarations: [
    FactureListeComponent,
  ],
  imports: [
    CommonModule,
    FactureRoutingModule,
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
    IconModule,
    ModalModule,
    AlertModule,
    CardModule,
    TableModule,
    PaginationModule,
    SpinnerModule,
    BadgeModule,
  ]
})
export class FactureModule {
}
