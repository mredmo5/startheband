import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import CarouselItem from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Layout>
        <NavigationItems />
        <p>This is an Item</p>
        <CarouselItem />
        <h1>Hello this is a test</h1>
        <Footer />
    </Layout>   
  );
}

export default App;
