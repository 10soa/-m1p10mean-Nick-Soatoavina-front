import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformaClientComponent } from './proforma-client.component';

describe('ProformaClientComponent', () => {
  let component: ProformaClientComponent;
  let fixture: ComponentFixture<ProformaClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProformaClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProformaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
