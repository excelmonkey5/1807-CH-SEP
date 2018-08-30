import React from 'react'
import {connect} from 'react-redux'
import { NavLink, withRouter} from 'react-router-dom'
import { fetchStudents } from '../reducers/index'
import store from '../store'


export class Students extends React.Component {


  componentDidMount() {
    this.props.fetchInitalStudents()
  }

  render() {
    console.log('students rendered')
    const students = this.props.students;
    console.log('props ', this.props)

    return (
      <div>
        <h1> Student List </h1>
        {students.map((student) => {
          return (
            <ul key={student.id}>
            <NavLink to={`/students/${student.id}`}>
            <p><span>student: {student.firstName}  {student.lastName}</span></p>
            </NavLink>
            </ul>
            )
          })}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitalStudents: () => dispatch(fetchStudents())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
