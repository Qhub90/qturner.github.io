import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const Dashboard =() => {
    return(

    <main>
        <div className="conatiner">
          <div className="row">
            <div className="col l12 s12">
              <h1 className="center text"><strong><em>HELLO WORLD</em></strong></h1>
            </div>
            <div className="row">
              <div className="col l2 s3 offset-l4">
                <NavLink to='/about'><a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>About me</a></NavLink>
              </div>
              <div id="projectBtn" className="col l3 s3 offset-l1">
                <NavLink to='/projects'><a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Projects</a></NavLink>
              </div>
            </div>
          </div>
        </div>
    </main>    
          
    )
}

export default Dashboard