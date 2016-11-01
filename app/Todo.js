import React from 'react';

class Todo extends React.Component{

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
     e.preventDefault();
     console.log(this.props.id)
     console.log('The link was clicked.');
     this.props.deleteTodo(this.props.id);
   }

  render() {
    return(
    <tr>
     <td>{this.props.id} - {this.props.data}</td><td><a href="#" onClick={this.handleDelete}>Supprimer</a></td>
    </tr>
  )
}
}

export default Todo
