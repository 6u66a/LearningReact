import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/App.css';
import Footer from '../component/Footer.js';
import Header from '../component/Header.js';
import TodoItem from '../component/TodoItem.js';
import TodoStore from '../stores/TodoStore.js';
import * as TodoActions from '../action/TodoActions.js';

class App extends Component {
  constructor()
  {
    super();
    
    this.state = {
      title:"TestTitle",
      todos: TodoStore.getAll()
    };
  }
  
  changeTitle(title){
    this.setState({title:title});
  }
  
  componentWillMount(){
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    });
    console.log("listening",TodoStore.listenerCount("change"));
  }
  
  componentWillUnmount(){
    
  }
  
  createTodo(){
    TodoActions.createTodo(document.getElementById('todoInput').value);
  }
  
  reloadTodos(){
    TodoActions.reloadTodos();
  }
  
  render() {
    const { todos } = this.state;
    
    const TodoItems = todos.map((todo) => {
      return <TodoItem key={todo.id} {...todo}/>
    });
    
    return (
      <div>
        <Header someTitle={this.state.title} changeTitle={this.changeTitle.bind(this)} />
        <input type="text" id="todoInput"/>
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <button onClick={this.reloadTodos.bind(this)}>Relead!</button>
        <ul>{TodoItems}</ul>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
