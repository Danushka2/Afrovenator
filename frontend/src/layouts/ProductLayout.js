import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import axios from 'axios';

export class ProductLayout extends Component {
  state = {
    product: [],
    prodID: '',
    isLogged: false,
  };

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`).then((res) => {
      const rProduct = res.data;
      this.setState({ product: rProduct });
    });
    const user = localStorage.getItem('user');
    if (user) {
      this.setState({
        isLogged: true,
      });
      console.log(user);
    }
  }

  render() {
    const prodId = this.state.product._id;
    function deleteProduct() {
      try {
        axios.delete(`api/products/${prodId}`).then((res) => {
          console.log(res);
        });
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <>
        <Link className='btn btn-light my-3' to='/'>
          <i className='fas fa-backward'></i> Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image
              src='/images/sample.jpg'
              style={imgStyle}
              alt='placeholder image'
              fluid
            />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{this.state.product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {this.state.product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to={`/edit/product/${this.state.product._id}`}>
                  <i className='mt-4 mx-2 far fa-edit'></i>
                </Link>
                <Link to={'/'} onClick={deleteProduct}>
                  <i className='far fa-trash-alt' onClick={deleteProduct}></i>
                </Link>
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
                      {this.state.product.quantity > 0
                        ? 'In Stock'
                        : 'Out Of Stock'}
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
  border: '1px solid #E5E5E5',
};

export default ProductLayout;
