import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProformaComponent } from './liste-proforma.component';

describe('ListeProformaComponent', () => {
  let component: ListeProformaComponent;
  let fixture: ComponentFixture<ListeProformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProformaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
