import {Switch, Route} from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./JS/actions/AuthActions";
import './App.css';
//pages
import AppNavbar from './Components/Route/AppNavbar';
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Pages/Dashboard";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import PetList from "./Components/Pages/PetList";
import Add from "./Components/Pages/Add"





function App() {

  const dispatch = useDispatch()
  const getUser = ()=>dispatch(getAuthUser())
  useEffect(()=>{
    getUser()
    // eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <AppNavbar />
      <Route path ={["/add", "/edit/:id"]} component={Add} />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/adoption" component={PetList} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
