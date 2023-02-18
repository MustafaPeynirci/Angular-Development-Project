import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messages:string[]=[]

  constructor() { }

  add(message:string){
    this.messages.push(message)
  }
  clear(){
    this.messages = []
  }

}
