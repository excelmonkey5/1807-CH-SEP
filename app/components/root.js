import React, { Component } from 'react'
import Campuses from './campuses'
import Students from './students'
import SingleCampus from './singleCampus'
import SingleStudent from './singleStudent'
import { Route, Switch, Redirect, withRouter, NavLink } from 'react-router-dom';


const Root = () => {
  return (
    <div>
      <nav>
        *Welcome! *
        <NavLink to={`/campuses`}>Campuses</NavLink>
        * *
        <NavLink to={`/students`}>Students</NavLink>
        *
      </nav>

      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <Route exact path="/students" component={Students} />
        <Route exact path="/campuses" component={Campuses} />

        <Route path="/campuses/:id" component={SingleCampus} />
        <Route path="/students/:id" component={SingleStudent} />

      </main>
    </div>
  )
}

export default Root
