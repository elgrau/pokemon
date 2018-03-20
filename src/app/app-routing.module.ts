import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-new', component: PokemonFormComponent },
  { path: 'pokemon-edit/:id', component: PokemonFormComponent },
  { path: 'pokemon-details/:id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
