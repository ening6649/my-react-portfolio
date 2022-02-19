import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

export default function Project() {
  return (
    <div>
      <Card name={canine.name} desc={canine.description} id={canine.id}/>
        // render a Card component 
        // Pass to the Card component as props
    </div>
  );
}
