import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { isauthenticated } from '../backend/Auth';
import { getAllProducts } from '../backend/ProductController';

function Product() {
    const [products,setProducts]=useState([]);
    const user = isauthenticated();

    const preload=()=>{
        getAllProducts(user.message).then(res=>{
            setProducts(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        preload();
    },[])
    return (
        <Container fluid="md">
            <Row xs={1} md={2} className="g-4">
  {products.map((product) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={product.imageURL} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <div className="product_price">
              <h1>${product.price}</h1>
              <Button variant="outline-info">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


        </Container>
    )
}

export default Product
