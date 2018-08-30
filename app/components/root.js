import React, { Component } from 'react'
import Campuses from './campuses'
import Students from './students'
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
        <Route path="/students" component={Students} />
        <Route path="/campuses" component={Campuses} />
      </main>
    </div>
  )
}

export default Root
