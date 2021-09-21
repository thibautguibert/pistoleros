import React, { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import PageContainer from './styles/PageContainer';
import PageTitle from './components/PageTitle';
import CardsMenu from './components/CardsMenu';
import { isMobile, maxWidth } from './styles/variables';
import { doorAnimation } from './styles/animations';

import saloonBackground from './assets/backgrounds/saloonBackground.jpg';
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

function App() {
  const [doors, setDoors] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const transitionToMenu = () => {
    setDoors(false);
    setTimeout(() => setShowMenu(true), 2500);
  };
  return (
    <PageContainer background={saloonBackground} bgOpacity={doors ? 0.25 : 0.75}>
      <PageTitle title="Pist leros" hasBarillet gunsPosition={showMenu ? 'centered' : undefined} />
      {showMenu ? (
        <CardsMenu />
      ) : (
        <DoorsContainer onClick={transitionToMenu}>
          <SaloonDoor src={saloonDoor} alt="saloon door" position="left" animation={!doors} />
          <SaloonDoor src={saloonDoor} alt="saloon door" position="right" animation={!doors} />
        </DoorsContainer>
      )}
    </PageContainer>
  );
}

export default App;
