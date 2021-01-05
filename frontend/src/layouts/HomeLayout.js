import React, { Component } from 'react';
import Product from '../components/Products';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default class HomeLayout extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`/api/products`)
      .then(res => {
        const rProducts = res.data;
        this.setState({products: rProducts});
        console.log(rProducts);
      })
  }

  render() {
    return (
      <>
        <h1>Latest Products</h1>
          <Row>
          {this.state.products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
