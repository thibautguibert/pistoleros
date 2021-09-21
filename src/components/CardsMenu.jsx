import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tw, { styled, css, theme } from 'twin.macro';
import crosshair from '../assets/svg/crosshairCursor.svg';
import bulletHole from '../assets/svg/bulletHole.png';

const CardsContainer = tw.div`relative h-full w-full flex items-center justify-center`;
const CardStyle = styled.div(({
  zIndex = 10, yIndex = 0, rotation = 0, scale = 1,
}) => [
  tw`relative flex flex-col justify-between`,
  css`
    background-image: ${theme`colors.gradient`};
    height: 190px;
    width: 125px;
    border-radius: 8px;
    margin-right: -8px;
    margin-left: -8px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.33);
    z-index: ${zIndex};
    transform: rotate(${rotation}deg) translateY(${yIndex}px) scale(${scale});
    transition: all 500ms;
    cursor: url(${crosshair}), crosshair;
  `,
]);
const BulletHole = styled.img(({ x, y }) => (`
  position: fixed;
  z-index: 65;
  height: 30px;
  width: 30px;
  left: ${x}px;
  top: ${y}px;
`));

const cardsData = {
  play: {
    zIndex: 30, yIndex: 30, rotation: -12, scale: 1.025, title: 'Play', color: 'clubs',
  },
  rules: {
    zIndex: 20, yIndex: 0, rotation: 2, scale: 1, title: 'Rules', color: 'hearts',
  },
  bestScores: {
    zIndex: 10, yIndex: 50, rotation: 12, scale: 0.975, title: 'Best Scores', color: 'spades',
  },
};

const Card = ({ cardName, setBulletPosition }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoveredData = { zIndex: isHovered ? 30 : 0, yIndex: isHovered ? -20 : 0, scale: isHovered ? 0.2 : 0 };
  return (
    <CardStyle
      zIndex={cardsData[cardName].zIndex + hoveredData.zIndex}
      yIndex={cardsData[cardName].yIndex + hoveredData.yIndex}
      rotation={cardsData[cardName].rotation}
      scale={cardsData[cardName].scale + hoveredData.scale}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        setBulletPosition({ x: e.clientX, y: e.clientY });
      }}
    >
      {cardsData[cardName].title}
    </CardStyle>
  );
};

const CardsMenu = () => {
  const [bulletPosition, setBulletPosition] = useState({ x: -35, y: -35 });
  return (
    <CardsContainer>
      <Card cardName="play" setBulletPosition={setBulletPosition} />
      <Card cardName="rules" setBulletPosition={setBulletPosition} />
      <Card cardName="bestScores" setBulletPosition={setBulletPosition} />
      <BulletHole src={bulletHole} alt="bullet hole" x={bulletPosition.x} y={bulletPosition.y} />
    </CardsContainer>
  );
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  setBulletPosition: PropTypes.func.isRequired,
};

export default CardsMenu;
