import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SocialMediaBar from '../../components/SocialMedia/SocialMediaBar';
import classes from './Footer.css';

const footer = () => (
    <Aux >
        <div className={classes.FooterComp}>
            <div className={classes.FooterComp}>Hello!</div>
        <SocialMediaBar />
            <nav>
                <navitem>
                    <a href='/'>Home</a>
                </navitem>
                <navitem>
                    <a href='/'>Booking</a>
                </navitem>
                <navitem>
                    <a href='/'>Requests</a>
                </navitem>
                <navitem>
                    <a href='/'>TIPS</a>
                </navitem>
            </nav>
        </div>
    </Aux>

);


export default footer;