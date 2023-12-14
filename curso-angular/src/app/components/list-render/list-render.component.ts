import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../interfaces/Animals';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Astro', type: 'Dog', age: '6'},
    { name: 'Minho', type: 'Cat', age: '10' },
    { name: 'Raja', type: 'Cat', age: '14' },
    { name: 'Billy', type: 'Bird', age: '8' },
  ];

  animalDetails = ''



  showAge(animal: Animal) {
    this.animalDetails = `O Pet ${animal.name} tem ${animal.age} anos de idade!`;
  }

}
