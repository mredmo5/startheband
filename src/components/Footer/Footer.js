import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SocialMediaBar from '../../components/SocialMedia/SocialMediaBar';
import styles from './Footer.module.css';

const footer = () => (
    <Aux >
        <div className={styles.Footer}>
        <SocialMediaBar />
            <div>   
                <a href='/'>Home</a>
               
               <a href='/'>Booking</a>
         
               <a href='/'>Requests</a>
          
               <a href='/'>TIPS</a>

            </div>
              
                   
              
        </div>
    </Aux>

);


export default footer;