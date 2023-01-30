import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconSetModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from 'src/components';

import { ProformaDemandeComponent } from './proforma-demande.component';

describe('ProformaDemandeComponent', () => {
  let component: ProformaDemandeComponent;
  let fixture: ComponentFixture<ProformaDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProformaDemandeComponent ],
      imports :[FormModule, CardModule, GridModule, ButtonModule, DocsComponentsModule, RouterTestingModule],
      providers:[IconSetModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProformaDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
