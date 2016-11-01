import React from 'react';

class Saisie extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.cpt = 0;
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

 // Store the todo in state
  handleChange(event) {
    console.log('set state')
    console.log(event.target.value)
    this.setState({value: event.target.value});
  }

  //call upepr parent to store todo object
  handleSubmit() {
    this.props.onAddtodo({id : this.cpt, value: this.state.value});
    this.cpt++;
  }

}

export default Saisie
