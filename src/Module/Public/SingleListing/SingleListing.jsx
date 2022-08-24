import Footer from "../Shared/Footer/Footer"
import Header from "../Shared/Header/Header"


const SingleListing = () => {
    return (
        <>
            <Header />
            <>
                <div
                    className="breadcumb-area height-700 bg-img bg-overlay"
                    style={{ backgroundImage: "url(Assets/img/bg-img/breadcumb.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcumb-content">
                                    <div className="map-ratings-review-area d-flex">
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <img src="Assets/img/core-img/map.png" alt="" />
                                        </a>
                                        <a href="#">8.7</a>
                                        <a href="#">Write a review</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Breadcumb Area End ***** */}
                {/* ***** Single Listing Area Start ***** */}
                <section className="dorne-single-listing-area section-padding-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* Single Listing Content */}
                            <div className="col-12 col-lg-8">
                                <div className="single-listing-content">
                                    <div className="listing-title">
                                        <h4>Burger House soho</h4>
                                        <h6>First Avenue no 83</h6>
                                    </div>
                                    <div className="single-listing-nav">
                                        <nav>
                                            <ul id="listingNav">
                                                <li className="active">
                                                    <a href="#overview">Overview</a>
                                                </li>
                                                <li>
                                                    <a href="#menu">Menu</a>
                                                </li>
                                                <li>
                                                    <a href="#review">Reviews</a>
                                                </li>
                                                <li>
                                                    <a href="#lomap">Location on map</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="overview-content mt-50" id="overview">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
                                            nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel augue
                                            sit amet vestibulum. Proin tempus lacus porta lorem blandit
                                            aliquam eget quis ipsum. Vivamus accumsan consequat ligula non
                                            volutpat. Sed mollis orci non cursus vestibulum. Pellentesque
                                            vitae est a augue laoreet venenatis sed eu felis. Sed cursus
                                            magna nec turpis ullamcorper, eget rutrum felis egestas. Nunc
                                            odio ex, fermentum efficitur nunc vitae, efficitur hendrerit
                                            diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nam ac nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel
                                            augue sit amet vestibulum. Proin tempus lacus porta lorem
                                            blandit aliquam eget quis ipsum.
                                        </p>
                                        <div className="row mt-5">
                                            <div className="col-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Accepts Credit Cards
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Bike Parking
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Wireless Internet
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Reservations
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Privat Parking
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Smoking Area
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                                                        Wheelchair Accesible
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <label className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">Coupons</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-menu-area mt-100" id="menu">
                                        <h4>Menu</h4>
                                        {/* Single Listing Menu */}
                                        <div className="single-listing-menu d-flex justify-content-between">
                                            {/* Listing Menu Title */}
                                            <div className="listing-menu-title">
                                                <h6>Classic Burger</h6>
                                                <p>
                                                    Beef, salad, mustard, bacon, mayonnaise, spicey relish,
                                                    cheese
                                                </p>
                                            </div>
                                            {/* Listing Menu Price */}
                                            <div className="listing-menu-price">
                                                <h6>$9,90</h6>
                                            </div>
                                        </div>
                                        {/* Single Listing Menu */}
                                        <div className="single-listing-menu d-flex justify-content-between">
                                            {/* Listing Menu Title */}
                                            <div className="listing-menu-title">
                                                <h6>House Special Burger</h6>
                                                <p>
                                                    Beef, salad, mustard, bacon, mayonnaise, spicey relish,
                                                    cheese
                                                </p>
                                            </div>
                                            {/* Listing Menu Price */}
                                            <div className="listing-menu-price">
                                                <h6>$9,90</h6>
                                            </div>
                                        </div>
                                        {/* Single Listing Menu */}
                                        <div className="single-listing-menu d-flex justify-content-between">
                                            {/* Listing Menu Title */}
                                            <div className="listing-menu-title">
                                                <h6>Classic Burger</h6>
                                                <p>
                                                    Beef, salad, mustard, bacon, mayonnaise, spicey relish,
                                                    cheese
                                                </p>
                                            </div>
                                            {/* Listing Menu Price */}
                                            <div className="listing-menu-price">
                                                <h6>$9,90</h6>
                                            </div>
                                        </div>
                                        {/* Single Listing Menu */}
                                        <div className="single-listing-menu d-flex justify-content-between">
                                            {/* Listing Menu Title */}
                                            <div className="listing-menu-title">
                                                <h6>House Special Burger</h6>
                                                <p>
                                                    Beef, salad, mustard, bacon, mayonnaise, spicey relish,
                                                    cheese
                                                </p>
                                            </div>
                                            {/* Listing Menu Price */}
                                            <div className="listing-menu-price">
                                                <h6>$9,90</h6>
                                            </div>
                                        </div>
                                        <a href="#" className="btn dorne-btn mt-50">
                                            + See The Menu
                                        </a>
                                    </div>
                                    <div className="listing-reviews-area mt-100" id="review">
                                        <h4>reviews</h4>
                                        <div className="single-review-area">
                                            <div className="reviewer-meta d-flex align-items-center">
                                                <img src="Assets/img/clients-img/1.jpg" alt="" />
                                                <div className="reviewer-content">
                                                    <div className="review-title-ratings d-flex justify-content-between">
                                                        <h5>“The best Burger in town”</h5>
                                                        <div className="ratings">
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Nam ac nibh sed mi ullamcorper rhoncus. Curabitur pulvinar
                                                        vel augue sit amet vestibulum. Proin tempus lacus porta
                                                        lorem blandit aliquam eget quis ipsum. Vivamus accumsan
                                                        consequat ligula non volutpat.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="reviewer-name">
                                                <h6>Christinne Smith</h6>
                                                <p>12 November 2017</p>
                                            </div>
                                        </div>
                                        <div className="single-review-area">
                                            <div className="reviewer-meta d-flex align-items-center">
                                                <img src="Assets/img/clients-img/1.jpg" alt="" />
                                                <div className="reviewer-content">
                                                    <div className="review-title-ratings d-flex justify-content-between">
                                                        <h5>“Quality ingredients”</h5>
                                                        <div className="ratings">
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                            <img src="Assets/img/clients-img/star-fill.png" alt="" />
                                                            <img src="Assets/img/clients-img/star-unfill.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Nam ac nibh sed mi ullamcorper rhoncus. Curabitur pulvinar
                                                        vel augue sit amet vestibulum. Proin tempus lacus porta
                                                        lorem blandit aliquam eget quis ipsum. Vivamus accumsan
                                                        consequat ligula non volutpat.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="reviewer-name">
                                                <h6>Michael Brown</h6>
                                                <p>12 November 2017</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location-on-map mt-50" id="lomap">
                                        <h4>Location on map</h4>
                                        <div className="location-map">
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
                                    </div>
                                </div>
                            </div>
                            {/* Listing Sidebar */}
                            <div className="col-12 col-md-8 col-lg-4">
                                <div className="listing-sidebar">
                                    {/* Listing Verify */}
                                    <div className="listing-verify">
                                        <a href="#" className="btn dorne-btn w-100">
                                            <i className="fa fa-check pr-3" /> Verified Listing
                                        </a>
                                    </div>
                                    {/* Book A Table Widget */}
                                    <div className="book-a-table-widget mt-50">
                                        <h6>Book A Table</h6>
                                        <form action="#" method="get">
                                            <select className="custom-select" id="destinations">
                                                <option selected="">Who will be arriving</option>
                                                <option value={1}>New York</option>
                                                <option value={2}>Latvia</option>
                                                <option value={3}>Dhaka</option>
                                                <option value={4}>Melbourne</option>
                                                <option value={5}>London</option>
                                            </select>
                                            <select className="custom-select" id="catagories">
                                                <option selected="">Guest 1</option>
                                                <option value={1}>Guest 2</option>
                                                <option value={3}>Guest 3</option>
                                                <option value={3}>Guest 4</option>
                                            </select>
                                            <button
                                                type="submit"
                                                className="btn dorne-btn bg-white text-dark"
                                            >
                                                <i className="fa fa-search pr-2" aria-hidden="true" /> Search
                                            </button>
                                        </form>
                                    </div>
                                    {/* Opening Hours Widget */}
                                    <div className="opening-hours-widget mt-50">
                                        <h6>Opening Hours</h6>
                                        <ul className="opening-hours">
                                            <li>
                                                <p>Monday</p>
                                                <p>Closed</p>
                                            </li>
                                            <li>
                                                <p>Tuesday</p>
                                                <p>9 AM - 1 PM</p>
                                            </li>
                                            <li>
                                                <p>Wednesday</p>
                                                <p>9 AM - 1 PM</p>
                                            </li>
                                            <li>
                                                <p>Thursday</p>
                                                <p>9 AM - 1 PM</p>
                                            </li>
                                            <li>
                                                <p>Friday</p>
                                                <p>9 AM - 1 PM</p>
                                            </li>
                                            <li>
                                                <p>Saturday</p>
                                                <p>9 AM - 1 PM</p>
                                            </li>
                                            <li>
                                                <p>Sunday</p>
                                                <p>9 AM - 1 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Author Widget */}
                                    <div className="author-widget mt-50 d-flex align-items-center">
                                        <img src="Assets/img/clients-img/1.jpg" alt="" />
                                        <div className="authors-name">
                                            <a href="#">James Smith</a>
                                            <p>The Author</p>
                                        </div>
                                    </div>
                                    {/* Contact Form */}
                                    <div className="contact-form contact-form-widget mt-50">
                                        <h6>Contact Business</h6>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-12">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        id="Message"
                                                        cols={30}
                                                        rows={10}
                                                        placeholder="Your Message"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn dorne-btn">
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            <Footer />
        </>
    )
}
export default SingleListing