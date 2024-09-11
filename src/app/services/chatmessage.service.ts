import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ChatMessage } from '../models/chatmessage';
const initialMesssage : ChatMessage[] = [
  {  user: 'Rohit' , message: 'Hello', timestamp: new Date },
  {  user: 'Ganguli', message: 'Hi, Rohit', timestamp: new Date}
]
@Injectable({
  providedIn: 'root'
})
export class ChatmessageService {
  // private messageSubject = new BehaviorSubject<ChatMessage[]>(initialMesssage);
  // currentMessage$ = this.messageSubject.asObservable();

  private messageSubject =  new Subject<ChatMessage[]>();
  currentMessage$ = this.messageSubject.asObservable();
  private messages: ChatMessage[] = [];
  
  constructor() { }
  // sendMessage(user: string, message: string){
  //   const newMessage = { user, message, timestamp: new Date()};
  //   this.messageSubject.next([...this.messageSubject.getValue(), newMessage]);
  // }
  
  sendMessage(user: string, message: string){
    const newMessage = { user, message, timestamp: new Date()};
    this.messages = [...this.messages, newMessage];
    this.messageSubject.next( this.messages);
  }
}
