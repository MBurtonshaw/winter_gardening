import { React, useEffect, useState } from 'react';
import Footer from './Footer';
import data from '../data.json';

export default function Air() {

  let info = data.data.environments;
  let [ environment, setEnvironment ] = useState('');

  async function getData() {
    setEnvironment(info);
  }

  useEffect( () => { getData() }, [ setEnvironment ] );

  if (environment) {
    let garden = environment[3];

      return(
        <div className='container-fluid'>

          <div className='text-center row pb-3'>
            <div className='container col-12 col-md-6 order-md-2'>
              <img className='img-fluid rounded' src={garden.image_urls[0]} alt='a large structure like a greenhouse'></img>
            </div>
            <div className='container col-md-6 order-1 p-md-5'>
              <h1 className='display-4 pb-3'>{garden.name}</h1>
              <p className='lead'>{garden.layout}</p>
            </div>
            </div>

            <div className='container pb-5 flashcard'>
              <h1 className='display-6'>Soil Conditions</h1>
              <p className='lead'>{garden.soil}</p>
            </div>

            <div className='container pb-5 flashcard'>
              <h1 className='display-6'>Water Conditions</h1>
              <p className='lead'>{garden.water}</p>
            </div>

            <div className='container pb-5 flashcard'>
              <h1 className='display-6'>Special Considerations</h1>
              <p className='lead'>{garden.special}</p>
            </div>
          
            <hr></hr>
            <div className='container text-center text-black-50 flashcard'>
              <div className="card-group">
                <div className='row container mb-3'>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/beets.jpg" className="card-img-top pt-3" alt="beets"/>
                    <div className="card-body">
                      <h5 className="card-title">Beets</h5>
                    </div>
                  </div>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/cabbage.jpg" className="card-img-top pt-3" alt="cabbage"/>
                    <div className="card-body">
                      <h5 className="card-title">Cabbage</h5>
                    </div>
                  </div>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/carrots.jpg" className="card-img-top pt-3" alt="carrots"/>
                    <div className="card-body">
                      <h5 className="card-title">Carrots</h5>
                    </div>
                  </div>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/garlic.jpg" className="card-img-top pt-3" alt="garlic"/>
                    <div className="card-body">
                      <h5 className="card-title">Garlic</h5>
                    </div>
                  </div>
                </div>
                  

                
              <div className="card-group">
                <div className='row container mb-3'>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/kohlrabi.jpg" className="card-img-top pt-3" alt="kohlrabi"/>
                    <div className="card-body">
                      <h5 className="card-title">Kohlrabi</h5>
                    </div>
                  </div>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/leeks.jpg" className="card-img-top pt-3" alt="leeks"/>
                    <div className="card-body">
                      <h5 className="card-title">Leeks</h5>
                    </div>
                  </div>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/lettuce.jpg" className="card-img-top pt-3" alt="lettuce"/>
                    <div className="card-body">
                      <h5 className="card-title">Lettuce</h5>
                    </div>
                  </div>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/onions.jpg" className="card-img-top pt-3" alt="onions"/>
                    <div className="card-body">
                      <h5 className="card-title">Onions</h5>
                    </div>
                  </div>
                </div>
      

                
                <div className='row container'>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/radishes.jpg" className="card-img-top pt-3" alt="radishes"/>
                    <div className="card-body">
                      <h5 className="card-title">Radishes</h5>
                    </div>
                  </div>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/salad.jpg" className="card-img-top pt-3" alt="salad mix"/>
                    <div className="card-body">
                      <h5 className="card-title">Salad Mix</h5>
                    </div>
                  </div>
                  <div className="card col-sm-6 col-md-3">
                    <img src="../img/turnips.jpg" className="card-img-top pt-3" alt="turnips"/>
                    <div className="card-body">
                      <h5 className="card-title">Turnips</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
  }
}