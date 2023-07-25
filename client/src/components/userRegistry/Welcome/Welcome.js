import React from "react";
import Register from "../Register/Register";
import '../../userRegistry/Welcome/welcome.css';
import Login from '../Login/login.css';
import { Link } from "react-router-dom";
// import '../../userRegistry/Register/register.css';

function getCurrentYear(){
    return new Date().getFullYear();
}

function Welcome(){
    return(
        
    <>
        <header className="header">
            <h1 className="brand-logo"><u>Employah!</u></h1>
            <div>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="employers">Employers</a></li>
                    <li><a href="resources">Resources</a></li>
                    <li><a href="contact_us">Contact Us</a></li>
                    <li><a href="about">About</a></li>
                </ul>
            </div>
            {/* <div>
                <button className="registerbtn"><a href={Register}>Login</a></button>
            </div>
            <div>
                <button className="registerbtn"><a href={Register}>Register</a></button>
            </div> */}
             <button className="registerbtn">
            <Link to="/login">Login</Link>
            </button>

            <button className="registerbtn">
            <Link to="/register">Register</Link>
            </button>
        </header>

        <div className="wording">
        <div className="welcome-message"><b>This is the best employer to employee connect ever</b></div>
        <div className="welcome-message-2">Look no further in finding emlpoyment or finding employees, sit back and relax</div>
        <div className="welcome-message-3">We'll take that burden off you...</div>
        <div className="welcome-message-4">Smile, <span className="employah"><u><b>Employah!</b></u></span> has got you covered</div>
        

        </div>
        <hr className="rule"></hr>
            <div className="need">Need something to be done?</div>
           
        <div className="section-box sign-up-box">
        <div className="section-header">Sign Up</div>
        <div className="section-content">
            Open a free account with Employah!<br/> today and try out the best Ai<br/> recruitment technology
        </div>
        </div>

        <div className="section-box e-CV-box">
        <div className="section-header">Fill the e-CV</div>
        <div className="section-content">
            Go ahead and fill your e-CV <br/> on this platform based on <br/>the skills you have in handy
        </div>
        </div>

        <div className="section-box takeTEST-box">
        <div className="section-header">Take the test</div>
        <div className="section-content">
            Take the skillset test based on your <br/>e-CV and land yourself a job
        </div>
        </div>

        <div className="section-box getRANKED-box">
        <div className="section-header">Get Ranked</div>
        <div className="section-content">
            Ranking is our way of sorting interviewees based on performance in the test
        </div>
        </div>
        <hr className="rule"></hr>


            
            <div className="container-wrapper">


            

        <div className="container container">
            <p className="linked">Have you ever wished you were linked to your employer directly?</p>
            <p className="dream">Have you ever dreamt of being shortlisted in your dream job?</p>
            <p className="location">Has your geographical location been a barrier to you been employed?</p>
            <p>Our powerful Ai algorithm helps to link right employees to the right employer</p>
        </div>
        
        {/* <div className="container container3">

        </div> */}

       
       
       
       
        <div className="container container2">
        <p className="version">You're the best version of yourself don't let anything stop you from achieving the best</p>
        <p className="best">Are you ready to be the <b><i>best?</i></b></p>
        </div>
        </div>

        <p className="info1">
            Employah is a complete recruitment<br/> automation software. 
            It automates<br/> candidate sourcing, candidate<br/> screening, candidate engagement.</p>
        {/* <p className="info2">
            <i>
                Simple and intuitive user interface helps you focus on most important thing, hiring
            </i></p> */}
        
         
        <div className="uniqueness">Our uniqueness? </div>
         
         <div className="largePOOL-box"> 
           <div className="largePOOL-header">Large pool</div> 
           <div className="largePOOL">
           Browse through a large database of qualified 
           employees to employ from with ease
            </div> 
        </div>

        <div className="timeSAVING-box"> 
           <div className="timeSAVING-header">Time saving</div> 
           <div className="timeSAVING">
           Relax, as we handle all the tedious work of recruitment 
           efficiently within a matter of seconds

            </div> 
        </div>

        <div className="virtual-box"> 
           <div className="virtual-header">Video Call</div> 
           <div className="virtual">
           Conduct your interview process efficiently in an 
           all in one platform with our video call option with ease
            </div> 
        </div>

        <div className="skillset-box"> 
           <div className="skillset-header">Skillset</div> 
           <div className="skillset">
           Employah has by far the largest pool of quqlity skilled personnel globally
            </div> 
        </div>        


        <div className="on">
        <div className="onTheGo">On the go</div>

        <div className="updated">
        Be updated on who has the best job offerings with our time tracker
        </div>
        </div>

        <div className="container4">
        <p className="job"><i>Having a job means that you have an important role in the world</i></p>
        <p className="test">Join Employah, Take the test, Get emloyed!!! </p>
    
        
        </div>    

        
        <hr className="clarify-line1"></hr>
        <div className="clarify">Need clarifications?</div>
            <p className="chatbot">
                Check out Stacy, our chatbot for more details to asnswers to your questions
            </p>
        <hr className="clarify-line2"></hr>

        
        <p className="con" >
            Join millions of skilled personnel on the platform and have<br/> the opportunity
        of being employed right on this platform</p> 
       
       
        <div className="end-logo">
            <u><b>Employah!</b></u>
        </div>
            <p className="end-response">
            Join Employah, Take the test, Get emloyed!!!
            </p>

            
        <button to="/register" className='signUpFree-btn'>Sign Up Free</button>
            {/* <Link to="/register" className="signUpFree-btn">Sign Up Free</Link> */}
        {/* <button className="signUpFree-btn">
            <Link to="/register">Sign Up Free</Link>
            </button> */}

        <footer className="he">
        {/* <div className="header">
                <ul><hr></hr>
                    <li><a href="home">Home</a></li><hr></hr>
                    <li><a href="employers">Employers</a></li><hr></hr>
                    <li><a href="resources">Resources</a></li><hr></hr>
                    <li><a href="contact_us">Contact Us</a></li><hr></hr>
                    <li><a href="about">About</a></li><hr></hr>
                </ul>
            </div>             */}
             <p className="footer-text">© {getCurrentYear()} Employah. All rights reserved. </p>
        </footer>

    </>
        
       
    )
    
}
export default Welcome;