import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeWithMilkComponent } from './coffee-with-milk.component';

describe('CoffeeWithMilkComponent', () => {
  let component: CoffeeWithMilkComponent;
  let fixture: ComponentFixture<CoffeeWithMilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeWithMilkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeWithMilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
