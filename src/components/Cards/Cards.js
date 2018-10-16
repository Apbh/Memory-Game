import React from "react";
import "./Cards.css";
import {Col } from 'react-grid-system';

const Cards = props => (
    <Col sm={3}>
    <div className="card" value={props.id} onClick={() => props.handleClickEvent(props.id)} >
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
    </Col>
);

export default Cards;