import './App.css';
import Features from './components/Features';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Works from './components/Works';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Works/>
      <Service/>
      <Features/>
      <Pricing/>
    </div>
  );
}

export default App;
