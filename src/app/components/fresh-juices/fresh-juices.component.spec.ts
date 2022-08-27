import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshJuicesComponent } from './fresh-juices.component';

describe('FreshJuicesComponent', () => {
  let component: FreshJuicesComponent;
  let fixture: ComponentFixture<FreshJuicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshJuicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshJuicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
