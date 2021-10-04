import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { PreFooter } from './PreFooter'

const About = (props) => {
    return (
        <div >
            <div className="comp-body">
                 <div className="abt-h"> <h1>Our missions - Our values</h1> </div>
                 <div className="comp-container">
                      <div style={{padding:"20px"}}>
                          <img src="./images/abt-img1.jpg" className="abt-img" alt="" />
                          <div className="abt-content">
                          <p>ENERIS Friends Of Animals (EFOA) is an animal protection and defense association based in Nabeul.</p>
                          <h5 style={{fontWeight:"bold"}}>Its missions consist of :</h5>
                          <p>    * Fight against abuse and abandonment </p>
                          <p>    * Collect and house abandoned, lost or mistreated animals and find them a home </p> 
                          <p>    * Raise awareness among the general public and in particular young people about animal protection </p>
                          <p>    * Empower pet owners </p>
                       </div>

                       <img src="./images/abt-img2.jpg" className="abt-img" alt="" style={{height:"500px"}} />
                       <div className="abt-content">
                       <h5 style={{fontWeight:"bold"}}>Its values are :</h5>
                       <p style={{color:"#696969", fontWeight:"bold"}}>COLLECT</p>
                       <p>EFOA takes in animals in distress, abandoned, lost or mistreated in its shelter.</p>
                       <p style={{color:"#696969", fontWeight:"bold"}}>RESPONSIBLE</p>
                       <p>Adopting an animal is a responsible act. It is a real moral and financial commitment.</p>
                       <p style={{color:"#696969", fontWeight:"bold"}}>ADOPT</p>
                       <p>The EFOA offers rescued animals a new chance by making every effort to find a family for them.</p>
                       <p style={{color:"#696969", fontWeight:"bold"}}>RAISE AWARENESS</p>
                       <p>The EFOA fights against abandonment and denounces the ill-treatment inflicted on animals.</p>
                       <p></p>

                    </div>
                </div>

            </div>  
            <Link to='/' style={{color:"black"}}> {""}
                 <i class="fas fa-angle-double-left" style={{paddingLeft:"13px", padding:"20px", fontSize:"25px"}}></i>
            </Link>
            </div>

    
    <PreFooter/>
      
    <Footer/>



        </div>
        
    )
}

export default About
