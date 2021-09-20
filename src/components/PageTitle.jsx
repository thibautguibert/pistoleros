import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled, theme, css } from 'twin.macro';
import { maxWidth, rootWidth } from '../styles/variables';
import { titleAnimation, barilletAnimation, barilletRotationAnimation } from '../styles/animations';
import titlePaint from '../assets/svg/titlePaint.svg';
import barillet from '../assets/svg/barillet.svg';

const TitleContainer = tw.div`relative w-full flex flex-col items-center my-2`;
const TitlePaint = styled.img(() => [
  tw`w-full opacity-75`,
  css`max-width: ${maxWidth * 0.75}px;`,
]);
const Barillet = styled.img(() => [
  tw`absolute w-9 top-11`,
  css`
  left: 43%;
  animation-name: ${barilletAnimation}, ${barilletRotationAnimation} ;
  animation-duration: 3s, 7500ms;
  animation-delay: 0s, 3s;
  animation-iteration-count: 1, infinite;
  `,
]);
const Svg = styled.svg(() => [
  tw`absolute inset-0 md:my-8`,
  css`
    animation-name: ${titleAnimation} ;
    animation-duration: 3s;
    animation-iteration-count: 1;
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

const CurvedTitle = ({ title }) => (
  <Svg width={rootWidth} height={125 + rootWidth / 10} viewBox="0 0 300 10">
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

CurvedTitle.propTypes = { title: PropTypes.string };
CurvedTitle.defaultProps = { title: '' };

const PageTitle = ({ title }) => (
  <TitleContainer>
    <TitlePaint src={titlePaint} alt="" />
    <Barillet src={barillet} alt="" />
    <CurvedTitle title={title} />
  </TitleContainer>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  title: '',
};

export default PageTitle;
