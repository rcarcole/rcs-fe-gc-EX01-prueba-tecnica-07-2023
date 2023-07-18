import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePokemonsComponent } from './detalle-pokemons.component';

describe('DetallePokemonsComponent', () => {
  let component: DetallePokemonsComponent;
  let fixture: ComponentFixture<DetallePokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePokemonsComponent]
    });
    fixture = TestBed.createComponent(DetallePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
