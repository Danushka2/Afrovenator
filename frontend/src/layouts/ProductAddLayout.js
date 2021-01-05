import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';

export class ProductAddLayout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      quantity: '',
      user_id: '',
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, description, quantity, user_id } = this.state;
    axios
      .post('/api/products', {
        name: name,
        description: description,
        quantity: quantity,
        user_id: user_id,
      })
      .then((result) => {
        this.props.history.push('/');
      });
  };

  render() {
    const { name, description, quantity, user_id } = this.state;

    return (
      <>
        <Link className='btn btn-light my-3' to='/'>
          <i className='fas fa-backward'></i> Go Back
        </Link>
        <FormContainer>
          <h1>Add Product</h1>

          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                name='name'
                value={name}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                name='description'
                value={description}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='quantity'>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Quantity'
                name='quantity'
                value={quantity}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='user_id'>
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter User ID'
                name='user_id'
                value={user_id}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'>
              Create
            </Button>
          </Form>
        </FormContainer>
      </>
    );
  }
}

export default ProductAddLayout;
