import { Component, OnInit } from '@angular/core';
import { ChatmessageService } from '../services/chatmessage.service';
import { ChatMessage } from '../models/chatmessage';
@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.css']
})
export class Chat1Component implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';
  //inject the chat service 
  constructor(private _chatMessageService: ChatmessageService) { }
  ngOnInit(): void {
    this._chatMessageService.currentMessage$.subscribe(res => {
      console.log('Chat1',res);
      this.messages = res;
    })
  }
  sendMessage() {
    this._chatMessageService.sendMessage('Rohit', this.newMessage);
    this.newMessage = ''; // clear input field
  }
}
