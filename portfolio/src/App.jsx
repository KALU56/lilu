import { useState } from 'react';
import './App.css';
import Header from './pages/Header/'; // Adjust the path based on where Header.jsx is located
import Container from './pages/Container/'; // Adjust the path based on where Container.jsx is located

function App() {
  return (
    <>
   
      {/* Background Div */}
     

      {/* Header Component */}
      <Header />

      {/* Your main content */}
      <Container />
    

   
    </>
  );
}

export default App;
