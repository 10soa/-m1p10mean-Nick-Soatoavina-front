import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProformaDemandeComponent } from './proforma-demande/proforma-demande.component';
import { AlertModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, PaginationModule, SharedModule, SpinnerModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProformaRoutingModule } from './proforma-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ListeProformaComponent } from './liste-proforma/liste-proforma.component'



@NgModule({
  declarations: [
    ProformaDemandeComponent,
    ListeProformaComponent,
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
  ]
})
export class ProformaModule {
}
