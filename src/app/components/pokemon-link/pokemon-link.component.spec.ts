import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLinkComponent } from './pokemon-link.component';

describe('PokemonLinkComponent', () => {
  let component: PokemonLinkComponent;
  let fixture: ComponentFixture<PokemonLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
