import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../JS/actions/AuthActions';
import {Button, Modal, Form} from 'react-bootstrap'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
    const [show, setShow] = useState(false);
    const [email,setEmail] =useState("")
    const [password,setPassword]=useState("")

    const handleLogin = ()=>{
      const userLogin = {email, password}
      dispatch(loginUser(userLogin))
      history.push("/dashboard")
      setEmail("")
      setPassword("")
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{background:"#f2f2f2"}}>
          <Modal.Title>LOGIN</Modal.Title>
          <i class="fas fa-sign-in-alt" style={{paddingLeft:"10px"}}></i>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"black"}}>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"black"}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer style={{background:"#f2f2f2"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={()=>{handleClose();handleLogin()}}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login
