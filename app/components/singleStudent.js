import React from 'react'
import {connect} from 'react-redux'
import { NavLink, withRouter} from 'react-router-dom'
import { fetchCampuses } from '../reducers/index'
import store from '../store'
import axios from 'axios';


export class SingleStudent extends React.Component {
  constructor() {
    super()
    this.state = {
      student: {},
      campus: {name: "no campus exists"}
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
        <h2> GPA: {student.gpa} at <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink></h2>
        </div>
    )
  }
}

export default SingleStudent
