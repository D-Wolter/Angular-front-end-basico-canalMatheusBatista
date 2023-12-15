import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../interfaces/Animals';
import { ListService  } from '../../service/list.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [];


  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((item) => (animal.name !== item.name));
    this.listService.remove(animal.id).subscribe();
  }

  showAge(animal: Animal) {
    this.animalDetails = `O Pet ${animal.name} tem ${animal.age} anos de idade!`;
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals;
    });
  }

}
