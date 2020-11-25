import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>{this.props.title} - Strive For Food</Navbar.Brand>
          </Link>
          {this.props.location.pathname === "/details/2" ? (
            <Link to="/details/2">
              <div className="nav-link active text-white">My favorite 🍝!1</div>
            </Link>
          ) : (
            ""
          )}

          {this.props.favDish && (
            <Link className="nav-link active" to="/details/2">
              My favorite 🍝!2
            </Link>
          )}
          {/* <Nav>
            <Link to="/">Home</Link>
          </Nav> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/menu">
                <div
                  className={
                    this.props.location.pathname === "/menu"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Menu
                </div>
              </Link>
              <Link to="/reservation">
                <div
                  className={
                    this.props.location.pathname === "/reservation"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Reservation
                </div>
              </Link>
              <Nav.Link>Our Location</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default withRouter(NavBar); // will give the component exported EXTRA PROPS: history, location, match
