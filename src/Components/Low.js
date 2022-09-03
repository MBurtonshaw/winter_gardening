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
    let garden = environment[2];

      return(
        <div className='container-fluid'>

          <div className='text-center row pb-3'>
          <div className='container col-12 col-lg-6 order-md-2'>
            <img className='img-fluid rounded' src={garden.image_urls[0]} alt='two raised garden beds, one with white hoops and plastic wrapped around'></img>
          </div>
          <div className='container col-lg-6 order-1 p-md-5'>
            <h1 className='display-4 pb-3 pt-4 pt-md-0'>{garden.name}</h1>
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

          {/* /////////////////  Card Group //////////////////// */}
          
          <div className='container text-center text-black-50'>
            <div className="card-group flashcard">
            <div className='row mb-3'>
              {garden.crops.map((item, index) => {
                return(
                    <div key={index} className="card col-sm-6 col-md-3">
                      <img src={"../img/" + item + ".jpg"} className="card-img-top pt-3" alt={item}/>
                      <div className="card-body">
                        <h5 className="card-title">{item}</h5>
                      </div>
                    </div>
                );
              })}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      );
  }
}