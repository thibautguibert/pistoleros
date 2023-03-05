import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled, css } from 'twin.macro';
import sectionPaint from '../assets/svg/sectionPaint.png';

const TitleContainer = tw.div`relative w-full py-6 my-4`;
const Title = styled.h2(() => [
  tw`relative px-4 z-10`,
  css`font-size: 1.75rem; line-height: 35px;`,
]);
const Paint = styled.img(({ width = 100 }) => [
  tw`absolute top-0 opacity-75`,
  css`width: ${width}%;
  margin-top: -${width <= 100 ? width - 65 : 20}px;
  ${width > 100 ? 'height: 125%' : ''}`,
]);

function SectionTitle({ title, width }) {
  return (
    <TitleContainer>
      <Paint src={sectionPaint} alt="" width={width} />
      <Title>{title}</Title>
    </TitleContainer>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default SectionTitle;
