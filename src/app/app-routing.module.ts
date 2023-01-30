import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { VerificationComponent } from './views/pages/verificationInscription/verification.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Acceuil'
    },
    children: [
      {
        path: 'proforma',
        loadChildren: () =>
          import('./views/proforma/proforma.module').then((m) => m.ProformaModule)
      },
      {
        path: 'facture',
        loadChildren: () =>
          import('./views/facture/facture.module').then((m) => m.FactureModule)
      },
      {
        path: 'depotVoiture',
        loadChildren: () =>
          import('./views/depot/depot.module').then((m) => m.DepotModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'voiture',
        loadChildren: () =>
          import('./views/voiture/voiture.module').then((m) => m.VoitureModule)
      },
      {
        path: 'statistique',
        loadChildren: () =>
          import('./views/statistique/statistique.module').then((m) => m.StatistiqueModule)
      },
      {
        path: 'depense',
        loadChildren: () =>
          import('./views/depense/depense.module').then((m) => m.DepenseModule)
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'verificationMail/:nom/:prenom/:mail',
    component: VerificationComponent,
    data: {
      title: 'Verification Inscription'
    }
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
