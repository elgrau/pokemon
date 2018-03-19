import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonLinkComponent } from './pokemon-link/pokemon-link.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';

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
    DashboardCardComponent
  ],
  exports: [
    SidebarComponent,
    FavoriteComponent,
    PokemonTypeComponent,
    PokemonLinkComponent,
    PokemonTableComponent,
    DashboardCardComponent
  ]
})
export class ComponentsModule { }
