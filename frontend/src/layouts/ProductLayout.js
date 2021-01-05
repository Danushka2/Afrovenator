import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button,  } from 'react-bootstrap';
import axios from 'axios';


export class ProductLayout extends Component {
  state = {
    product: []
  }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(res => {
        const rProduct = res.data;
        this.setState({product: rProduct});
      })
  }
  
  render() {

    return (
      <>
      <Link className='btn btn-light my-3' to='/'>
      <i class="fas fa-backward"></i> Go Back
      </Link>
        <Row>
          <Col md={6}>
            <Image src="/images/sample.jpg" style={imgStyle} alt="placeholder image" fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{this.state.product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {this.state.product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Qty:</Col>
                    <Col>
                      <strong>{this.state.product.quantity}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {this.state.product.quantity > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={this.state.product.quantity === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}


const imgStyle = {
  border: '1px solid #E5E5E5'
}

export default ProductLayout;
