import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProformaDemandeComponent } from './proforma-demande/proforma-demande.component';
import { AlertModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, SharedModule, SpinnerModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProformaRoutingModule } from './proforma-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsRoutingModule } from '../forms/forms-routing.module'



@NgModule({
  declarations: [
    ProformaDemandeComponent,
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
  ]
})
export class ProformaModule {
}
