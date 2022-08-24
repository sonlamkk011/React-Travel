import logo from './logo.svg';
import './App.css';
import Public from './Module/Public/Public';
import { Routes, Route } from 'react-router-dom'
import Contact from './Module/Public/Contact/Contact';
import Explore from './Module/Public/Explore/Explore';
import Listings from './Module/Public/Listings/Listings';
import SingleListing from './Module/Public/SingleListing/SingleListing';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Public />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/explore' element={ <Explore /> } />
        <Route path='/listing' element={ <Listings /> } />
        <Route path='/single-listing' element={ <SingleListing /> } />
      </Routes>
    </>
  );
}

export default App;
