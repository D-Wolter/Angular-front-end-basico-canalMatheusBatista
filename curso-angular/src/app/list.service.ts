import { Injectable } from '@angular/core';
import { Animal } from './interfaces/Animals';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal ) {
    return animals.filter((item) => animal.name !== item.name);
  }
}
