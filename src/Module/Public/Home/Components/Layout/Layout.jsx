import { Button } from "@mui/material"


const Layout = () => {
    return(

        <>
          <section
                className="dorne-welcome-area bg-img bg-overlay"
                style={{ backgroundImage: "url(Assets/img/bg-img/hero-1.jpg)" }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col-12 col-md-10">
                            <div className="hero-content">
                                <h2>Discover places near you</h2>
                                <h4>This is the best guide of your city</h4>
                            </div>
                            {/* Hero Search Form */}
                            <div className="hero-search-form">
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
                                        <h6>What are you looking for?</h6>
                                        <form action="#" method="get">
                                            <select className="custom-select">
                                                <option selected="">Your Destinations</option>
                                                <option value={1}>New York</option>
                                                <option value={2}>Latvia</option>
                                                <option value={3}>Dhaka</option>
                                                <option value={4}>Melbourne</option>
                                                <option value={5}>London</option>
                                            </select>
                                            <select className="custom-select">
                                                <option selected="">All Catagories</option>
                                                <option value={1}>Catagories 1</option>
                                                <option value={2}>Catagories 2</option>
                                                <option value={3}>Catagories 3</option>
                                            </select>
                                            <select className="custom-select">
                                                <option selected="">Price Range</option>
                                                <option value={1}>$100 - $499</option>
                                                <option value={2}>$500 - $999</option>
                                                <option value={3}>$1000 - $4999</option>
                                            </select>
                                            <button type="submit" className="btn dorne-btn">
                                                <i className="fa fa-search pr-2" aria-hidden="true" /> Search
                                            </button>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="nav-events"
                                        role="tabpanel"
                                        aria-labelledby="nav-events-tab"
                                    >
                                        <h6>What are you looking for?</h6>
                                        <form action="#" method="get">
                                            <select className="custom-select">
                                                <option selected="">Your Destinations</option>
                                                <option value={1}>New York</option>
                                                <option value={2}>Latvia</option>
                                                <option value={3}>Dhaka</option>
                                                <option value={4}>Melbourne</option>
                                                <option value={5}>London</option>
                                            </select>
                                            <select className="custom-select">
                                                <option selected="">All Catagories</option>
                                                <option value={1}>Catagories 1</option>
                                                <option value={2}>Catagories 2</option>
                                                <option value={3}>Catagories 3</option>
                                            </select>
                                            <select className="custom-select">
                                                <option selected="">Price Range</option>
                                                <option value={1}>$100 - $499</option>
                                                <option value={2}>$500 - $999</option>
                                                <option value={3}>$1000 - $4999</option>
                                            </select>
                                            <a href="#" className="btn dorne-btn">
                                                <i className="fa fa-search pr-2" aria-hidden="true" /> Search
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Social Btn */}
                <div className="hero-social-btn">
                    <div className="social-title d-flex align-items-center">
                        <h6>Follow us on Lam Son dz</h6>
                        <span />
                    </div>
                    <div className="social-btns">
                        <a href="https://www.facebook.com/sonlamkk/">
                            <i className="fa fa-facebook" aria-haspopup="true" />
                        </a>
                        <a href="https://www.facebook.com/sonlamkk/">
                            <i className="fa fa-linkedin" aria-haspopup="true" />
                        </a>
                        <a href="https://www.facebook.com/sonlamkk/">
                            <i className="fa fa-behance" aria-hidden="true" />
                        </a>
                        <a href="https://www.facebook.com/sonlamkk/">
                            <i className="fa fa-dribbble" aria-hidden="true" />
                        </a>
                        <a href="https://www.facebook.com/sonlamkk/">
                            <i className="fa fa-twitter" aria-haspopup="true" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Layout