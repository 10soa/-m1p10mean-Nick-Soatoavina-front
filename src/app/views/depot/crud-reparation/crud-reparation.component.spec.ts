import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReparationComponent } from './crud-reparation.component';

describe('CrudReparationComponent', () => {
  let component: CrudReparationComponent;
  let fixture: ComponentFixture<CrudReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
