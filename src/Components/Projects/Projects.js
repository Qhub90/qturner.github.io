import React from 'react'
import './Projects.css'
import Film from '../../Images/filmReel.jpg'
import Mask from '../../Images/clown.png'
import Gavel from '../../Images/man-with-a-gavel.jpg'


const Projects = () => {
    return (
        <div id="projectCards" className="container">
            <div id="projects" className="row">
                <div className="card col s12 l3">
                <div className="card-image">
                        <img id="filmSize" src={Film} alt={"film reel"}/>                            
                    </div>
                    <div className="card-content">
                        <span className="card-title"><b>IMDBU</b></span>
                        <p>A website that allows you to connect with other local film students</p>
                    </div>
                    <div className="card-action">
                        <a href="https://imdbu.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check it out</a>
                    </div>
                </div>
                <div className=" card col s12 l3">
                <div className="card-image">
                        <img src={Mask} alt={"Clown face"} />                    
                    </div>
                    <div className="card-content">
                        <span className="card-title"><b>Funny Guy</b></span>
                        <p>A game where you compete with friends and see who is funnier</p>
                    </div>
                    <div className="card-action">
                        <a href="https://funny-guy.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check it out</a>
                    </div>
                </div>
                <div className="card col s12 l3">
                <div className="card-image">
                        <img src={Gavel} alt={"Man on a gavel"} />                    
                    </div>
                    <div className="card-content">
                        <span className="card-title"><b>Rate my Judge</b></span>
                        <p>An app to find and rate your local judges</p>
                    </div>
                    <div className="card-action">
                        <a href="https://recklesskidjo3.github.io/nwProjectFinal/#" target="_blank" rel="noopener noreferrer">Check it out</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects