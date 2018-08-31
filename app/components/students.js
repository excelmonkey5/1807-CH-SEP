import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchStudents, deleteStudent } from '../reducers/index'

export class Students extends Component {

  componentDidMount() {
    this.props.fetchInitalStudents()
  }

  componentDidUpdate() {
    this.props.fetchInitalStudents()
  }

  render() {
    console.log('students rendered')
    const { students, deleteStudent } = this.props;
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
            <button type="button" onClick={ () => deleteStudent( `${student.id}` )}>X Remove</button>
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
    fetchInitalStudents: () => dispatch(fetchStudents()),
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
