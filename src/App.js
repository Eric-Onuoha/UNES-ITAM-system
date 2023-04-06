import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainMenu from './components/mainMenu/mainMenu.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainMenu/>} />
      </Routes>
    </div>
  );
}

export default App;
