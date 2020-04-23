import React from 'react';
import Card from './Card.js';

const Board = ({ cards }) => {
  const cardComponent = cards.map((user, i) => {
    return (
      <Card
        key={i}
        id={cards[i].id}
        src={cards[i].src} />
    );
  })
  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default Board;
