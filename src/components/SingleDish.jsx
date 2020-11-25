import React from "react";
import { Row, Col, Image, Badge, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleDish = (props) =>
  props ? (
    <>
      <Row>
        <Col md={8} className="ml-auto mr-auto">
          <Row>
            <Col md={4}>
              <Link to={"/details/" + props.dish.id}>
                <Image src={props.dish.image} className="my-2 w-100 h-auto" />
              </Link>
            </Col>
            <Col md={8} className="mt-auto mb-auto">
              <h4>
                🍝{props.dish.name}
                <Badge variant="warning" className="ml-2">
                  {props.dish.price}
                </Badge>
                <Badge variant="danger">{props.dish.label}</Badge>
              </h4>
              {props.dish.description}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  ) : (
    <Alert variant="danger">Fail to load 🍝</Alert>
  );

export default SingleDish;
