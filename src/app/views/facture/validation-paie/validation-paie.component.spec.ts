import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPaieComponent } from './validation-paie.component';

describe('ValidationPaieComponent', () => {
  let component: ValidationPaieComponent;
  let fixture: ComponentFixture<ValidationPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
