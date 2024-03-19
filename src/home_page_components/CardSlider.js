import React from 'react';
import './CardSlider.css';

// Import all images from the images folder
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default function CardSlider() {
  return (
    <div className="card-slider">
      {data.map((d, index) => (
        <div className="Card" key={index}>
          <div className="Details">
            <div className="Img-details">
              <img src={images[d.img]} alt="" className="Image" />
            </div>
            <div>
              <p>{d.name}</p>
              <p>{d.description}</p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    name: 'HFA',
    img: 'HFA.png', // File names without the path
    description: 'HFA'
  },
  {
    name: 'MGNREGA',
    img: 'MGNREGA.jpeg',
    description: 'MGNREGA'
  },
  {
    name: 'JUMP',
    img: 'JUMP.png',
    description: 'JUMP'
  },
  {
    name: 'Aquifer',
    img: 'Aquifer.jpeg',
    description: 'Aquifer'
  },
  {
    name: 'Fasal',
    img: 'FASAL.png',
    description: 'Fasal'
  }
];
