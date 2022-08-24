import Footer from "../Shared/Footer/Footer"
import Header from "../Shared/Header/Header"
import Category from "./Components/Category/Category"
import ClientsArea from "./Components/ClientsArea/ClientsArea"
import DorneEditors from "./Components/DorneEditors/DorneEditors"
import FeaturedDestinations from "./Components/FeaturedDestinations/FeaturedDestinations"
import FeaturedEvents from "./Components/FeaturedEvents/FeaturedEvents"
import FeaturedRestaurants from "./Components/FeaturedRestaurants/FeaturedRestaurants"
import Layout from "./Components/Layout/Layout"


const Home = () => {
    return (
        <>
            {/* <div id="preloader">
                <div className="dorne-load" />
            </div> */}
          
            <Header />
            <Layout />
            <Category />
            <DorneEditors />
            <FeaturedDestinations />
            <FeaturedRestaurants />
            <FeaturedEvents />
            <ClientsArea />
            <Footer />


        </>
    )
}
export default Home