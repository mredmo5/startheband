import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Tour from './components/Tour/Tour';
import {Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage/Home';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Footer from './components/Footer/Footer';
import BookingPage from './containers/BookingPage/BookingPage';
import UploadPage from './containers/Upload/UploadPage';



function App() {
  return (
    <Layout>
      <NavigationItems />
      <Switch>
        <Route path='/Booking' component={BookingPage} />
        <Route path='/Upload' component={UploadPage} />
        <Route path='/Tour' component={Tour} />
        <Route path='/' exact component={HomePage} />
      </Switch>
      <footer>
      <Footer />
      </footer>
    
    </Layout>   
  );
}

export default App;
