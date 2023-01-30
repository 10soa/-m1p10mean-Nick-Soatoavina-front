import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertModule, ButtonModule, CalloutModule, CardModule, FormModule, GridModule, SpinnerModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VerificationComponent } from './verificationInscription/verification.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerificationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    SpinnerModule,
    CalloutModule
  ]
})
export class PagesModule {
}
