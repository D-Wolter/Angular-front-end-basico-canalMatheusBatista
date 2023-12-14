import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receiver-emit',
  standalone: true,
  imports: [],
  templateUrl: './receiver-emit.component.html',
  styleUrl: './receiver-emit.component.css'
})
export class ReceiverEmitComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.changeNumber.emit();
  }

}
