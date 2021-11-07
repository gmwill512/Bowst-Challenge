import React from 'react';
import Card from '../components/Card';
import './home.css';
import { data } from '../data';

function Home() {
  return (
    <div className="home-container">
      <div className="paragraph-container">
        <h1>Making it right.</h1>
        <h3>
          We design, develop, and deliver experiences that are technically
          impressive and easy to use.
        </h3>
      </div>
      <div className="main-container">
        {data?.map((element) => (
          <Card
            key={element.title}
            Icon={element.icon}
            client={element.client}
            title={element.title}
            description={element.description}
            style={element.style}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
