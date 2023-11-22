import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { TheHeader } from './components/TheHeader';
import { TheFooter } from './components/TheFooter';
import { routes } from './types';

const App: React.FC = () =>{
  return (
    <div>
      <TheHeader />
      <Routes>
        {routes.map( route => <Route key={route.path} path={route.path} element={<route.component />} />)}
      </Routes>
      <TheFooter />
    </div>
  );
}

export default App;
