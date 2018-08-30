import React from 'react'
import {connect} from 'react-redux'
import { NavLink, withRouter} from 'react-router-dom'
import { fetchCampuses } from '../reducers/index'
import store from '../store'
import axios from 'axios';


export class SingleCampus extends React.Component {
  constructor() {
    super()
    this.state = {
      campus: {},
      campusStudents: []
    }
  }

 async componentDidMount() {
    const campusId = this.props.match.params.id
    const res = await axios.get(`/api/campuses/${campusId}`)
    console.log(res.data)
    this.setState({campus: res.data})

    const resStudents = await axios.get(`/api/campuses/studentsenrolled/${campusId}`)
    console.log(resStudents)
    this.setState({campusStudents: resStudents.data})

    // i realize i should use await all

 }

  render() {
    const campus = this.state.campus
    const campusStudents = this.state.campusStudents
    console.log("cs", campusStudents)

    return (
      <div>
        <h1> {campus.name} </h1>
        <p> Address: {campus.address} </p>
        <p> Description: {campus.description} </p>
        <br />
        <p> List of Students (total enrolled: {campusStudents.length})</p>
        {campusStudents.map( student => {
          return (
            <div key={campus.id}>
            <NavLink to={`/students/${student.id}`}>
            <p>{student.firstName} {student.lastName}</p>
            </NavLink>
            </div>
          )
        })}
        </div>

    )
  }
}

export default SingleCampus
