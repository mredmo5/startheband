import React from 'react';
import {Button, Form } from 'react-bootstrap';
import styles from './Form.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const songRequest = {
    songTitle: "Rock Bottom",
    songArtist: "Neck Deep"
  }
const client_id= 'fe1fc3240776409e9d8f1d9509ca42fc';
const client_secret = 'caed3761829c4740a44d81a9837527cd';


const songRequestHandler = (ev) => {
let url = 'https://api.spotify.com/v1/search?q=tania%20bowra&type=artist';
let h = new Headers();
h.append('Authentication', `Bearer ${client_secret}`)
let req = new Request(url, {
  method: 'GET',
  headers: h
});

fetch(req)
  .then(resp => resp.json())
  .then(data => {
    alert(data[0])
  })
  .catch(err => {
    console.error(err.message);
  })



}



const form = () => (
    <Aux>

    <Form className='container pb-3 pt-3 border rounded mt-3 mb-3 text-center'>
    <div className={styles.Request}>
        Request a Song!
    </div>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Artist</Form.Label>
    <Form.Control className="w-75 m-auto" type="input" placeholder="Chris Cornell" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Song Title</Form.Label>
    <Form.Control className="w-75 m-auto" type="input" placeholder="Josephine" />
  </Form.Group>
  <Form.Text className="text-muted">
      We'll play your song as soon as possible
    </Form.Text>
  <Button variant="primary" type="submit" onClick={songRequestHandler}>
    Submit
  </Button>
</Form>
</Aux>
)


export default form;

