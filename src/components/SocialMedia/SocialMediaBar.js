import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './SocialMediaBar.module.css';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa';

const socialMediaBar = () => (
    <Aux>
        <div className={styles.SocialMediaBar}>
            <h1>Follow The Band!!</h1>
        </div>
        <div className={styles.SocialMediaBar}>
            
            
                    <a href='/'><FaFacebook/></a>
                
                    <a href='/'><FaInstagram /></a>
              
                    <a href='/'><FaYoutube /></a>
               
                    <a href='/'><FaLinkedin /></a>
              
        </div>
    </Aux>

)

export default socialMediaBar;