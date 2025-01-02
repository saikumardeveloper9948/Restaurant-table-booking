import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/section1/hero";
import Items from './components/section2/toplist';
import Bgimage from "./assets/2.png"
import Banner from "./components/banner/banner"
import Categories from "./components/listitems/categories"

import Reservation from "./components/reservation/index"
import Services from "./components/Services/services"
import Loginsignup from "./components/loginsignup/signup"



const bgStyle={
  backgroundImage: `url(${Bgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat:"no-repeat"
}

const App = () => {
  return <div style={bgStyle} className='overflow-x-hidden'>
   <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
   <Navbar/>
   <Loginsignup/>
    <Hero/>
    <Items/>
    <Banner/>
    <Categories/>
    <Reservation/>
    <Services/>
   </div>
  </div>
  
}

export default App