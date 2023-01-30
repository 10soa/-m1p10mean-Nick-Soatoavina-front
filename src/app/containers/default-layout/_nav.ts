import { INavData } from '@coreui/angular';
// import { ActivatedRoute, Router } from '@angular/router';
// let ready = false;

// if(!localStorage.getItem('utilisateur') && !ready){
//   console.log("to");
  
//   ready = true;
//   window.location.href = '/';
// }

let nav = [];
if(localStorage.getItem('type_user')?.toLowerCase() === 'client'){
  nav = [
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
      // linkProps: { fragment: 'someAnchor' },
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
else if(localStorage.getItem('type_user')?.toLowerCase() === 'financier'){
  nav = [
    {
      name: 'Validation paiement',
      url: '/facture/validationPaie/0',
      iconComponent: { name: 'cil-check'},
      badge: {
        color: 'danger',
        text: 'new'
      }
    },
    {
      title: true,
      name: 'Depense'
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
else if(localStorage.getItem('type_user')?.toLowerCase() === 'atelier'){
  nav = [
    {
      name: 'Assignation voiture',
      url: '/depotVoiture/liste/0',
      iconComponent: { name: 'cil-task'},
      badge: {
        color: 'danger',
        text: 'new'
      }
    },
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
      name: 'Reparation'
    },
    {
      name: 'Reparation en cours',
      url: '/depotVoiture/reparation/0',
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
else {
  nav = [
    {
      name: 'Reparation voiture',
      url: '/dashboard',
      iconComponent: { name: 'cil-car-alt'},
      badge: {
        color: 'danger',
        text: 'new'
      }
    },
    {
      title: true,
      name: 'Theme'
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      iconComponent: { name: 'cil-drop' }
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      linkProps: { fragment: 'someAnchor' },
      iconComponent: { name: 'cil-pencil' }
    },
    {
      name: 'Components',
      title: true
    },
    {
      name: 'Base',
      url: '/base',
      iconComponent: { name: 'cil-puzzle' },
      children: [
        {
          name: 'Accordion',
          url: '/base/accordion'
        },
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs'
        },
        {
          name: 'Cards',
          url: '/base/cards'
        },
        {
          name: 'Carousel',
          url: '/base/carousel'
        },
        {
          name: 'Collapse',
          url: '/base/collapse'
        },
        {
          name: 'List Group',
          url: '/base/list-group'
        },
        {
          name: 'Navs & Tabs',
          url: '/base/navs'
        },
        {
          name: 'Pagination',
          url: '/base/pagination'
        },
        {
          name: 'Placeholder',
          url: '/base/placeholder'
        },
        {
          name: 'Popovers',
          url: '/base/popovers'
        },
        {
          name: 'Progress',
          url: '/base/progress'
        },
        {
          name: 'Spinners',
          url: '/base/spinners'
        },
        {
          name: 'Tables',
          url: '/base/tables'
        },
        {
          name: 'Tabs',
          url: '/base/tabs'
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons'
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups'
        },
        {
          name: 'Dropdowns',
          url: '/buttons/dropdowns'
        },
      ]
    },
    {
      name: 'Forms',
      url: '/forms',
      iconComponent: { name: 'cil-notes' },
      children: [
        {
          name: 'Form Control',
          url: '/forms/form-control'
        },
        {
          name: 'Select',
          url: '/forms/select'
        },
        {
          name: 'Checks & Radios',
          url: '/forms/checks-radios'
        },
        {
          name: 'Range',
          url: '/forms/range'
        },
        {
          name: 'Input Group',
          url: '/forms/input-group'
        },
        {
          name: 'Floating Labels',
          url: '/forms/floating-labels'
        },
        {
          name: 'Layout',
          url: '/forms/layout'
        },
        {
          name: 'Validation',
          url: '/forms/validation'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      iconComponent: { name: 'cil-chart-pie' }
    },
    {
      name: 'Icons',
      iconComponent: { name: 'cil-star' },
      url: '/icons',
      children: [
        {
          name: 'CoreUI Free',
          url: '/icons/coreui-icons',
          badge: {
            color: 'success',
            text: 'FREE'
          }
        },
        {
          name: 'CoreUI Flags',
          url: '/icons/flags'
        },
        {
          name: 'CoreUI Brands',
          url: '/icons/brands'
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/notifications',
      iconComponent: { name: 'cil-bell' },
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts'
        },
        {
          name: 'Badges',
          url: '/notifications/badges'
        },
        {
          name: 'Modal',
          url: '/notifications/modal'
        },
        {
          name: 'Toast',
          url: '/notifications/toasts'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      iconComponent: { name: 'cil-calculator' },
      badge: {
        color: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/login',
      iconComponent: { name: 'cil-star' },
      children: [
        {
          name: 'Login',
          url: '/login'
        },
        {
          name: 'Register',
          url: '/register'
        },
        {
          name: 'Error 404',
          url: '/404'
        },
        {
          name: 'Error 500',
          url: '/500'
        },
        {
          name: 'Test',
          url: '/listeVoitureDeposer/:off/:lim'
        }
      ]
    },
  ];
  
}

export const navItems: INavData[] = nav;