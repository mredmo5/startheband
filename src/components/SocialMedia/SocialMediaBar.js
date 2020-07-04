import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './SocialMediaBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const socialMediaBar = () => (
    <Aux>
        <div className={classes.SocialMediaBar}>
            <h1>Follow The Band!!</h1>
        </div>
        <div className={classes.SocialMediaBar}>
            <nav>
                <navitem>
                    <a href='/'><FontAwesomeIcon icon={faCoffee} /></a>
                </navitem>
            </nav>
        </div>
    </Aux>

)

export default socialMediaBar;