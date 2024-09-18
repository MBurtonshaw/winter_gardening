import { React } from 'react';
import Carousel from './Carousel';
import About from './About';
import Footer from './Footer';

export default function Home() {
      return(
        <div id='app' className='container-fluid'>
          <Carousel />
          <About />
          <Footer />
        </div>
      );
}