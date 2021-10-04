import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../JS/actions/AuthActions'; 
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppNavbar() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const {isAuth,user} = useSelector(state => state.authReducer)

  const logout = ()=>{
    dispatch(logoutUser())
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#333333"}}>
        <Toolbar>
          <Link to="/"> 
           <img className="logo" src="./images/logo2.png" alt="logo"/>
           <p style={{fontSize:"10px", marginLeft:"-12px", color:"#00818e"}}>ENERIS <span style={{color:"#696969", fontFamily:"exo"}}> Friends Of Animals</span></p>
           </Link>
          
          <Link to="/about" className="about"> About </Link>
          <Link to="/adoption" className="adoption"> Adoption </Link>
          <Link to="/contact" className="adoption"> Contact </Link>
          <Typography className={classes.title}>
          {isAuth ? (
          <Link to="/dashboard" className="dashboard"> Dashboard </Link>
          ):(
            <div>
            </div>
          )}
          </Typography>
          

          {isAuth ? (
            <div>
              <span>Welcome: {user.name} </span>
              <Button variant="contained" color="dark" onClick={logout} >Logout</Button>
            </div>
          ):(
          <div>
          <i class="far fa-user" style={{paddingRight:"10px"}}></i> 
          <Register /> 
          
          <Login />
          </div>)}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}