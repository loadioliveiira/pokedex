import { Component, NgModule, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons = [
    'Bulbasaur', 'Ivysaur', 'Venosaur', 'Charmander'];
}
