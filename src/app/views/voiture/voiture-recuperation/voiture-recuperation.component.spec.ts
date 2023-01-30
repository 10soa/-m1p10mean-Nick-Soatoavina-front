import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureRecuperationComponent } from './voiture-recuperation.component';

describe('VoitureRecuperationComponent', () => {
  let component: VoitureRecuperationComponent;
  let fixture: ComponentFixture<VoitureRecuperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureRecuperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitureRecuperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
