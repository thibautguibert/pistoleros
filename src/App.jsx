import React, { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import PageContainer from './styles/PageContainer';
import PageTitle from './components/PageTitle';
import CardsMenu from './components/CardsMenu';
import Rules from './pages/Rules';
import { isMobile, maxWidth } from './styles/variables';
import { doorAnimation } from './styles/animations';

import saloonBackground from './assets/backgrounds/saloonBackground.jpg';
import playBackground from './assets/backgrounds/playBackground.jpg';
import rulesBackground from './assets/backgrounds/rulesBackground.jpg';
import gameBackground from './assets/backgrounds/gameBackground.jpg';
import saloonDoor from './assets/saloonDoor.png';

const DoorsContainer = tw.div`relative h-full w-full flex items-center justify-between`;
const launchDoorAnimation = (position, launchAnimation) => {
  if (!launchAnimation) return '';
  return doorAnimation(position, isMobile);
};
const SaloonDoor = styled.img(({ position, animation }) => ([
  `height: 330px;
  max-width: calc(50% + 46px);
  margin-${position}: -46px;
  @media (min-width: ${maxWidth}px){
    height: 550px;
    max-width: calc(50% + 78px);
    margin-${position}: -78px;
  }
  ${position === 'right' ? 'transform: scaleX(-1);' : ''}`,
  css`
    animation-name: ${launchDoorAnimation(position, animation)};
    animation-duration: 2500ms;
  `,
]));

const pageData = {
  home: {
    background: saloonBackground,
    title: 'Pist leros',
    hasBarillet: true,
    gunsPosition: undefined,
  },
  menu: {
    background: saloonBackground,
    title: 'Pist leros',
    hasBarillet: true,
    gunsPosition: 'centered',
  },
  play: {
    background: playBackground,
    title: 'Play',
    hasBarillet: false,
    gunsPosition: 'space-around',
  },
  rules: {
    background: rulesBackground,
    title: 'Rules',
    hasBarillet: false,
    gunsPosition: 'space-around',
  },
  leaderboard: {
    background: gameBackground,
    title: 'Scores',
    hasBarillet: false,
    gunsPosition: 'space-around',
  },
};

function App() {
  const [doorsAnimation, setDoorsAnimation] = useState(false);
  const [page, setPage] = useState('home');
  const transitionToMenu = () => {
    setDoorsAnimation(true);
    setTimeout(() => setPage('menu'), 2500);
  };
  return (
    <PageContainer background={pageData[page].background} bgOpacity={doorsAnimation ? 0.75 : 0.25}>
      <PageTitle
        title={pageData[page].title}
        hasBarillet={pageData[page].hasBarillet}
        gunsPosition={pageData[page].gunsPosition}
      />
      {page === 'home' && (
        <DoorsContainer onClick={transitionToMenu}>
          <SaloonDoor src={saloonDoor} alt="saloon door" position="left" animation={doorsAnimation} />
          <SaloonDoor src={saloonDoor} alt="saloon door" position="right" animation={doorsAnimation} />
        </DoorsContainer>
      )}
      {page === 'menu' && <CardsMenu setPage={setPage} />}
      {page === 'rules' && <Rules />}
    </PageContainer>
  );
}

export default App;
