// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import {combineReducers} from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'



// const initialState = {}

//action types
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_STUDENTS = 'GET_STUDENTS'

//action creators
export const getCampuses = campuses => ({
  type: GET_CAMPUSES,
  campuses
});

export const getStudents = students => ({
  type: GET_STUDENTS,
  students
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
// export const



const campusReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
    return action.campuses
    default:
    return state
  }
}

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
    return action.students
    default:
    return state
  }
}

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
})

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

export default rootReducer;
