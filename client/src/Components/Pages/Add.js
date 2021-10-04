import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { Button } from 'react-bootstrap'
import { editPet,postPet } from '../../JS/actions/pet'
import { Link } from 'react-router-dom'

const Add = () => {
    const [pet,setPet]=useState({name:"",sexe:"",age:"",location:"",specie:"",description:"",url:""})
    const petReducer = useSelector((state)=>state.petReducer.user)
    const edit =useSelector((state)=>state.editReducer.edit)
    const dispatch = useDispatch()

    useEffect(()=>{
        edit? setPet(petReducer) : setPet({name:"",sexe:"",age:"",location:"",specie:"",description:"",url:""})
    },[petReducer,edit])

    const handlePet = ()=>{
      if(!edit){
          dispatch(postPet(pet))
      }else {
          dispatch(editPet(petReducer._id,pet))
      }
    }

    const handleChange = (e)=>{
        e.preventDefault();
        setPet({...pet,[e.target.name]:e.target.value})
    }

    return (
        <div>
          <div className="comp-body" style={{paddingBottom:"50px", paddingTop:"50px"}}>
            <div className="comp-container">
              <Form style={{width:'20rem', marginLeft:"auto", marginRight:"auto", paddingBottom:"20px", paddingTop:"20px"}}>
    <Form.Field>
      <label style={{color:"black", paddingRight:"44px"}}>Name</label>
      <input placeholder='Name' name="name" value={pet.name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label style={{color:"black", paddingRight:"25px"}}>Location</label>
      <input placeholder='Location' name="location" value={pet.location} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label style={{color:"black", paddingRight:"51px"}}>Sexe</label>
      <input placeholder='Sexe' name="sexe" value={pet.sexe} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label style={{color:"black", paddingRight:"55px"}}>Age</label>
      <input placeholder='Age' name="age" value={pet.age} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label style={{color:"black", paddingRight:"39px"}}>Specie</label>
      <input placeholder='Specie' name="specie" value={pet.specie} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label style={{color:"black", paddingRight:"61px"}}>Url</label>
      <input placeholder='Url' name="url" value={pet.url} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label style={{color:"black", paddingRight:"7px"}}>Description</label>
      <input placeholder='Description ' name="description" value={pet.description} onChange={handleChange} />
    </Form.Field>
    <Link to="/adoption">
    <Button className="btn-add" variant="secondary" type='submit' onClick={handlePet}>  {edit? "Edit" : "Add Pet"} </Button>
    </Link>
  </Form>
  </div>
  <Link to='/adoption' style={{color:"black"}}> {""}
     <i class="fas fa-angle-double-left" style={{paddingLeft:"13px", paddingTop:"37px", fontSize:"25px"}}></i>
   </Link>
  </div>
        </div>
    )
}

export default Add
