import dispatcher from '../dispatcher/Dispatcher.js';

export function createTodo(text){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  })
}

export function deleteTodo(id){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  })
}

export function reloadTodos(){
  dispatcher.dispatch({
    type: "FETCH_TODOS"
  });
  setTimeout(function () {
    dispatcher.dispatch({
      type: "RECIEVED_TODOS",
      data: [
        {
          id: 5,
          text: "hllo",
          completed: false
        },
        {
          id: 6,
          text: "hallo again",
          completed: false
        }
      ]
    })
  }, 1000);
}