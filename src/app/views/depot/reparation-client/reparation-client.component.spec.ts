import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationClientComponent } from './reparation-client.component';

describe('ReparationClientComponent', () => {
  let component: ReparationClientComponent;
  let fixture: ComponentFixture<ReparationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
