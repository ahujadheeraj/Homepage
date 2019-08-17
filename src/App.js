import React from 'react';
import Head from './components/Head/Head'
import Container from './components/Container/Container'
import Metric from './components/Metric/Metric'
import Services from './components/Services/Services'
import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      <Container />
      <Metric />
      <Services />
    </div>
  );
}

export default App;
