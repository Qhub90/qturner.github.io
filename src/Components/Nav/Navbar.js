import React, { Component } from 'react'



class Navbar extends Component {    
    //  myFunction = e => {
    //     /* Get the text field */
    //     var copyEmail = document.getElementById("myEmail");
      
    //     /* Select the text field */
    //     copyEmail.select();
      
    //     /* Copy the text inside the text field */
    //     document.execCommand("copy");
    // }
     render(){
      return (
         <header>
        <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Quentin Turner</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/projects">Projects</a></li>
                <li><a href="https://github.com/Qhub90" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/quentin-turner-605a67155/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a> </li>
                <li><a id="myEmail" href="mailto:qturner1090@gmail.com"><i className="far fa-envelope"></i></a></li>             
               </ul>
            </div>
        </nav>
    </header>
    )
}
}


export default Navbar