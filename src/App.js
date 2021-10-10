import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index.js';
import About from './components/About/index.js';
import Footer from './components/Footer/index.js';

import Project from './components/pageOverlays/Project/index.js';
import ContactForm from './components/Contact/index.js';



function App() {
  const [activeTab] = useState([
    {name: 'about Me'},
    { name: 'portfolio'},
    { name: 'resume'},
  ]);

  const [currentTab, setCurrentTab] = useState(activeTab[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>

      <Header
      activeTab={activeTab}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>

      <main>
      {!contactSelected ? (
          <>
            <Project currentTab={currentTab}></Project>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>


      <Footer></Footer>
      
    </div>
  );
}

export default App;
