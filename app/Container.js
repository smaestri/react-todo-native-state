import React from 'react';
import Saisie from './Saisie';
import DisplayTodos from './DisplayTodos';

class Container extends React.Component{

  constructor(props) {
    super(props);
      this.state = {todosList: []};
      this.addTodo = this.addTodo.bind(this);
  }

  addTodo(value){
    console.log('ADD TODO in ARRAY');
    let newlist = [...this.state.todosList, value];
    console.log(newlist);
    this.setState({todosList: newlist});

  }
//
  render(){
    return(

      <div>
<Saisie addtodo={this.addTodo} />
<DisplayTodos testsma="toto" todosList={this.state.todosList}  />
      </div>
    )
  }
}

export default Container
