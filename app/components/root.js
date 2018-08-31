import React, { Component } from 'react'
import Campuses from './campuses'
import Students from './students'
import SingleCampus from './singleCampus'
import SingleStudent from './singleStudent'
import AddCampus from './addCampus'
import AddStudent from './addStudent'
import { Route, Switch, Redirect, withRouter, NavLink } from 'react-router-dom';


const Root = () => {
  return (
    <div>
      <nav>
        *Welcome! *
        <NavLink to={`/campuses`}>Campuses</NavLink>
        * *
        <NavLink to={`/students`}>Students</NavLink>
        * *
        <NavLink to={`/addcampus`}>Add Campus</NavLink>
        * *
        <NavLink to={`/addstudent`}>Add Student</NavLink>
      </nav>

      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <Route exact path="/students" component={Students} />
        <Route exact path="/campuses" component={Campuses} />
        <Route path="/campuses/:id" component={SingleCampus} />
        <Route path="/students/:id" component={SingleStudent} />
        <Route path="/addcampus" component={AddCampus} />
        <Route path="/addstudent" component={AddStudent} />

        <h4> *Select Campuses to View All Campuses or Remove a Campus
          <br />
        *Select Students to View All Students
        <br />
        *To View Students at a Specific Campus, Click on the Campuses and then a Specific Campuses
        <br />
        *You can add a Campus or Student as well

        </h4>


      </main>
    </div>
  )
}

export default Root
