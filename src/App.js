import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CategoryCard from './components/CategoryCard'
import TopPicks from './components/TopPicks'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CategoryCard />
      <TopPicks/>

    </div>
  );
}

export default App;
