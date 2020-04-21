import React from 'react';

const Card = (props) => {
  return (
    <div>
      <img alt="card" src={props.img_src} />
    </div>
  );
}

export default Card;
