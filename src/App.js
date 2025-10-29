import {React, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

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
      <Content setActiveTab={setActiveTab} activeTab={activeTab} /> 
    </div>
    );
}

export default App;
