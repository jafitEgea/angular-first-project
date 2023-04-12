import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {

  constructor( public messagesService: MessagesService){
  }

  message: string ='';
  
  addMessage(){
    this.messagesService.add(this.message);
    this.message='';
  }

}
