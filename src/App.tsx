import React from 'react';
import { Outlet } from 'react-router-dom';
import { VersionApp } from './components/VersionApp';

const App = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">Rick and Morty - Fan Service !!!</h1>
      </div>
      <Outlet />
      <div className="absolute -bottom-20 right-10">
        <VersionApp />
      </div>
    </div>
  );
};

export default App;
