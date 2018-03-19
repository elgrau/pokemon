import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

import { PokemonService } from './shared/pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FormsModule,
    AppRoutingModule,
    BootstrapModalModule,
    MultiselectDropdownModule,
    AngularMultiSelectModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
