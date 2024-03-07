import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
 a:number;
 todos:Todo []=[];


constructor(){
  this.a=10;
  this.todos.push({
    content:'first todo',
    completed:false
  })
  this.todos.push({
    content:'second todo',
    completed:true
  })
}

toggleDone(id:any) :void{ //returns nothing and we can also return datatype
this.todos.map((v,i)=>{
  if(i==id) v.completed = !v.completed;
  return v;
})
}

  
}
