import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../interfaces/Animals';
import { ListService  } from '../../service/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [

  ];

  animal: Animal = {
    name: "teste",
    type: "teste",
    age: '10',
  };

  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  removeAnimal(animal: Animal) {
    console.log("removendo animal")
    this.animals = this.listService.remove(this.animals, animal)
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
