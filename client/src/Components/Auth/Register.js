import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {Button, Modal, Form} from 'react-bootstrap'
import { registerUser } from '../../JS/actions/AuthActions'; 


const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const [show, setShow] = useState(false);
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRegister = ()=>{
        const newUser = {name, lastName, email, password}
        dispatch(registerUser(newUser))
        history.push("/dashboard")
        setName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }
  
    return (
      <>
        <Button variant="secondary" style={{marginRight:"10px"}} onClick={handleShow}>
          Register
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{background:"#f2f2f2"}}>
            <Modal.Title style={{color:"black"}}>WELCOME !</Modal.Title> 
            <i class="far fa-registered" style={{paddingLeft:"10px", color:"black"}}></i>
          </Modal.Header>
          <Modal.Body>
          <Form>
    <Form.Group className="mb-3">
      <Form.Label style={{color:"black"}}>Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label style={{color:"black"}}>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{color:"black"}}>Email Address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{color:"black"}}>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </Form.Group>
  </Form>
          </Modal.Body>
          <Modal.Footer style={{background:"#f2f2f2"}}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={()=>{handleClose();
            handleRegister()}}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Register
