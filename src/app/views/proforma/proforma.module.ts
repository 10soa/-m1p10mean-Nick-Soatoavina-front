import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProformaDemandeComponent } from './proforma-demande/proforma-demande.component';
import { AlertModule, BadgeModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, NavModule, PaginationModule, SharedModule, SpinnerModule, TableModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProformaRoutingModule } from './proforma-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ListeProformaComponent } from './liste-proforma/liste-proforma.component';
import { ProformaClientComponent } from './proforma-client/proforma-client.component'



@NgModule({
  declarations: [
    ProformaDemandeComponent,
    ListeProformaComponent,
    ProformaClientComponent,
  ],
  imports: [
    CommonModule,
    ProformaRoutingModule,
    DocsComponentsModule,
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
    TabsModule,
    NavModule,
    BadgeModule
  ]
})
export class ProformaModule {
}
