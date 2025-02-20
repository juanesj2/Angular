import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerroComponent } from './card-perro.component';

describe('CardPerroComponent', () => {
  let component: CardPerroComponent;
  let fixture: ComponentFixture<CardPerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPerroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
