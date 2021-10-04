import React from 'react';
import emailjs from 'emailjs-com'
import {Form, Button} from 'react-bootstrap'
import { PreFooter } from './PreFooter';
import Footer from './Footer';



const Contact = () => {
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_gixw0tc','template_epty3zs',e.target,
    "user_0PA2vIMolU9oOBoxWsPfU"
    ).then(res=>{
        console.log(res)
        alert('Email send with success')
    }).catch(err=> console.log(err));
}


    return (
        <div>
            
        
        <body>
        <div className="comp-body" style={{paddingBottom:"30px"}}>
         <div className="abt-h" style={{paddingTop:"40px", paddingBottom:"40px"}}> 
           <h2 style={{paddingLeft:"10px"}}>Get In Touch </h2>
         </div>
         <div className="comp-container">
          <p className="p-contact"> 
            Please fill out the form below to send us an email and we will
            get back to you as soon as possible. <i class="far fa-envelope"></i>
          </p>
        <Form style={{width:'20rem', marginLeft:"auto", marginRight:"auto", paddingBottom:"20px"}}
        onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style={{color:"black"}}>Name</Form.Label>
    <Form.Control type="name" name="name" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
    <Form.Label style={{color:"black"}}>Email Address</Form.Label>
    <Form.Control type="email" name="user_email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
    <Form.Label style={{color:"black"}}>Your Message</Form.Label>
    <Form.Control as="textarea" name="message" rows={3} />
  </Form.Group>
  <Button variant="outline-secondary" type="submit" value="send">
    Submit
  </Button>
</Form>
</div>

</div>
</body>

<PreFooter/>
<Footer/>

        </div>
    );
}

export default Contact;
