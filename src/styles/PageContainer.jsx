import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled, css } from 'twin.macro';
import topRightPaint from '../assets/svg/topRightPaint.svg';
import saloonBackground from '../assets/backgrounds/saloonBackground.jpg';

const TopRightPaint = tw.img`absolute top-0 right-0 w-5/12 opacity-60`;

const PageContainerStyle = styled.div(({ background, bgOpacity }) => [
  tw`h-full w-full flex flex-col items-center relative overflow-hidden`,
  css`&:before {
        content: "";
        background: center / cover url(${background || saloonBackground});
        position: absolute;
        inset: 0;
        opacity: ${bgOpacity};
        transition: opacity 2500ms;
    }`,
]);

const PageContainer = ({ children, background, bgOpacity }) => (
  <PageContainerStyle background={background} bgOpacity={bgOpacity}>
    <TopRightPaint src={topRightPaint} alt="" />
    {children}
  </PageContainerStyle>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  bgOpacity: PropTypes.number,
};

PageContainer.defaultProps = {
  background: undefined,
  bgOpacity: 0.75,
};

export default PageContainer;
