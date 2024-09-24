import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './inventory-routing.module';
import { PokemonDetailComponent } from './create-edit/create-edit.component';
import { PokemonListComponent } from './inventory-list/inventory-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class PokemonModule { }
