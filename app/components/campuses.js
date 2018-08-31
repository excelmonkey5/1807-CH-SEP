import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchCampuses, deleteCampus } from '../reducers/index'


export class Campuses extends Component {

  componentDidMount() {
    this.props.fetchInitalCampuses()
  }

  componentDidUpdate() {
    this.props.fetchInitalCampuses()
  }

  render() {
    console.log('campuses rendered')

    const { campuses, deleteCampus } = this.props;
    // const campuses = this.props.campuses;
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
            <img src={campus.imageUrl} height="100px" width="100px" />
            <br />
            <button type="button" onClick={ () => deleteCampus( `${campus.id}` )}>X Remove</button>
            </ul>)
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
    fetchInitalCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (campusId) => dispatch(deleteCampus(campusId))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
