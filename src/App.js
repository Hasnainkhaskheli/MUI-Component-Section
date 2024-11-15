import './App.css';
import HeroSection from './component/HeroSection/HeroSection';
import NavBar from './component/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <NavBar />
    </div>
  );
}

export default App;
