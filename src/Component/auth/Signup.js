import { Button, Col, Container, Row } from 'react-bootstrap'
import React,{useState} from 'react'
import { Form } from 'react-bootstrap'
import { createuser } from '../backend/Auth';

function Signup() {
    const [info, setinfo] = useState({

        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const {first_name,last_name,email,password}=info;

    // const handleName=e=>{
    //     console.log(e.target.value)
    // }
    const handleFirstName=e=>{
        setinfo({...info,first_name:e.target.value})
    }
    const handleLastName=e=>{
        setinfo({...info,last_name:e.target.value})
        
    }
    const handleEmail=e=>{
        
        setinfo({...info,email:e.target.value})
    }
    const handlePassword=e=>{
        setinfo({...info,password:e.target.value})
    }

    //instead of writing 4 func above,we can do the followinf function

    const handleChange=(name)=>e=>{

        setinfo({...info,[name]:e.target.value})

    }

    const handleClick=()=>{
       createuser(info);
    }



    return (
        <div>
<Container>
<Row>
    <Col md={{ span: 6, offset: 3 }}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter first name" onChange={handleFirstName} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter last name" onChange={handleLastName} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"onChange={handleEmail} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="button" onClick={handleClick} >
    Submit
  </Button>
</Form>

    </Col>
  </Row>
  </Container>
            
        </div>
    )
}

export default Signup
