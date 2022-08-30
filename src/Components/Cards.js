import { React } from 'react';

export default function Cards() {
    return(
        <div className="card-group pt-3 bg-success text-center flashcard container-fluid">
            <div className="card">
                <img src="../img/open-air-thumb.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text">
                    Gardening with crops exposed to the elements.
                </p>
                <a href='/open-air'><button type="button" className="btn btn-success px-5 px-sm-3">Garden</button></a>
                </div>
            </div>
            <div className="card">
                <img src="../img/cold-frame-thumb.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text">
                    Free-standing boxes that trap heat from the sun.
                </p>
                <a href='/cold-frames'><button type="button" className="btn btn-success px-5 px-sm-2">Cold Frame</button></a>
                </div>
            </div>
            <div className="card">
                <img src="../img/low-tunnel-thumb.jpg" className="card-img-top" alt="a garden plot w hoops set up"/>
                <div className="card-body">
                <p className="card-text">
                    A small, domed structure for sheltering crops.
                </p>
                <a href='/low-tunnel'><button type="button" className="btn btn-success px-5 px-sm-2">Low Tunnel</button></a>
                </div>
            </div>
            <div className="card">
                <img src="../img/high-tunnel-thumb.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text">
                    A large framed structure wrapped in plastic.
                </p>
                <a href='/high-tunnel'><button type="button" className="btn btn-success px-5 px-sm-2">High Tunnel</button></a>
                </div>
            </div>
            </div>
    )
}
        
        