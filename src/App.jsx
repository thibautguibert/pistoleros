import React, { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { useHistory } from 'react-router-dom';
import PageContainer from './styles/PageContainer';
import PageTitle from './components/PageTitle';
import { doorAnimation } from './styles/animations';

import saloonBackground from './assets/backgrounds/saloonBackground.jpg';
import saloonDoor from './assets/saloonDoor.png';
import { isMobile, maxWidth } from './styles/variables';

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
  const [animation, setAnimation] = useState(false);
  const history = useHistory();
  const goToHomePage = () => {
    setAnimation(true);
    setTimeout(() => history.push('/homepage'), 2000);
  };
  return (
    <PageContainer background={saloonBackground} bgOpacity={0.5}>
      <PageTitle title="Pist leros" hasBarillet />
      <DoorsContainer onClick={goToHomePage}>
        <SaloonDoor src={saloonDoor} alt="saloon door" position="left" animation={animation} />
        <SaloonDoor src={saloonDoor} alt="saloon door" position="right" animation={animation} />
      </DoorsContainer>
    </PageContainer>
  );
}

export default App;
