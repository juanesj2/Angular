import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBonitoComponent } from './formulario-bonito.component';

describe('FormularioBonitoComponent', () => {
  let component: FormularioBonitoComponent;
  let fixture: ComponentFixture<FormularioBonitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBonitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBonitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
