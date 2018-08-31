import React, {Component} from 'react'
import {connect} from 'react-redux';
import {postCampus} from '../reducers/index'

export class AddCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event) {
  let stateChange = {};
  stateChange[event.target.name] = event.target.value;
  this.setState(stateChange)
}

render() {
  console.log('addcampus rendered')
  const handleSubmit = this.props.handleSubmit

return (
  <div>
    <h2>Add Campus Form</h2>
  <form onSubmit={(event) => handleSubmit(this.state, event)}>
  <h3> Campus Name </h3>
  <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />

  <h3> Image URL </h3>
  <input type="text" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl} />

  <h3> Address </h3>
  <input type="text" name="address" onChange={this.handleChange} value={this.state.address} />

  <h3> Description </h3>
  <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
  <br />
  <br />
  <button type="submit">Add Campus</button>
  </form>
  </div>
)}

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (stateChange, event) => {
      event.preventDefault();
      dispatch(postCampus(stateChange, ownProps.history))
    }
    };
  }

export default connect(null, mapDispatchToProps)(AddCampus);
