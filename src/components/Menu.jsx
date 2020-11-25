import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container, Alert } from "react-bootstrap";
// const dishes = [];
class Menu extends React.Component {
  render() {
    return (
      <Container>
        {dishes.length === 0 && (
          <Alert variant="info">Working in Progress to get all the 🍝</Alert>
        )}
        {dishes.length !== 0 &&
          dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
      </Container>
    );
  }
}
export default Menu;
