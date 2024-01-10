import React from 'react';

function Cards({ imgsrc, price, title, des, onClick }) {
  return (
    <div className="flexcard" onClick={() => onClick({ title, description: des, price })}>
      <img src={imgsrc} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-0">{des}</p>
        <p className='card-price mt-0'>${price}</p>
      </div>
    </div>
  );
}

export default Cards;