import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink, withRouter} from 'react-router-dom'
import { fetchCampuses } from '../reducers/index'
import store from '../store'
import axios from 'axios';


export class SingleStudent extends Component {
  constructor() {
    super()
    this.state = {
      student: {},
      campus: {name: ''}
    }
  }

 async componentDidMount() {
    const studentId = this.props.match.params.id
    const res = await axios.get(`/api/students/${studentId}`)
    console.log(res.data)
    this.setState({student: res.data})

    const campusId = this.state.student.campusId
    const resCampus = await axios.get(`/api/campuses/${campusId}`)
    this.setState({campus: resCampus.data})
 }

  render() {

    const student = this.state.student
    const campus = this.state.campus
    console.log("student", student)
    console.log("campus", campus)

    return (
      <div>
        <h1> {student.firstName}  {student.lastName} </h1>
        {(student.campusId === null) ? <h3>Looks like GPA is {student.gpa} but we can't figure out at which campus</h3> :  <h2> GPA: {student.gpa} at <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink></h2>}

        <p> email: {student.email} </p>
        <img src={student.imageUrl} width="300px" height="300px"/>
        </div>
    )
  }
}

export default SingleStudent
