
import React from 'react';
import Home from './Home';
import Content from './Content';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Home />
      <div style={{ height: '1000px' }}> {
        <Content/>
        
      }
      <Service/>
      <Contact/>    
      <Footer/>
         
      </div>
    </div>
  );
};

export default App;

