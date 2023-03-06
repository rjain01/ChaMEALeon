import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CategoryCard from './components/CategoryCard'
import Vegan from './components/diet-types/Vegan';
import All from './components/diet-types/All';
import Paleo from './components/diet-types/Paleo';
import Keto from './components/diet-types/Keto';
import Medit from './components/diet-types/Medit';
import Nonveg from './components/diet-types/Nonveg';
import Veg from './components/diet-types/Veg';
import LowCarb from './components/diet-types/LowCarb';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div className="App">
            <Banner />
            <CategoryCard />
          </div>
        } />
        <Route path='/all' element={<All />} />
        <Route path='/veg' element={<Veg />} />
        <Route path='/nonveg' element={<Nonveg />} />
        <Route path='/vegan' element={<Vegan />} />
        <Route path='/keto' element={<Keto />} />
        <Route path='/paleo' element={<Paleo />} />
        <Route path='/medit' element={<Medit />} />
        <Route path='/lowcarb' element={<LowCarb />} />
      </Routes>
    </Router>
  );
}

export default App;
