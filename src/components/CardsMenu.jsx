import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tw, { styled, css, theme } from 'twin.macro';
import { maxWidth } from '../styles/variables';
import { cardClickedAnimation, cardMenuAnimation } from '../styles/animations';

import crosshair from '../assets/svg/crosshairCursor.svg';
import bulletHole from '../assets/svg/bulletHole.png';
import clubs from '../assets/svg/clubs.svg';
import hearts from '../assets/svg/hearts.svg';
import spades from '../assets/svg/spades.svg';

const CardsContainer = styled.div(() => [
  tw`relative h-full w-full flex items-center justify-center`,
  css`
    animation-name: ${cardMenuAnimation} ;
    animation-duration: 1500ms;
  `,
]);
const CardStyle = styled.div(({
  zIndex = 10, yIndex = 0, rotation = 0, scale = 1, clicked,
}) => [
  tw`relative flex flex-col justify-center items-center`,
  css`
    background-color: ${theme`colors.paper`};
    background-image: ${theme`colors.gradient`};
    height: 190px; width: 125px;
    font-size: 28px;
    border-radius: 8px;
    margin-right: -8px;
    margin-left: -8px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.33);
    z-index: ${zIndex};
    transform: rotate(${rotation}deg) translateY(${yIndex}px) scale(${scale});
    transition: all 500ms;
    cursor: ${clicked ? 'none' : `url(${crosshair}), crosshair`};
    animation-name: ${clicked ? cardClickedAnimation(rotation) : ''} ;
    animation-duration: 2800ms;
    @media (min-width: ${maxWidth}px){
      height: 228px; width: 150px;
      font-size: 34px;
    }`,
]);

const CardColor = styled.img(({ position }) => (`
  position: absolute;
  height: 30px;
  ${position === 'top' ? 'top: 8px; left: 6px;' : 'bottom: 8px; right: 6px; transform: rotateX(180deg);'}
`));

const CardTitle = styled.h2(({ color }) => (`
  max-width: 80%;
  text-align: center;
  color: ${color !== 'hearts' ? theme`colors.dark` : theme`colors.hearts`};
`));

const BulletHole = styled.img(({ x, y, clicked }) => (
  css`
  position: fixed;
  z-index: 75;
  height: 30px; width: 30px;
  left: ${x}px; top: ${y}px;
  animation-name: ${clicked ? cardClickedAnimation(0, true) : ''} ;
  animation-duration: 2800ms;
`));

const cardsData = {
  play: {
    zIndex: 30, yIndex: 30, rotation: -12, scale: 1.025, title: 'Play', color: 'clubs', cardColor: clubs, page: 'play',
  },
  rules: {
    zIndex: 20, yIndex: 0, rotation: 2, scale: 1, title: 'Rules', color: 'hearts', cardColor: hearts, page: 'rules',
  },
  bestScores: {
    zIndex: 10, yIndex: 50, rotation: 12, scale: 0.975, title: 'Best Scores', color: 'spades', cardColor: spades, page: 'leaderboard',
  },
};

function Card({ cardName, setPage, setBulletPosition }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const hoveredData = { zIndex: isHovered ? 30 : 0, yIndex: isHovered ? -20 : 0, scale: isHovered ? 0.2 : 0 };
  return (
    <CardStyle
      zIndex={cardsData[cardName].zIndex + hoveredData.zIndex}
      yIndex={cardsData[cardName].yIndex + hoveredData.yIndex}
      rotation={cardsData[cardName].rotation}
      scale={cardsData[cardName].scale + hoveredData.scale}
      clicked={isClicked}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        setBulletPosition({ x: e.clientX, y: e.clientY });
        setIsClicked(!isClicked);
        setTimeout(() => setPage(cardsData[cardName].page), 2800);
      }}
    >
      <CardColor src={cardsData[cardName].cardColor} position="top" alt="" />
      <CardTitle color={cardsData[cardName].color}>{cardsData[cardName].title}</CardTitle>
      <CardColor src={cardsData[cardName].cardColor} position="bottom" alt="" />
    </CardStyle>
  );
}

function CardsMenu({ setPage }) {
  const [bulletPosition, setBulletPosition] = useState({ x: -35, y: -35 });
  return (
    <CardsContainer>
      <Card cardName="play" setBulletPosition={setBulletPosition} setPage={setPage} />
      <Card cardName="rules" setBulletPosition={setBulletPosition} setPage={setPage} />
      <Card cardName="bestScores" setBulletPosition={setBulletPosition} setPage={setPage} />
      <BulletHole
        src={bulletHole}
        alt="bullet hole"
        x={bulletPosition.x}
        y={bulletPosition.y}
        clicked={bulletPosition.x > 0}
      />
    </CardsContainer>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  setBulletPosition: PropTypes.func.isRequired,
};

CardsMenu.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default CardsMenu;
