import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import About from './components/About/index.js';
import Footer from './components/Footer/index.js';
import Project from './components/Project/index.js';
import ContactForm from './components/Contact/index.js';



function App() {
  const [activeTab] = useState([
    {name: 'about Me'},
    { name: 'portfolio'},
    { name: 'resume'},
    { name: 'contact'},
  ]);

  const [currentTab, setCurrentTab] = useState(activeTab[0]);
  return (
    <div>

      <Header
      activeTab={activeTab}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      ></Header>

      <main>
{/* {!currentTab ? (
  <>

  </>
)

} */}




      <About></About>
      <Project currentTab={currentTab}></Project>
      <ContactForm></ContactForm>

      </main>


      <Footer></Footer>
      
    </div>
  );
}

export default App;
