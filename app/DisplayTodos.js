import React from 'react';
import Todo from './Todo';

class DisplayTodos extends React.Component{

  constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log('Display todos componentWillReceiveProps')
    console.log(nextProps)
    this.todos = nextProps.todosList;
  }

  handleDelete(id){
    this.props.onDeleteTodo(id)
  }

  render(){
      console.log('render display todos')
      console.log(this.todos);
    let todos;
    if(this.todos){
        todos = this.todos.map( todo => {
        return <Todo key={todo.id} id={todo.id} data={todo.value} deleteTodo={this.handleDelete} />
      })
    }

    return(
      <table>
       <tbody>{todos}</tbody>
      </table>
    )
  }
}



export default DisplayTodos
