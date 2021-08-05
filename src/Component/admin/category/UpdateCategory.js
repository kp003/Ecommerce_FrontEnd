
import React,{useState}  from 'react'
import { Col, Container, Form, Row,Button  } from 'react-bootstrap'
import { createcat } from '../../backend/CategoryCotroller'
import AdminDashboard from '../AdminDashboard'
import CustomAlert from '../../reuse/CustomAlert';
import CustomSpinner from '../../reuse/CustomSpinner';
import { isauthenticated } from '../../backend/Auth';
import { updateCategorybyID } from "../../backend/CategoryCotroller";
import { useParams } from 'react-router-dom';


function UpdateCategory() {

    const { catId} = useParams()

    const [info, setinfo] = useState({

        type:"",
        created_by:""
        
    })

    const [resp, setResp] = useState({
      error:"",
      message:"",
      loading:false,

    })

    const {type,created_by}=info;
    const{error,message,loading}=resp;
    const isLoggedIn = isauthenticated();

    const handleType=e=>{
        setinfo({...info,type:e.target.value,created_by:isLoggedIn.email})
    }
   
    const handleClick=()=>{
        setResp({...resp,loading:true,message:"",error:""})
        updateCategorybyID(isLoggedIn.message,catId,info).then(res=>{

            console.log(res)
  
          if(res.status===200){
            setResp({...resp,message:res.message,loading:false,error:""})
  
          }
          else{
            setResp({...resp,loading:false,error:res.error,message:""})
          }
  
         }).catch(err=>{console.log(err)});
         //console.log("logged in")
      }

    return (
       <AdminDashboard>
           <div>
           <Container>
<Row>
    <Col md={{ span: 6, offset: 3 }}>
        <h1>Update Category</h1>
    <div style={{textAlign:'center'}}>
      {loading&& <CustomSpinner/>}
      {message&&<CustomAlert variant="success" message={message}/>}
      {error&&<CustomAlert variant="danger" error={error}/>}
      {/* {didRedirect&& (userRedirect())} */}
      
      </div>
    <Form>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Category Name</Form.Label>
    <Form.Control type="text" placeholder="Enter the Category Type" onChange={handleType} value={type}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="button" onClick={handleClick}>
    Submit
  </Button>
</Form>

    </Col>
  </Row>
  </Container>
           </div>
       </AdminDashboard>
    )
}

export default UpdateCategory
