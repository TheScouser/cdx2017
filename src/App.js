import React, { Component } from 'react';
import {Grid,Row,Col,Navbar,Nav,NavItem} from 'react-bootstrap';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">CDX 2017</a>
              </Navbar.Brand>
              <Nav>
                <NavItem eventKey={1} href="#">Login</NavItem>
                <NavItem eventKey={2} href="#">Register</NavItem>
              </Nav>
            </Navbar.Header>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
