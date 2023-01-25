import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModule, CalloutModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { VerificationComponent } from './verification.component';

describe('VerificationComponent', () => {
  let component: VerificationComponent;
  let fixture: ComponentFixture<VerificationComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationComponent ],
      imports: [CardModule, FormModule, GridModule, ButtonModule, IconModule,CalloutModule],
      providers: [IconSetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(VerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
