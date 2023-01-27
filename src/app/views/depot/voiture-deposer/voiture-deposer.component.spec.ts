import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureDeposerComponent } from './voiture-deposer.component';

describe('VoitureDeposerComponent', () => {
  let component: VoitureDeposerComponent;
  let fixture: ComponentFixture<VoitureDeposerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureDeposerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitureDeposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
