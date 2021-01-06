import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default class Header extends Component {
  state = {
    products: [],
    user: '',
    isLogged: false,
    loginLink: '/login',
    loginText: 'LogIn',
  };

  //getting the user mail and update the state if it exists
  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) {
      this.setState({
        user: user,
        isLogged: true,
        loginLink: '/logout',
        loginText: 'Logout',
      });
      console.log(user);
    }
  }

  //removed the user from the local storage
  logoutHandler = () => {
    if(this.state.isLogged){
      localStorage.clear();
    }
    let tempBool = !this.state.isLogged;
    this.setState({isLogged: tempBool});
  }

  render() {
    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>afrovenator</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                {this.state.isLogged ? (
                  <>
                    <LinkContainer to='/new/product'>
                      <Nav.Link>
                        <i className='fas fa-shopping-cart'></i> Add Product
                      </Nav.Link>
                    </LinkContainer>

                    <NavDropdown title={this.state.user} id='username'>
                      <LinkContainer to='/edit/user'>
                        <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={this.logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <LinkContainer to='/signup'>
                      <Nav.Link>
                        <i className='fas fa-user'></i> Sign Up
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                      <Nav.Link>
                        <i className='fas fa-sign-in-alt'></i> Login
                      </Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
