import React from 'react';


export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };


// Update the return statement to display the data we received as props
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.image}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.desc}</p>
          <a href="#" className="btn btn-primary">
            Adopt {props.link}
          </a>
        </div>
      </div>
    </div>
  );
}
