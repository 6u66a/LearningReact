import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher.js';

class TodoStore extends EventEmitter{
  constructor(){
    super();
    this.todos= [
        {
          id:1,
          text: "go shopping",
          complete: false
        },
        {
          id:2,
          text: "go washings",
          complete: false
        }
      ];
  }
  
  createTodo(text){
    this.todos.push(
      {
        id: Date.now(),
        text,
        complete: false
      }
    )
    this.emit("change");
  }
  
  getAll(){
    return this.todos;
  }
  
  recieveTodos(data){
    this.todos=data;
    this.emit("change");
  }
  
  handleActions(action){
    switch (action.type) {
      case "CREATE_TODO":
        this.createTodo(action.text);
        break;
      case "RECIEVED_TODOS":
        this.recieveTodos(action.data);
        break;
    }
    console.log("TodoStore got action", action);
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
//window.todoStore = todoStore;
window.dispatcher = dispatcher;
export default todoStore;