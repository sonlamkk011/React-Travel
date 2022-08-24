import Footer from "../Shared/Footer/Footer"
import Header from "../Shared/Header/Header"



const Contact = () => {
    return (
        <>
            <Header />
            <>
                <div
                    className="breadcumb-area bg-img bg-overlay"
                    style={{ backgroundImage: "url(Assets/img/bg-img/hero-1.jpg)" }}
                ></div>
                {/* ***** Breadcumb Area End ***** */}
                {/* ***** Contact Area Start ***** */}
                <div className="dorne-contact-area d-md-flex" id="contact">
                    {/* Contact Form Area */}
                    <div className="contact-form-area equal-height">
                        <div className="contact-text">
                            <h4>Hello, Get in touch with us</h4>
                            <p>
                                The customer is very important, the customer will be followed by the customer.
                                For as nibh sed mi ullamcorper rhoncus. I'm talking about a pillow or an advertisement.
                                At the same time, the portal of the lake flatters someone who needs it.
                                We live in a relationship with the law, not life.
                                But the soft clinical course is not the course. The life of the people is a curse,
                                but eu felis. But the course is great, and the body is not ugly. Now the hatred is ex,
                                the ferment is now made of life, the bureau is made diam. Lorem ipsum dolor sit amet, consectetur.
                            </p>
                            <div className="contact-info d-lg-flex">
                                <div className="single-contact-info">
                                    <h6>
                                        <i className="fa fa-map-signs" aria-hidden="true" /> Lam Son Dep Trai
                                    </h6>
                                    <h6>
                                        <i className="fa fa-map-signs" aria-hidden="true" /> 12-12-2001
                                    </h6>
                                </div>
                                <div className="single-contact-info">
                                    <h6>
                                        <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                                        sonlamkk011@gmail.com
                                    </h6>
                                    <h6>
                                        <i className="fa fa-phone" aria-hidden="true" /> +84 978796738
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="contact-form-title">
                                <h6>Contact Business</h6>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control"
                                            placeholder="Subject"
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
                    {/* Map Area */}
                    <div className="dorne-map-area equal-height">
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
            </>

            <Footer />
        </>
    )
}
export default Contact