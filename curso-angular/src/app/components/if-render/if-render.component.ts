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
  canShow: boolean = true;
  userType: string = 'premium' 
  role: string = '' // trocar p 'admin' para renderizar If inline

  constructor() {}

  ngOnInit(): void {}

}
