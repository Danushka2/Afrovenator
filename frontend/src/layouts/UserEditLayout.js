import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';

export class UserEditLayout extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
    };
  }


  componentDidMount() {

    const user = localStorage.getItem('user');
    axios.get(`/api/users/${user}`).then((res) => {
      const rUser = res.data;
      this.setState({
        first_name: rUser.first_name,
        last_name: rUser.last_name,
        email: rUser.email,
        phone: rUser.phone,
        address: rUser.address,
      });
    });
  }


  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem('user');
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
    } = this.state;
    axios
      .put(`/api/users/${user}`, {
        first_name: first_name,
        last_name: last_name,
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
      phone,
      address,
    } = this.state;

    return (
      <>
        <Link className='btn btn-light my-3' to='/'>
          <i className='fas fa-backward'></i> Go Back
        </Link>
        <FormContainer>
          <h1>Edit Profile</h1>

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
                readOnly
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
              Update
            </Button>
          </Form>
        </FormContainer>
      </>
    );
  }
}

export default UserEditLayout;
