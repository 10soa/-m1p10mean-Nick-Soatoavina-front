import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";
  
  public type_user = localStorage.getItem('type_user');

  constructor(private classToggler: ClassToggleService, private route : Router) {
    super();
  }

  deconnexion(){
    localStorage.clear();
    this.route.navigateByUrl('/')
  }
}
