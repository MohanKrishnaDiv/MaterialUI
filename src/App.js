import './App.css';
import Customers from './components/Customers';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Works from './components/Works';
import { createContext, useState } from 'react';
  
export const ThemeContexts = createContext()

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>{
    setTheme((val) => (val === 'light' ? 'dark' : 'light'));
    console.log('hi',theme)
  }

  return (
    <ThemeContexts.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>    
      <Header/>
      <Home/>
      <Works/>
      <Service/>
      <Features/>
      <Pricing/>
      <Customers/>
      <Footer/>
    </div>
    </ThemeContexts.Provider>
  );
}

export default App;
