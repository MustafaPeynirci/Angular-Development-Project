import { Component } from '@angular/core';
import { IModel, TodoItem } from "./model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new IModel()

  getName(){
    return this.model.user
  }
  getItems(){
    return this.model.items.filter(fltr => !fltr.action)
  }
  addItem(value){
    if(value!=""){
      this.model.items.push(new TodoItem(value, false))
    }
  }
}
