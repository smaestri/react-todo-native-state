import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

var TodoActions = {

  create: function(todoObj) {
    console.log('todoaction create')
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      todo: todoObj
  });
},

destroy: function(id) {
  console.log('todoaction delete')
  AppDispatcher.dispatch({
    actionType: TodoConstants.TODO_DESTROY,
    id: id
  });
}
}
export default TodoActions
