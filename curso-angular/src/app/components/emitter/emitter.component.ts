import { Component } from '@angular/core';
import { ReceiverEmitComponent } from "../receiver-emit/receiver-emit.component";

@Component({
    selector: 'app-emitter',
    standalone: true,
    templateUrl: './emitter.component.html',
    styleUrl: './emitter.component.css',
    imports: [ReceiverEmitComponent]
})
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 100)
  }

}
