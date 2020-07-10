import React, {Component} from 'react';
import CarouselItem from '../../components/Carousel/Carousel';
import Tour from '../../components/Tour/Tour';
import Form from '../../components/Form/Form';
import Video from '../../components/Video/Video';
import Aux from '../../hoc/Auxiliary/Auxiliary';


class HomePage extends Component {
    render() {
        return(
            <Aux>
                <Form/>
                    <div className='row'>
                        <div className='col-md-8 mt-3'>
                            <CarouselItem />
                        </div>
                        <div className='col-md-4 mt-3'>
                            <Tour/>
                        </div>
                    </div>
                <Video />
            </Aux>
        
        );
    }
 
}

export default HomePage;