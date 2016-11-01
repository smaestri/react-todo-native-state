

class DisplayTodos extends React.Component{

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps')
    console.log(nextProps)
    this.todos = nextProps.todosList;
  }


  render(){
      console.log('render display todos')
      console.log(this.todos);
    let todos;
    if(this.todos){
        todos = this.todos.map( todo => {
        return <Todo key={todo} data={todo} />
      })
    }

    return(
      <table>
       <tbody>{todos}</tbody>
      </table>
    )
  }
}

function Todo (props){
  return (
    <tr>
     <td>{props.data}</td>
    </tr>
  )
}

export default DisplayTodos
