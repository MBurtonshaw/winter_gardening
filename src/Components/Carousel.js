import { React } from 'react';

export default function Carousel() {
      return(

            <div id='bg-div' className="container-fluid row d-none mx-0 d-md-flex text-center py-4">
                <div className="carousel slide col-7 m-auto pt5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <h1 className='lead py-2 fw-bold text-black-50'>Late Season Gardening in a Winter Climate</h1>
                    <div className="carousel-item active smoothed">
                        <img src="img/high_slide.jpg" className="d-block w-100 smoothed" alt="..."/>
                    </div>
                    <div className="carousel-item smoothed">
                        <img src="img/frame_slide.jpg" className="d-block w-100 smoothed" alt="..."/>
                    </div>
                    <div className="carousel-item smoothed">
                        <img src="img/low_slide.jpg" className="d-block w-100 smoothed" alt="..."/>
                    </div>
                    <div className="carousel-item smoothed">
                        <img src="img/garlic_slide.jpg" className="d-block w-100 smoothed" alt="..."/>
                    </div>
                    </div>
                </div>
            </div>

      )
}