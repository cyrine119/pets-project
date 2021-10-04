import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './Footer'




const Dashboard = () => {
    const user = useSelector(state => state.authReducer.user)
    
    return (
        <div>
            <div className="comp-body">
            <div style={{padding:"20px"}}>
            {!user ? (
                <h1>Login First</h1>
            ) : (
               
              <div className="card">
  
           {user.role === 1 ? (
                
                <span style={{paddingTop:"15px"}}>  <i class="fas fa-user-cog"></i> Admin </span>
            ):(
                <span style={{paddingTop:"15px"}}> <i class="fas fa-user"></i>  User</span>
            )}

              <h3 style={{color:"black", paddingTop:"15px"}}>Welcome With Us..</h3>
              <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" classname="user-img" alt="" />
              <p>Name: {user.name} <i class="far fa-check-circle"></i> </p> 
              <p>Email: {user.email}</p>
              </div>
            )
            }
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
