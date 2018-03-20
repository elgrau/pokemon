import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEditButtonComponent } from './pokemon-edit-button.component';

describe('PokemonEditButtonComponent', () => {
  let component: PokemonEditButtonComponent;
  let fixture: ComponentFixture<PokemonEditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonEditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
