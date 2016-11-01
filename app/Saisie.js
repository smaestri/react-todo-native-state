
class Saisie extends React.Component{

  constructor(props) {
    super(props);
    this.state = {todoValue: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }

  render(){
    return(
      <div>
      <input type="text" onChange={this.handleChange} />
      <button onClick={this.handleSubmit} >
      Submit
      </button>
      </div>
    )
  }

  handleChange(event) {
       this.setState({todoValue: event.target.value});
  }

  handleSubmit() {
    this.props.addtodo(this.state.todoValue)
  }

}

export default Saisie
