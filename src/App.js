import {React, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const TABS = {
    home: 0,
    experience: 1,
    contact: 2
}
  const [activeTab, setActiveTab] = useState(TABS.home);
  
  return (
    <div className="app__container">
      <Navbar setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
      <Footer/>
    </div>
    );
}

export default App;
