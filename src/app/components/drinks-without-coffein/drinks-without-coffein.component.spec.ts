import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksWithoutCoffeinComponent } from './drinks-without-coffein.component';

describe('DrinksWithoutCoffeinComponent', () => {
  let component: DrinksWithoutCoffeinComponent;
  let fixture: ComponentFixture<DrinksWithoutCoffeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksWithoutCoffeinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksWithoutCoffeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
