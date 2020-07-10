import React from 'react';
import {Button, Form } from 'react-bootstrap';
import styles from './UploadForm.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from "axios";


// {'Content-Type': 'image/jpeg'};
const Key = 'AIzaSyBNaUMNgJ7z0d-TU4CcDlt8_KfC5UhqkGI';
// const headers = {
//     {'Authorization': `Basic ${Key}`}
// }

// const UploadAPI = (
//     axios.post('https://drive.google.com/drive/u/4/folders/1WWYc6OyYx-YrEoV-8g_pH6pDBnqTmuUm', 
//     {pic1})
//     .then((response) => {
//         console.log(response);
//     },  (error) => {
//         console.log(error)
//     })

// )

axios({
    method: 'post',
    url: `https://drive.google.com/drive/u/4/folders/1WWYc6OyYx-YrEoV-8g_pH6pDBnqTmuUm`,
    headers: {Authorization: `Bearer ${Key}`},
            withCredentials: true, // True otherwise I receive another error
            crossorigin: true,
    data: {}
}).then(response => {
    console.log(response);
  })


const uploadform = () => (
    <Aux>
    <div className="container">
            <Form className={styles.Formdiv}>
            <div className={styles.Request}>
               Upload Content to the Band!
            </div>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control className="w-75 m-auto" type="text" placeholder="Chris Cornell" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>email</Form.Label>
                <Form.Control className="w-75 m-auto" type="email" placeholder="Chris@Gmail.com" />
            </Form.Group>
            <Form.Group controlId="formFileUpload">
                <Form.Label>Attach a File</Form.Label>
                <Form.Control className="w-75 m-auto" type="file"  />
            </Form.Group>
            <Form.Text className="text-muted">
                Select and Upload any media you want to send to Google Drive!
                </Form.Text>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
   
    </div>
    </Aux>
)

export default uploadform;
