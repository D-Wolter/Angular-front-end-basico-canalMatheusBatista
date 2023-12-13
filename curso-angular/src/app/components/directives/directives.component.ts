import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent{
  @Input() classes: string[] = ['green-title', 'small-title']

  size = 40;

}
