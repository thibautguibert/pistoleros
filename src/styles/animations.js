import { keyframes } from 'styled-components';

export const titleAnimation = keyframes`
  0% { height: 100px; width: 100px }
  100% { height: 200px; width: 200px }
`;

export const barilletAnimation = keyframes`
  0% {margin-top: -50% }
  90% {margin-top: 5% }
  100% {margin-top: 0% }
`;

export const barilletRotationAnimation = keyframes`
  0% { transform: rotate('5deg) }
  8% { transform: rotate(75deg) }
  10% {transform: rotate(60deg) }
  24% { transform: rotate(135deg) }
  26% {transform: rotate(120deg) }
  40% { transform: rotate(195deg) }
  42% {transform: rotate(180deg) }
  56% { transform: rotate(255deg) }
  58% {transform: rotate(240deg) }
  72% { transform: rotate(315deg) }
  74% {transform: rotate(300deg) }
  88% { transform: rotate(375deg) }
  90% {transform: rotate(360deg) }
`;
