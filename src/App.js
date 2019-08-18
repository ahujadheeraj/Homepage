import React from 'react';
import Head from './components/Head/Head'
import Container from './components/Container/Container'
import Metric from './components/Metric/Metric'
import Services from './components/Services/Services'
import Accelerated from './components/Accelerated/Accelerated'
import Section from './components/Section/Section'
import Reliability from './components/Reliability/Reliability'
import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      <Container />
      <Metric />
      <Reliability />
      <Services />
      <Accelerated/>
      <Section />
    </div>
  );
}

export default App;
