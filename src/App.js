import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectCardImage from './components/ProjectCard/ProjectCardImage';
import ProjectCardTitle from './components/ProjectCard/ProjectCardTitle';

function App() {
  return (
    <>
      <Header />
      <ProjectCard>
        <ProjectCardImage src="../../" alt="image" />
        <ProjectCardTitle>title</ProjectCardTitle>
      </ProjectCard>
    </>
  );
}

export default App;
