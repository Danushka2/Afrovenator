import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export class Products extends Component {
  render() {
    return (
      <Card className='my-3 p-3 rounded'>
        <Link>
          <Card.Img src='/images/sample.jpg' variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/product/${this.props.product._id}`}>
            <Card.Title as='div'>
              <strong>{this.props.product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'>User id: {this.props.product.user_id}</Card.Text>
          <Card.Text as='div'>Qty: {this.props.product.quantity}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Products;
