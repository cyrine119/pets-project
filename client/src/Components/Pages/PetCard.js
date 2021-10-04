import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import  "./Cards.css"
import { Link } from 'react-router-dom'
import { deletePet,getPet } from '../../JS/actions/pet'
import { toggleTrue } from '../../JS/actions/edit'
import { useSelector } from 'react-redux'


const Pet = ({pet}) => {
    const dispatch =useDispatch();
    const user = useSelector(state => state.authReducer.user)
    return (
        <div>

        {/* <Link to={`/details/${pet._id}`}>     */}
    <Card className="card-view">

    <Card.Img className="containerimg" variant="top" src={pet.url} />
     <Card.Body style={{textAlign:"left"}}>
     <Card.Title style={{color:"black", textAlign:"left"}}>Name: {pet.name}</Card.Title>
     <Card.Text style={{color:"#696969"}}>Specie: {pet.specie}</Card.Text>
     <Card.Text style={{color:"#696969"}}>Age: {pet.age}</Card.Text>
     <Card.Text style={{color:"#696969"}}>Sexe: {pet.sexe}</Card.Text>
     <Card.Text style={{color:"#696969"}}>Location: {pet.location}</Card.Text>
     <Card.Text className="card-bottom" style={{color:"#696969", fontSize:"13px"}}>Description: {pet.description}</Card.Text>
     <Link to="/contact"> 
     <Button  style={{marginBottom:"9px"}} variant="outline-secondary">
          <i class="fas fa-chevron-right"></i>  Message
        </Button> 
    </Link>
      {user === null ? (<></>): user.role === 1 ? (
        <div style={{paddingBottom:"5px"}}>
        <Link to={`/edit/${pet._id}`} >
          <Button variant="outline-secondary"
          onClick={()=>{dispatch(getPet(pet._id));
                        dispatch(toggleTrue())}}>
            Edit
          </Button></Link>
          <Button variant="outline-dark" style={{marginLeft:"10px"}}
          onClick={()=>dispatch(deletePet(pet._id))}>
            Delete
          </Button>
        </div>
      ):(
        <div>
        </div>
      )}
        </Card.Body>
    </Card>
    {/* </Link> */}

        </div>
    )
}

export default Pet
