import { React } from 'react';

export default function Cards() {
    return(
        <div className="card-group pt-3 bg-success text-center flashcard">
            <div className="card">
                <img src="../img/open-air-thumb.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text lead">
                    Gardening with crops exposed to the elements.
                </p>
                <a href='/open-air'><button type="button" className="btn btn-success px-5">Garden</button></a>
                </div>
            </div>
            <div className="card">
                <img src="../img/cold-frame-thumb.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text lead">
                    Free-standing boxes that trap heat from the sun.
                </p>
                <a href='/cold-frames'><button type="button" className="btn btn-success px-5">Cold Frame</button></a>
                </div>
            </div>
            <div className="card">
                <img src="../img/low-tunnel-thumb.jpg" className="card-img-top" alt="a garden plot w hoops set up"/>
                <div className="card-body">
                <p className="card-text lead">
                    A small, domed structure for protecting crops.
                </p>
                <a href='/low-tunnel'><button type="button" className="btn btn-success px-5">Low Tunnel</button></a>
                </div>
            </div>
            <div className="card">
                <img src="../img/high-tunnel-thumb.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text lead">
                    A large framed structure wrapped in plastic.
                </p>
                <a href='/high-tunnel'><button type="button" className="btn btn-success px-5">High Tunnel</button></a>
                </div>
            </div>
            </div>
    )
}
        
        