import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { EmitterComponent } from "./components/emitter/emitter.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      AppRoutingModule,
      FormsModule,
      CommonModule,
      RouterOutlet,
      FirstComponentComponent,
      ParentDataComponent,
      DirectivesComponent,
      IfRenderComponent,
      EventosComponent,
      EmitterComponent,
      ListRenderComponent,
      PipesComponent,
      TwoWayBindingComponent,
      HttpClientModule
    ]
})
export class AppComponent {
  userName = 'Dwolter';
  userData = {
    email: 'daniel@email.com',
    role: 'Admin',
  }
  title = 'curso-angular';
  
}
