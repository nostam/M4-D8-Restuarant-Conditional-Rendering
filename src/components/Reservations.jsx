import React from "react";
import { Container, ListGroup, Spinner, Alert } from "react-bootstrap";
import ReservationForm from "./ReservationForm";

class Reservations extends React.Component {
  state = {
    reservations: [],
    loading: true,
    errMessage: "",
  };

  // componentWillUnmount fires an instant before unmounting

  //lifecycle method that is going to be triggered just once after initial loading
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool.herokuapp.com/api/reservation"
      );
      let reservations = await response.json();
      this.setState({ reservations: reservations, loading: false });
    } catch (e) {
      console.log("error happened, that's life", e);
      this.setState({ loading: false, errMessage: e.message });
    }
  };

  render() {
    console.log("IN THE RENDER METHOD");
    return (
      <Container>
        <div className="my-4">
          {this.state.errMessage ? (
            <Alert variant="danger">
              We encountered a problem with fetching reservation, please try
              again later
              {this.state.errMessage}
            </Alert>
          ) : (
            <>
              <h2>{this.props.header ? this.props.header : "RESERVATIONS"}</h2>
              {this.state.loading && (
                <div className="font-bold d-flex justify-content-center">
                  <span>Feching reservations</span>
                  <Spinner animation="border" variant="success" />
                </div>
              )}
              {this.state.reservations.map((reservation, index) => (
                <ListGroup key={index}>
                  <ListGroup.Item>
                    Name: {reservation.name}, for {reservation.numberOfPersons}
                    at {reservation.dateTime}
                  </ListGroup.Item>
                </ListGroup>
              ))}
              <ReservationForm />
            </>
          )}
        </div>
      </Container>
    );
  }
}

export default Reservations;
