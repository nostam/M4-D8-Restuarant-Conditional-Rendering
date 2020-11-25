import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservations from "./components/Reservations";
import DishDetails from "./components/DishDetails";
import Menu from "./components/Menu";

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = { rendering: true, favDish: false };
  }
  renderBegins = () => {
    console.log("renders successfully", this.state.rendering);
  };
  render() {
    return (
      <>
        {this.renderBegins()}
        <Router>
          <NavBar title="Strivestaurant" favDish={this.state.favDish} />
          <Route
            path="/"
            exact
            // render={(props) => (
            //   <Home title="Stefano" history={props.history} location={props.location} match={props.match} />
            // )}
            render={(
              props // props are history, location, match
            ) => (
              <Home
                title="Stefano"
                notFavDish={() => {
                  this.setState({ favDish: false });
                }}
                {...props}
              />
            )} // in this way you can pass your own props along with the router ones
          />
          <Route
            path="/menu"
            exact
            render={(props) => (
              <Menu
                favDish={() => {
                  this.setState({ favDish: true });
                }}
                notFavDish={() => {
                  this.setState({ favDish: false });
                }}
                {...props}
              />
            )}
          />
          <Route
            path="/reservation"
            exact
            render={(props) => <Reservations header="🍝 Waitlist" {...props} />}
          />
          <Route
            path="/details/:stefano"
            render={(props) => (
              <DishDetails
                favDish={() => {
                  this.setState({ favDish: true });
                }}
                notFavDish={() => {
                  this.setState({ favDish: false });
                }}
                {...props}
              />
            )}
          />
        </Router>
      </>
    );
  }
}

export default App;
