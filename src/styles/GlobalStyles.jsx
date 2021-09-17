import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased h-screen w-screen flex justify-center items-center bg-gray-100 lg:p-4`}
    font-family: 'Rye', cursive;
    color: ${theme`colors.paper`};
  }
  #root{
    ${tw`h-full w-full`}
    box-shadow: 0px 2px 10px rgba(0,0,0,0.75);
    background: ${theme`colors.dark`};
    max-height: ${theme`screens.lg`};
    max-width: ${theme`screens.md`};
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
