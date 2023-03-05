import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CategoryCard from './components/CategoryCard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div>
        <CategoryCard />
      </div>
    </div>
  );
}

export default App;
