

const FeaturedRestaurants = () => {
    return (
        <>
            <section className="dorne-features-restaurant-area bg-default">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <span />
                                <h4>Featured Restaurants</h4>
                                <p>Editor’s pick</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Single Features Area */}
                        <div className="col">
                            <div className="single-features-area mb-50">
                                <img src="Assets/img/bg-img/feature-6.jpg" alt="" />
                                {/* Price */}
                                <div className="ratings-map-area d-flex">
                                    <a href="#">8.5</a>
                                    <a href="#">
                                        <img src="Assets/img/core-img/map.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>Martha’s bar</h5>
                                        <p>Manhathan</p>
                                    </div>
                                    <div className="feature-favourite">
                                        <a href="#">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col">
                            <div className="single-features-area mb-50">
                                <img src="Assets/img/bg-img/feature-7.jpg" alt="" />
                                {/* Price */}
                                <div className="ratings-map-area d-flex">
                                    <a href="#">9.5</a>
                                    <a href="#">
                                        <img src="Assets/img/core-img/map.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>Delux Restaurant</h5>
                                        <p>Paris</p>
                                    </div>
                                    <div className="feature-favourite">
                                        <a href="#">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="single-features-area mb-50">
                                <img src="Assets/img/bg-img/feature-8.jpg" alt="" />
                                {/* Price */}
                                <div className="ratings-map-area d-flex">
                                    <a href="#">8.2</a>
                                    <a href="#">
                                        <img src="Assets/img/core-img/map.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>Jim’s corner Pub</h5>
                                        <p>Madrid</p>
                                    </div>
                                    <div className="feature-favourite">
                                        <a href="#">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="single-features-area mb-50">
                                <img src="Assets/img/bg-img/feature-9.jpg" alt="" />
                                {/* Price */}
                                <div className="ratings-map-area d-flex">
                                    <a href="#">8.7</a>
                                    <a href="#">
                                        <img src="Assets/img/core-img/map.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>tower Risto bar</h5>
                                        <p>Sydney</p>
                                    </div>
                                    <div className="feature-favourite">
                                        <a href="#">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="single-features-area mb-50">
                                <img src="Assets/img/bg-img/feature-10.jpg" alt="" />
                                {/* Price */}
                                <div className="ratings-map-area d-flex">
                                    <a href="#">9.8</a>
                                    <a href="#">
                                        <img src="Assets/img/core-img/map.png" alt="" />
                                    </a>
                                </div>
                                <div className="feature-content d-flex align-items-center justify-content-between">
                                    <div className="feature-title">
                                        <h5>Pizzeria venezia</h5>
                                        <p>Hong Kong</p>
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
                </div>
            </section>

        </>
    )
}
export default FeaturedRestaurants