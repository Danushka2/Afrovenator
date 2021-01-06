import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';

export class LoginLayout extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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
      email,
      password
    } = this.state;
    axios
      .post('/api/users/login', {
        email: email,
        password: password
      })
      .then((result) => {
        localStorage.setItem('user', result.data.email);
        console.log(localStorage.getItem('user'));
        this.props.history.push('/');
        window.location.reload(false);
      });
  };

  render() {
    const {
      email,
      password
    } = this.state;

    return (
      <>
        <Link className='btn btn-light my-3' to='/'>
          <i className='fas fa-backward'></i> Go Back
        </Link>
        <FormContainer>
          <h1>Log In</h1>

          <Form onSubmit={this.onSubmit}>
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

            <Button type='submit' variant='primary' className='mt-3'>
              Submit
            </Button>
          </Form>
        </FormContainer>
      </>
    );
  }
}

export default LoginLayout;
