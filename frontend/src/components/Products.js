import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export class Products extends Component {
  render() {
    return (
      <Card className='my-3 p-3 rounded'>
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
