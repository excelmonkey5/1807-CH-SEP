import React, {Component} from 'react'
import {connect} from 'react-redux';
import {postStudent} from '../reducers/index'

export class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      GPA: 0,
      imageUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event) {
  let stateChange = {};
  stateChange[event.target.name] = event.target.value;
  this.setState(stateChange)
}

render() {
  console.log('addstudent rendered')
  const handleSubmit = this.props.handleSubmit

return (
  <div>
    <h2>Add Student Form</h2>
  <form onSubmit={(event) => handleSubmit(this.state, event)}>
  <h3> Student First Name </h3>
  <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />

  <h3> Student Last Name </h3>
  <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />

  <h3> Image URL </h3>
  <input type="text" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl} />

  <h3> GPA </h3>
  <input type="number" name="address" onChange={this.handleChange} value={this.state.gpa} />

  <h3> email </h3>
  <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
  <br />
  <br />
  <button type="submit">Add Student</button>
  </form>
  </div>
)}

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (stateChange, event) => {
      event.preventDefault();
      dispatch(postStudent(stateChange, ownProps.history))
    }
    };
  }

export default connect(null, mapDispatchToProps)(AddStudent);
