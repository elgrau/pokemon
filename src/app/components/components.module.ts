import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonLinkComponent } from './pokemon-link/pokemon-link.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { PokemonEditButtonComponent } from './pokemon-edit-button/pokemon-edit-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent,
    FavoriteComponent,
    PokemonTypeComponent,
    PokemonLinkComponent,
    PokemonTableComponent,
    DashboardCardComponent,
    PokemonEditButtonComponent
  ],
  exports: [
    SidebarComponent,
    FavoriteComponent,
    PokemonTypeComponent,
    PokemonLinkComponent,
    PokemonTableComponent,
    DashboardCardComponent,
    PokemonEditButtonComponent
  ]
})
export class ComponentsModule { }
