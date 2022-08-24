

const DorneEditors = () => {
    return (
        <>
            <section
                className="dorne-editors-pick-area bg-img bg-overlay-9 section-padding-100"
                style={{ backgroundImage: "url(Assets/img/bg-img/hero-2.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <span />
                                <h4>Cities you must see</h4>
                                <p>Editor’s pick</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div
                                className="single-editors-pick-area wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <img src="Assets/img/bg-img/editor-1.jpg" alt="" />
                                <div className="editors-pick-info">
                                    <div className="places-total-destinations d-flex">
                                        <a href="#">New York</a>
                                        <a href="#">1643 Destinations</a>
                                    </div>
                                    <div className="add-more">
                                        <a href="#">+</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div
                                className="single-editors-pick-area wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <img src="Assets/img/bg-img/editor-2.jpg" alt="" />
                                <div className="editors-pick-info">
                                    <div className="places-total-destinations d-flex">
                                        <a href="#">Barcelona</a>
                                        <a href="#">943 Destinations</a>
                                    </div>
                                    <div className="add-more">
                                        <a href="#">+</a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="single-editors-pick-area wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <img src="Assets/img/bg-img/editor-3.jpg" alt="" />
                                <div className="editors-pick-info">
                                    <div className="places-total-destinations d-flex">
                                        <a href="#">paris</a>
                                        <a href="#">243 Destinations</a>
                                    </div>
                                    <div className="add-more">
                                        <a href="#">+</a>
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
export default DorneEditors