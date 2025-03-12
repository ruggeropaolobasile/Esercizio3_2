import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileComponent } from './automobili.component';

describe('AutomobiliComponent', () => {
  let component: AutomobileComponent;
  let fixture: ComponentFixture<AutomobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
