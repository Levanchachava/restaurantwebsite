import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutus from './Aboutus';
import Specialmenu from './components/Specialmenu';
import Chef from './components/Chef';
import Laurels from './components/Laurels';
import Gallery from './components/Gallery';
import FindUs from './components/FindUs';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Aboutus />
      <Specialmenu />
      <Chef />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
