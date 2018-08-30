import React from 'react'
import {connect} from 'react-redux'
import { NavLink, withRouter} from 'react-router-dom'
import { fetchCampuses } from '../reducers/index'
import store from '../store'


export class Campuses extends React.Component {


  componentDidMount() {
    this.props.fetchInitalCampuses()
  }

  render() {
    console.log('campuses rendered')

    // const { campuses } = this.props;
    const campuses = this.props.campuses;
    console.log('props ', this.props)

    return (
      <div>
        <h1> Campus List </h1>
        {campuses.map((campus) => {
          return (
            <ul key={campus.id}>
            <NavLink to={`/campuses/${campus.id}`}>
            <p><span>Campus: {campus.name}</span></p>
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
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitalCampuses: () => dispatch(fetchCampuses())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
