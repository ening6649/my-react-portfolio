import React from 'react';
import Card from './Card';

const myProject = {
  name: 'Run Buddy',
  description: 'HTML and CSS Front End website',
  image: './',
  link: 'github.'
};

export default function Project() {
  return (
    <div>
      <Card name={myProject.name} desc={myProject.description} image={myProject.image} link={myProject.link}/>
    </div>
  );
}
