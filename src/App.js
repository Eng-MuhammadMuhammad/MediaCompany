import React from "react";


import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Articles from './components/Articles/Articles'
import Gallery from './components/Gallery/Gallery'
import Features from './components/Features/Features'
import Testimonials from './components/Testimonials/Testimonials'
import Team from './components/Team/Team'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import WorkSteps from './components/WorkSteps/WorkSteps'
import Events from './components/Events/Events'


function App() {
  return (
    <div>
      <Header/>
      <Landing/>
      <Articles/>
      <Gallery/>
      <Features/>
      <Testimonials/>
      <Team/>
      <Services/>
      <Skills/>
      <WorkSteps/>
      <Events/>
    </div>
  );
}

export default App;
