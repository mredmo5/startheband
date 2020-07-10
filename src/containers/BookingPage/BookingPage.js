import React, {Component} from 'react';
import Form from '../../components/Form/BookingForm';
import Aux from '../../hoc/Auxiliary/Auxiliary';


class BookingPage extends Component {
    render() {
        return(
            <Aux>
                <Form/>
            </Aux>
        
        );
    }
 
}

export default BookingPage;