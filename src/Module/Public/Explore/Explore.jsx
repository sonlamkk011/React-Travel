import { Button } from "antd"
import Footer from "../Shared/Footer/Footer"
import Header from "../Shared/Header/Header"


const Explore = () => {
    return (

        <>
            <Header />
            <>
                <div
                    className="breadcumb-area bg-img bg-overlay"
                    style={{ backgroundImage: "url(Assets/img/bg-img/hero-1.jpg)" }}
                ></div>
                {/* ***** Breadcumb Area End ***** */}
                {/* Explore Area */}
                <section className="dorne-explore-area d-md-flex">
                    {/* Explore Search Area */}
                    <div className="explore-search-area d-md-flex">
                        {/* Explore Search Form */}
                        <div className="explore-search-form">
                            <h6>What are you looking for?</h6>
                            {/* Tabs */}
                            <div className="nav nav-tabs" id="heroTab" role="tablist">
                                <a
                                    className="nav-item nav-link active"
                                    id="nav-places-tab"
                                    data-toggle="tab"
                                    href="#nav-places"
                                    role="tab"
                                    aria-controls="nav-places"
                                    aria-selected="true"
                                >
                                    Places
                                </a>
                                <a
                                    className="nav-item nav-link"
                                    id="nav-events-tab"
                                    data-toggle="tab"
                                    href="#nav-events"
                                    role="tab"
                                    aria-controls="nav-events"
                                    aria-selected="false"
                                >
                                    Events
                                </a>
                            </div>
                            {/* Tabs Content */}
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-places"
                                    role="tabpanel"
                                    aria-labelledby="nav-places-tab"
                                >
                                    <form action="#" method="get">
                                        <select className="custom-select" id="destinations">
                                            <option selected="">Your Destinations</option>
                                            <option value={1}>New York</option>
                                            <option value={2}>Latvia</option>
                                            <option value={3}>Dhaka</option>
                                            <option value={4}>Melbourne</option>
                                            <option value={5}>London</option>
                                        </select>
                                        <select className="custom-select" id="catagories">
                                            <option selected="">All Catagories</option>
                                            <option value={1}>Catagories 1</option>
                                            <option value={2}>Catagories 2</option>
                                            <option value={3}>Catagories 3</option>
                                            <option value={3}>Catagories 4</option>
                                        </select>
                                        <select className="custom-select" id="price-range">
                                            <option selected="">Price Range</option>
                                            <option value={1}>$100 - $499</option>
                                            <option value={2}>$500 - $999</option>
                                            <option value={3}>$1000 - $4999</option>
                                            <option value={3}>$5000+</option>
                                        </select>
                                        <select className="custom-select" id="proximity">
                                            <option selected="">Proximity</option>
                                            <option value={1}>Proximity 1</option>
                                            <option value={2}>Proximity 2</option>
                                            <option value={3}>Proximity 3</option>
                                            <option value={3}>Proximity 4</option>
                                            <option value={3}>Proximity 5</option>
                                        </select>
                                        <div className="row mt-md-5 mt-0">
                                            <div className="col-12 col-xl-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Accepts Credit Cards
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Bike Parking
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Wireless Internet
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Reservations
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Privat Parking
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Smoking Area
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Wheelchair Accesible
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">Coupons</span>
                                                </label>
                                            </div>
                                        </div>
                                        <Button
                                            type="submit"
                                            className="btn dorne-btn mt-50 bg-white text-dark"
                                            style={{height:"50px", borderRadius:"999px"}}
                                            
                                        >
                                            <i className="fa fa-search pr-2" aria-hidden="true" /> Search
                                        </Button>
                                    </form>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-events"
                                    role="tabpanel"
                                    aria-labelledby="nav-events-tab"
                                >
                                    <form action="#" method="get">
                                        <select className="custom-select" id="events-destinations">
                                            <option selected="">Your Destinations</option>
                                            <option value={1}>New York</option>
                                            <option value={2}>Latvia</option>
                                            <option value={3}>Dhaka</option>
                                            <option value={4}>Melbourne</option>
                                            <option value={5}>London</option>
                                        </select>
                                        <select className="custom-select" id="events-catagories">
                                            <option selected="">All Catagories</option>
                                            <option value={1}>Catagories 1</option>
                                            <option value={2}>Catagories 2</option>
                                            <option value={3}>Catagories 3</option>
                                            <option value={3}>Catagories 4</option>
                                        </select>
                                        <select className="custom-select" id="events-price-range">
                                            <option selected="">Price Range</option>
                                            <option value={1}>$100 - $499</option>
                                            <option value={2}>$500 - $999</option>
                                            <option value={3}>$1000 - $4999</option>
                                            <option value={3}>$5000+</option>
                                        </select>
                                        <select className="custom-select" id="events-proximity">
                                            <option selected="">Proximity</option>
                                            <option value={1}>Proximity 1</option>
                                            <option value={2}>Proximity 2</option>
                                            <option value={3}>Proximity 3</option>
                                            <option value={3}>Proximity 4</option>
                                            <option value={3}>Proximity 5</option>
                                        </select>
                                        <button
                                            type="submit"
                                            className="btn dorne-btn mt-50 bg-white text-dark"
                                        >
                                            <i className="fa fa-search pr-2" aria-hidden="true" /> Search
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Explore Search Result */}
                        <div className="explore-search-result">
                            {/* Single Features Area */}
                            <div className="single-features-area">
                                <img src="Assets/img/bg-img/feature-1.jpg" alt="" />
                                {/* Price */}
                                <div className="price-start">
                                    <p>FROM $59/night</p>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>Ibiza</h5>
                                        <p>Party</p>
                                    </div>
                                    <div className="feature-favourite">
                                        <a href="#">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Features Area */}
                            <div className="single-features-area">
                                <img src="Assets/img/bg-img/feature-2.jpg" alt="" />
                                {/* Price */}
                                <div className="price-start">
                                    <p>FROM $59/night</p>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>Paris</h5>
                                        <p>Luxury</p>
                                    </div>
                                    <div className="feature-favourite">
                                        <a href="#">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Features Area */}
                            <div className="single-features-area">
                                <img src="Assets/img/bg-img/feature-3.jpg" alt="" />
                                {/* Price */}
                                <div className="price-start">
                                    <p>FROM $59/night</p>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>Lake Como</h5>
                                        <p>Spectacular</p>
                                    </div>
                                    <div className="feature-favourite">
                                        <a href="#">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Features Area */}
                            <div className="single-features-area">
                                <img src="Assets/img/bg-img/feature-4.jpg" alt="" />
                                {/* Price */}
                                <div className="price-start">
                                    <p>FROM $59/night</p>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>Greece</h5>
                                        <p>Sunny</p>
                                    </div>
                                    <div className="feature-favourite">
                                        <a href="#">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Explore Map Area */}
                    <div className="explore-map-area">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.489397200794!2d105.76031421540179!3d20.973010695054068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453edc6904cf9%3A0xef22b602813dd07b!2sMetaway%20Holdings!5e0!3m2!1svi!2s!4v1661325669224!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
            </>

            <Footer />
        </>
    )
}
export default Explore