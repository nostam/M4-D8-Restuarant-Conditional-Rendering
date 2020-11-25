import React from "react";
import { Badge, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import DishComments from "./DishComments";
import allTheDishes from "../data/menu.json";

class DishDetails extends React.Component {
  state = {
    dish: null,
  };

  componentDidMount() {
    let dishIdFromTheSearchBar = this.props.match.params.stefano;
    let correctDishToLoad = allTheDishes.find(
      (dish) => dish.id.toString() === dishIdFromTheSearchBar
    );
    if (this.props.match.params.stefano === "2") {
      this.props.favDish();
      // console.log(this.props);
    } else {
      this.props.notFavDish();
    }
    setTimeout(
      () =>
        this.setState({
          dish: correctDishToLoad,
        }),
      1000
    );
  }

  render() {
    return (
      <Container>
        {this.state.dish && (
          <div>
            <Row className="my-2">
              <Col md={3}>
                <img
                  src={"/" + this.state.dish.image}
                  alt="dish"
                  className="img-fluid"
                />
              </Col>
              <Col md={9}>
                <Card>
                  <Card.Body>
                    <Card.Title>{this.state.dish.name}</Card.Title>
                    <Card.Subtitle>
                      <Badge variant="danger">{this.state.dish.label}</Badge>
                    </Card.Subtitle>
                    <Card.Text>{this.state.dish.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <DishComments selectedDish={this.state.dish} />
          </div>
        )}
        {!this.state.dish && (
          <Row className="d-flex align-items-center">
            <h1>LOADING</h1>
            <Spinner
              animation="border"
              role="status"
              variant="white"
              style={{ width: "3rem", height: "3rem" }}
            >
              <h3>🍝</h3>
            </Spinner>
          </Row>
        )}
      </Container>
    );
  }
}

export default DishDetails;
