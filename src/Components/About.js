import Cards from './Cards';

export default function About() {
    return(
        <div id="about" className='container-fluid p-5'>
            <hr></hr>
            <div className='row flashcard'>
                <div className="container col-lg-7 text-center px-md-5">
                    <h1 className='display-4'>Overview</h1>
                    <p className='text-black-50 pt-5 px-1 px-md-5'>
                        The goal of winter gardening in Northern climates is to be able to plant as long as possible
                        into the growing season, even when dealing with frost. Certain plants are cold tolerant or cold resistant
                        and will continue to grow if given enough sunlight. So in order to maximize your garden's usefulness,
                        be sure to sow the last seeds, and transplant the last plants, by a certain date. That date will be determined
                        by whichever USDA hardiness zone you're working within, as well as other potential variables such as topography, etc.
                    </p>
                    <p className='text-black-50 px-md-5 pb-4'>This site is designed to instruct the gardener based on the growing environment chosen. </p>
                    <div className="dropup text-center pb-5">
                        <button className="btn btn-secondary dropdown-toggle bg-success" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Get Started!
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/open-air">Garden</a></li>
                            <li><a className="dropdown-item" href="/cold-frames">Cold Frames</a></li>
                            <li><a className="dropdown-item" href="/low-tunnel">Low Tunnel</a></li>
                            <li><a className="dropdown-item" href="/high-tunnel">High Tunnel</a></li>
                        </ul>
                    </div>
                </div>

                <div className="container col-lg-4 text-center pb-5">
                    <h1 className='display-6 pt-2 pb-4'>Plant Options</h1>
                    <ul className='list-group list-group-flush bg-success px-4 py-3 lead'>
                        <li className='list-group-item text-white'>Beets</li>
                        <li className='list-group-item text-white'>Cabbage</li>
                        <li className='list-group-item text-white'>Carrots</li>
                        <li className='list-group-item text-white'>Garlic</li>
                        <li className='list-group-item text-white'>Kohlrabi</li>
                        <li className='list-group-item text-white'>Leeks</li>
                        <li className='list-group-item text-white'>Lettuce/Salad Greens</li>
                        <li className='list-group-item text-white'>Onions</li>
                        <li className='list-group-item text-white'>Radishes</li>
                        <li className='list-group-item text-white'>Turnips</li>
                    </ul>
                </div>

            </div>

            <div className='row px-md-5 flashcard'>
                <h1 className='display-5 pb-4 px-md-5'>Persephone Period</h1>
                <p className='text-black-50'>
                    The Persephone period refers to the range of dates from when someone can plant and still have minimal light
                    requirements met. At a certain point in Autumn/Winter, the Persephone period is over; sunlight is diminished enough that winter gardening
                    is essentially paused. Root vegetables will not grow but will remain alive in frozen ground, and even under 
                    snow in a sort of stasis, able to be harvested as needed. As Winter transitions to Spring, the Persephone period
                    begins again and seeds can be sown, plants planted, generally as soon as the danger of frost is gone. The concept
                    of the Persephone period is important to understand if one wants to get more out of their Winter gardening.
                </p>
            </div>

            <hr></hr>
            <Cards />

        </div>
    );
}