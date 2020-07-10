import React, {Component} from 'react';
import UploadForm from '../../components/Form/UploadForm.js';
import Aux from '../../hoc/Auxiliary/Auxiliary';


class UploadPage extends Component {
    render() {
        return(
            <Aux>
                <UploadForm/>
            </Aux>
        
        );
    }
 
}

export default UploadPage;