import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';

export class RegistationLayout extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      password,
      phone,
      address,
    } = this.state;
    axios
      .post('/api/users/signup', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        phone: phone,
        address: address,
      })
      .then((result) => {
        this.props.history.push('/');
      });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      phone,
      address,
    } = this.state;

    return (
      <>
        <Link className='btn btn-light my-3' to='/'>
          <i className='fas fa-backward'></i> Go Back
        </Link>
        <FormContainer>
          <h1>Registation</h1>

          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId='first_name'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter First Name'
                name='first_name'
                value={first_name}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='last_name'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Last Name'
                name='last_name'
                value={last_name}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                name='email'
                value={email}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                name='password'
                value={password}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='phone'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Phone Number'
                name='phone'
                value={phone}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Address'
                name='address'
                value={address}
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'>
              Submit
            </Button>
          </Form>
        </FormContainer>
      </>
    );
  }
}

export default RegistationLayout;
