import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Spinner } from 'react-bootstrap';
import { getPets } from '../../JS/actions/pet';
import PetCard from './PetCard';
import { Link } from 'react-router-dom';
import { PreFooter } from './PreFooter';
import Footer from './Footer';

const PetList = () => {
    const dispatch = useDispatch();
    const pets = useSelector((state)=>state.petReducer.pets)
    const loadPets = useSelector((state)=>state.petReducer.loadPets)
    const user = useSelector(state => state.authReducer.user)

    useEffect(()=>{
        dispatch(getPets())
        //eslint-disable-next-line
    },[])

    return (
        <div>

<div className="comp-body">
              <div className="adopt-h"> <h1>Responsible Adoptions</h1> </div>
            </div>
            <div id="r-adopt" >
                <p>Do you want to adopt an animal at EFOA? Has your decision been carefully considered? You can consult the list of our candidates for adoption. Find the animal profile (s) that suit you, depending on your lifestyle and the composition of your household.</p>
                <p>Then, the best way to get in touch with the refuge is to be a member on our platform, so that you will facilitate your responsible adoption process and the animal profile that would suit you.
                <br/> Good luck with your responsible adoption process! </p>
                <p style={{fontWeight:"bold"}}>GIVE THEM THE LIFE THEY DESERVE</p>
            </div>
            <div className="comp-body">
            <h3 style={{textAlign:"center", paddingTop:"15px", paddingBottom:"15px"}}> List
                  <span> of animals for adoption currently </span>
                </h3>
            </div>
            
            {user === null ? (<></>): user.role === 1 ? (
            <div style={{textAlign:"center", marginTop:"25px"}}> <Link to="/add"><Button style={{textAlign:"center"}} variant="dark">Add</Button></Link> </div> 
            ):(
                <div>
                </div>
            )}
<div div style={{display:"flex", flexWrap:"wrap", justifyContent:'center', marginTop:'10px'}}>
           {loadPets?(
               <h3> <Spinner animation="border" variant="secondary" /> Loading </h3>
           ):pets.length === 0 ?(<h2>there is no data</h2>):(
               pets
               .map((el)=> <PetCard key={el._id} pet={el}  /> )
           )}
 </div>  

 <div className="comp-body">
            <Link to='/' style={{color:"black"}}> {""}
                 <i class="fas fa-angle-double-left" style={{paddingLeft:"13px", padding:"20px", fontSize:"25px"}}></i>
            </Link>
</div>

 <PreFooter/>
 <Footer/>        
        </div>
    )
}

export default PetList
