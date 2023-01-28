import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureImpayeComponent } from './facture-impaye.component';

describe('FactureImpayeComponent', () => {
  let component: FactureImpayeComponent;
  let fixture: ComponentFixture<FactureImpayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureImpayeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureImpayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
