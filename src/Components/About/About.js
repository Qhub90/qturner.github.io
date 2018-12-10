import React from 'react';
import './About.css';


const About = () => {

    return (
        <main>
        <div className="container">
          <div className="row">
              <div className="col s12 l12">
                  <div className="card">                      
                    <div className="card-content">
                      <h4 id="aboutText" className="center">I am a full-stack developer living in Chicago. I also am a Realtor at <a href="https://kalerealty.com/" target="_blank" rel="noopener noreferrer">Kale Realty</a>.
                        I really enjoy learning new technologies and trying to solve problems. Something I work on everyday is self improvement,
                         whether its dealing with programming or just life in general. In my spare time I enjoy hanging out with friends, playing video games, and being active outdoors with my dog.</h4>
                    </div>
                    <div className="card-action">
                      <h5 className="center">Want to collab on something? Shoot me an <a href="mailto:qturner1090@gmail.com" className="light-blue-text">email</a></h5>
                    </div>
                  </div>
              </div>
          </div>          
        </div>
        </main>
    )
}

export default About