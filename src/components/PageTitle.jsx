import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled, theme, css } from 'twin.macro';
import { maxWidth, rootWidth } from '../styles/variables';
import {
  titleAnimation, barilletAnimation, barilletRotationAnimation, gunsToCenterAnimation, gunsToSpaceAroundAnimation,
} from '../styles/animations';
import titlePaint from '../assets/svg/titlePaint.svg';
import barillet from '../assets/svg/barillet.svg';
import leftGun from '../assets/leftGun.png';
import rightGun from '../assets/rightGun.png';

const TitleContainer = tw.div`relative w-full flex flex-col items-center my-2`;
const TitlePaint = styled.img(() => [
  tw`w-full opacity-75`,
  css`max-width: ${maxWidth * 0.75}px;`,
]);

const Barillet = styled.img(() => [
  tw`absolute w-8 top-12 md:w-12 md:top-20`,
  css`
  left: 43%;
  animation-name: ${barilletAnimation}, ${barilletRotationAnimation} ;
  animation-duration: 3s, 7500ms;
  animation-delay: 0s, 3s;
  animation-iteration-count: 1, infinite;
  @media (min-width: ${maxWidth}px){ left: 45%; }
  @media (max-width: 359px){ width: 1.75rem; }
  `,
]);

const Svg = styled.svg(({ animation }) => [
  tw`absolute inset-0 md:my-8`,
  css`
    animation-name: ${animation ? titleAnimation : ''} ;
    animation-duration: 2500ms;
  `,
]);
const SvgText = styled.text`
  fill: ${theme`colors.paper`};
  font-size: 36px;
  letter-spacing: 1px;
  @media (min-width: 600px) {
    font-size: 28px;
  }
`;

const GunsContainer = styled.div(({ gunsPosition }) => [
  tw`relative w-full flex justify-between`,
  css`
    padding: ${gunsPosition === 'centered' ? '0 8px' : '0'};
    margin-top: ${gunsPosition === 'centered' ? '-60px' : '-120px'};
    max-width: ${maxWidth * (gunsPosition === 'centered' ? 0.75 : 0.9)}px;
    `,
]);
const Gun = styled.img(({ position, gunsPosition }) => {
  const rotation = gunsPosition === 'centered' ? 16 : 66;
  const animation = () => {
    if (gunsPosition === 'centered') return gunsToCenterAnimation(position);
    if (gunsPosition === 'space-around') return gunsToSpaceAroundAnimation(position);
    return '';
  };
  return (
    css`
    width: 130px;
    transform: rotate(${position === 'right' ? rotation : -1 * rotation}deg);
    animation-name: ${animation()} ;
    animation-duration: 1500ms;
  @media (min-width: ${maxWidth}px){
    width: 180px;
    margin-top: -20px;
  }`
  );
});

const CurvedTitle = ({ title, animation }) => (
  <Svg width={rootWidth} height={125 + rootWidth / 10} viewBox="0 0 300 10" animation={animation}>
    <path
      id="curve"
      fill="transparent"
      d="M1.70334 101C1.70334 48.6867 73.9199 1.59689 154.963 1.59689C236.005 1.59689 307.703 48.6867 307.703 101"
    />
    <SvgText>
      <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
        {title}
      </textPath>
    </SvgText>
  </Svg>
);

CurvedTitle.propTypes = { title: PropTypes.string, animation: PropTypes.bool };
CurvedTitle.defaultProps = { title: '', animation: false };

const PageTitle = ({ title, hasBarillet, gunsPosition }) => (
  <TitleContainer>
    <TitlePaint src={titlePaint} alt="" />
    {hasBarillet && <Barillet src={barillet} alt="" />}
    <CurvedTitle title={title} animation={hasBarillet} />
    {gunsPosition && (
      <GunsContainer gunsPosition={gunsPosition}>
        <Gun position="left" gunsPosition={gunsPosition} src={leftGun} alt="" />
        <Gun position="right" gunsPosition={gunsPosition} src={rightGun} alt="" />
      </GunsContainer>
    )}
  </TitleContainer>
);

PageTitle.propTypes = {
  title: PropTypes.string,
  hasBarillet: PropTypes.bool,
  gunsPosition: PropTypes.string,
};

PageTitle.defaultProps = {
  title: '',
  hasBarillet: false,
  gunsPosition: undefined,
};

export default PageTitle;
