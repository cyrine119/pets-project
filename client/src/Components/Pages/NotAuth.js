import React from 'react'
import { Link } from 'react-router-dom'
import { Toast } from 'react-bootstrap'
import { PreFooter } from './PreFooter'
import Footer from './Footer'

const NotAuth = () => {
    return (
        <div>

            <div className="comp-body" style={{padding:"50px"}}>
 <Toast style={{textAlign:"center", margin:"auto"}}>
 <i class="fas fa-user-slash" style={{paddingLeft:"10px", paddingTop:"10px"}}></i>
    <Toast.Body style={{color:"black"}}>Sorry..  You don't have access ! 
    <Link to='/' style={{color:"black"}}> {""}
    <i class="fas fa-angle-double-left" style={{paddingRight:"5px"}}></i>
    </Link>
    </Toast.Body>
 </Toast>
           </div>

           <PreFooter/>
           <Footer/>

          
    </div>

        
    )
}

export default NotAuth
