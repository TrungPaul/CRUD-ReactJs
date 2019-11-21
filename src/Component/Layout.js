import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import List from "./List";
import Add from "./Add";
import Update from "./Update";

class Layout extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Row>
              <Col sm="12">
                <p>CRUD react</p>
                <Nav>
                  <NavItem>
                    <NavLink href="#">
                      <Link to="/">Home</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <Link to="/add">Add</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <Link to="/update/:id">Update</Link>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>

              <Route exact path="/" component={List} />
              <Route exact path="/add" component={Add} />
              <Route exact path="/update/:id" component={Update} />
            </Row>
          </div>
        </Router>
      </div>
    );
  }
}

export default Layout;
