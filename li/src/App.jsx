import React from 'react';
import Header from './components/Header'; // Adjust the import path if needed
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import ContactUs from './components/ContactUs';
const App = () => {
  return (
    <div className="bg-[rgb(51,65,85)] min-h-screen">
      <Header />
      <div className="container mx-auto p-6 mt-1"> {/* Adjusted margin-top to reduce space */}
        <Home />
        <About />
        <Projects/>
        <ContactUs/>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default App;
