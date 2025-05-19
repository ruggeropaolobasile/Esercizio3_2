import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileDisponibileComponent } from './automobile-disponibile.component';

describe('AutomobileDisponibileComponent', () => {
  let component: AutomobileDisponibileComponent;
  let fixture: ComponentFixture<AutomobileDisponibileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobileDisponibileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileDisponibileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
