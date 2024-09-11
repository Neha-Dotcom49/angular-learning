import { Component, OnInit } from '@angular/core';
import { ChatmessageService } from '../services/chatmessage.service';
import { ChatMessage } from '../models/chatmessage';
@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';
  //inject the chat service 
  constructor(private _chatMessageService: ChatmessageService) { }
  ngOnInit(): void {
    this._chatMessageService.currentMessage$.subscribe(res => {
      console.log('Chat2',res);
      this.messages = res
    })
  }
  sendMessage() {
    this._chatMessageService.sendMessage('Ganguli', this.newMessage);
    this.newMessage = ''; // clear input field
  }
}