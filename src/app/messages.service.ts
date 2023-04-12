import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: Array<string> = [];

  add(message: string) {
    this.messages.push(message);
  }
}
