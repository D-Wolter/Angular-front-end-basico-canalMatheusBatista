import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent implements OnInit {
  @Input() canShow: boolean = true;
  @Input() userType: string = 'premium'
  @Input() role: string = 'base' //admin 

  constructor() {}

  ngOnInit(): void {}

}
