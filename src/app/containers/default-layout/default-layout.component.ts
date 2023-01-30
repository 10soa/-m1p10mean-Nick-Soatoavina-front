import { Component, OnInit } from '@angular/core';

import { navItems } from './_nav';
import { INavData } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{

  public navItems!:INavData[];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  public type_user = localStorage.getItem('type_user');

  constructor(private route:Router) {}

  ngOnInit(): void {
      if(!this.type_user){
        this.route.navigateByUrl('/');
      }
      else if(this.type_user.toLowerCase() === 'atelier'){
        this.navItems = [
          {
            name: 'Assignation voiture',
            url: '/depotVoiture/liste',
            iconComponent: { name: 'cil-task'},
            badge: {
              color: 'danger',
              text: 'new'
            }
          },
          {
            title: true,
            name: 'Reparation'
          },
          {
            name: 'Reparation en cours',
            url: '/depotVoiture/reparation',
            iconComponent: { name: 'cil-settings' }
          },
          {
            name: 'Validation bon de sortie',
            url: '/depotVoiture/bonSortie',
            iconComponent: { name: 'cil-arrow-thick-right' }
          },
          {
            name: 'Liste bon de sortie' ,
            url: '/voiture/bon-sortie',
            iconComponent: { name: 'cil-list' }
          },
        ]
      }
      else if(this.type_user.toLowerCase() === 'financier'){
        this.navItems = [
          {
            title: true,
            name: 'Proforma'
          },
          {
            name: 'liste des demandes',
            url: '/proforma/liste',
            iconComponent: { name: 'cil-notes' }
          },
          {
            title: true,
            name: 'Finance'
          },
          {
            name: 'Validation paiement',
            url: '/facture/validationPaie',
            iconComponent: { name: 'cil-check' }
          },
          {
            name: 'Prix de designation',
            url: '/depotVoiture/actusReparation',
            iconComponent: { name: 'cil-money' }
          },
          {
            name: 'depense',
            url: '/depense',
            iconComponent: { name: 'cil-cash' }
          },
          {
            title: true,
            name: 'Statistique'
          },
          {
            name: 'benefice',
            url: '/statistique/benefice',
            iconComponent: { name: 'cil-bar-chart' }
          },
          {
            name: "chiffre d'affaire",
            url: '/statistique/chiffreAffaire',
            iconComponent: { name: 'cil-chart-line' }
          },
        ]
      }
      else if(this.type_user.toLowerCase() === 'client'){
        this.navItems = [
          {
            name: 'Demande proforma',
            url: '/proforma/demande',
            iconComponent: { name: 'cil-car-alt'},
            badge: {
              color: 'danger',
              text: 'new'
            }
          },
          {
            title: true,
            name: 'Reparation'
          },
          {
            name: 'proforma',
            url: '/proforma/client',
            iconComponent: { name: 'cil-notes' }
          },
          {
            name: 'reparation en cours',
            url: '/depotVoiture/reparationClient',
            iconComponent: { name: 'cil-settings' }
          },
          {
            name: 'recuperation de voiture',
            url: '/voiture/recuperation',
            // linkProps: { fragment: 'someAnchor' },
            iconComponent: { name: 'cil-car-alt' }
          },
          {
            name: 'historique',
            url: '/voiture/historique',
            // linkProps: { fragment: 'someAnchor' },
            iconComponent: { name: 'cil-history' }
          },
          {
            title: true,
            name: 'Facture'
          },
          {
            name: 'paiement',
            url: '/facture/impaye',
            iconComponent: { name: 'cil-money' }
          },
          {
            name: 'factures',
            url: '/facture/liste',
            iconComponent: { name: 'cil-newspaper' }
          },
        ]
      }
  }
}
