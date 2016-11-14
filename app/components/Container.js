import React from 'react';
import Saisie from './Saisie';
import DisplayTodos from './DisplayTodos';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class Container extends React.Component{

  constructor(props) {
      super(props);
      this.state = {todosList: []};
      this.state.todosList = TodoStore.getAll(),
      this.addTodo = this.addTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this._onChange = this._onChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log('Container  componentWillReceiveProps')
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    var tab = TodoStore.getAll();
    this.state = {};
    this.setState({todosList: tab});
  }

  addTodo(todoObj){
    console.log('ADD TODO in ARRAY');
    TodoActions.create(todoObj);
  }

  deleteTodo(id){
    TodoActions.destroy(id);
  }

  render(){
    return(
      <div>
        <Saisie onAddtodo={this.addTodo} />
        <DisplayTodos todosList={this.state.todosList} onDeleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default Container
