// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import {combineReducers} from 'redux'
import axios from 'axios'

// const initialState = {}

//action types
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_STUDENTS = 'GET_STUDENTS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

//action creators
export const getCampuses = campuses => ({
  type: GET_CAMPUSES,
  campuses
});

export const getStudents = students => ({
  type: GET_STUDENTS,
  students
})

export const removeCampus = campusId => ({
  type: REMOVE_CAMPUS,
  campusId
})

export const removeStudent = studentId => ({
  type: REMOVE_STUDENT,
  studentId
})

//thunks

export const fetchCampuses = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/campuses');
    const campuses = response.data;
    const action = getCampuses(campuses)
    dispatch(action)
  }
}

export const fetchStudents = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/students');
    const students = response.data
    const action = getStudents(students)
    dispatch(action)
  }
}

export const postCampus = (stateChange) => {
  return async (dispatch) => {
    const response = await axios.post('/api/campuses', stateChange)
    const newCampus = response.data
    dispatch(getCampuses(newCampus))
    history.push('/campuses')
  }
}

export const postStudent = (stateChange) => {
  return async(dispatch) => {
    const response = await axios.post('/api/students', stateChange)
    const newStudent = response.data
    dispatch(getStudents(newStudent))
    history.push('/students')
  }
}

export const deleteCampus = (campusId) => {
  return async (dispatch) => {
    const response = await axios.delete('/api/campuses/' + campusId)
    const deletedCampus = response.data
    dispatch(removeCampus(deletedCampus))
  }
}

export const deleteStudent = (studentId) => {
  return async (dispatch) => {
    const response = await axios.delete('/api/students/' + studentId)
    const deletedStudent = response.data
    dispatch(removeStudent(deletedStudent))
  }
}

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
    return action.campuses
    case REMOVE_CAMPUS:
    return [...state].filter(campus => campus.id !== action.campusId)
    default:
    return state
  }
}

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
    return action.students
    case REMOVE_STUDENT:
    return [...state].filter(student => student.id !== action.studentId)
    default:
    return state
  }
}

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
})

export default rootReducer;
