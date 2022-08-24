import { useState } from "react"
import { Link } from "react-router-dom"


const Header = () => {
    const [search, setSearch] = useState(false);

    const handleSearch = () => {
        setSearch(true);
    }

    return (
        <>
            <div className="dorne-search-form d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="search-close-btn" id="closeBtn">
                                <i className="pe-7s-close-circle" aria-hidden="true" />
                            </div>
                            <form action="#" method="get">
                                <input
                                    type="search"
                                    name="caviarSearch"
                                    id="search"
                                    placeholder="Search Your Desire Destinations or Events"
                                />
                                <input type="submit" className="d-none" defaultValue="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <header className="header_area" id="header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-12 h-100">
                            <nav className="h-100 navbar navbar-expand-lg">
                                <Link to="/" className="navbar-brand" >
                                    <img src="Assets/img/core-img/logo.png" alt="" />
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#dorneNav"
                                    aria-controls="dorneNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="fa fa-bars" />
                                </button>
                                {/* Nav */}
                                <div className="collapse navbar-collapse" id="dorneNav">
                                    <ul className="navbar-nav mr-auto" id="dorneMenu">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link" >
                                                Home <span className="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Explore <i className="fa fa-angle-down" aria-hidden="true" />
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link to="/" className="dropdown-item" >
                                                    Home
                                                </Link>
                                                <Link to="/explore" className="dropdown-item">
                                                    Explore
                                                </Link>
                                                <Link to="/listing" className="dropdown-item">
                                                    Listing
                                                </Link>
                                                <Link to="/single-listing" className="dropdown-item" >
                                                    Single Listing
                                                </Link>
                                                <Link to="/contact" className="dropdown-item" >
                                                    Contact
                                                </Link>
                                            </div>
                                        </li>
                                        {/* <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                id="navbarDropdown2"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Listings <i className="fa fa-angle-down" aria-hidden="true" />
                                            </a>
                                            <div
                                                className="dropdown-menu"
                                                aria-labelledby="navbarDropdown2"
                                            >
                                                <a className="dropdown-item" href="index.html">
                                                    Home
                                                </a>
                                                <a className="dropdown-item" href="explore.html">
                                                    Explore
                                                </a>
                                                <a className="dropdown-item" href="listing.html">
                                                    Listing
                                                </a>
                                                <a className="dropdown-item" href="single-listing.html">
                                                    Single Listing
                                                </a>
                                                <a className="dropdown-item" href="contact.html">
                                                    Contact
                                                </a>
                                            </div>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link" >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* Search btn */}
                                    <div className="dorne-search-btn">
                                        <a id="search-btn" href="#">
                                            <i className="fa fa-search" aria-hidden="true"></i> Search
                                        </a>
                                    </div>
                                    {/* Signin btn */}
                                    <div className="dorne-signin-btn">
                                        <a href="#">Sign in or Register</a>
                                    </div>
                                    {/* Add listings btn */}
                                    <div className="dorne-add-listings-btn">
                                        <a href="#" className="btn dorne-btn">
                                            + Add Listings
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
export default Header