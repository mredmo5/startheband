import React from 'react';
import {Button, Form } from 'react-bootstrap';
import styles from './BookingForm.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const clickedHandler = () => alert('Thank You! We will be in touch soon!');


const bookingForm = () => (
    <Aux>
    <div className="container">
            <Form className={styles.Formdiv}>
            <div className={styles.Request}>
               Book the Band!
            </div>
            <Form.Group controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control className="w-75 m-auto" type="text" placeholder="Chris" />
            </Form.Group>
            <Form.Group controlId="formBasicLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control className="w-75 m-auto" type="text" placeholder="Cornell" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control className="w-75 m-auto" type="email" placeholder="Chris@Gmail.com" />
            </Form.Group>
            <Form.Group controlId="formFilePhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className="w-75 m-auto" type="text" placeholder='555-123-4567'  />
            </Form.Group>
            <Form.Group controlId="formFileDate">
                <Form.Label>Pick a Desired Date</Form.Label>
                <Form.Control className="w-75 m-auto" type="date"  />
            </Form.Group>
            <Form.Text className="text">
                We look forward to working with you!
                </Form.Text>
            <Button variant="primary" type="submit" onClick={clickedHandler} >
                Submit
            </Button>
        </Form>
   
    </div>
    </Aux>
);


export default bookingForm;