import React from 'react';
import Saisie from './Saisie';
import DisplayTodos from './DisplayTodos';

class Container extends React.Component{

  constructor(props) {
    super(props);
      this.state = {todosList: []};
      this.addTodo = this.addTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log('Container  componentWillReceiveProps')
  }

  addTodo(todoObj){
    console.log('ADD TODO in ARRAY');
    let newlist = [...this.state.todosList, todoObj];
    console.log(newlist);
    this.setState({todosList: newlist});
  }

  deleteTodo(id){
    console.log('DELETE TODO in ARRAY');
    console.log(id)
    console.log(this.state.todosList)
    let newlist = this.state.todosList.filter(function( obj ) {
        return obj.id !== id;
    });

    console.log('newList after delete')
    console.log(newlist)
    this.setState({todosList: newlist});
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
