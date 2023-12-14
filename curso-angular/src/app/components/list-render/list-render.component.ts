import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    { name: 'Astro', type: 'Dog' },
    { name: 'Minho', type: 'Cat' },
    { name: 'Raja', type: 'Cat' },
    { name: 'Billy', type: 'Bird' },
  ];

}
