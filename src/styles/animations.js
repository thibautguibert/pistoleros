import { keyframes } from 'styled-components';

export const titleAnimation = keyframes`
  0% { transform: translate(-100%) }
  10% { transform: translate(-100%) }
  25% { transform: translate(10%) scaleX(1.2); }
  50% { transform: translate(-25%) scaleX(0.3); }
  70% { transform: translate(5%) scaleX(1.1); }
  85% { transform: translate(-5%) scaleX(0.85); }
  95% { transform: translate(1%) }
  100% { transform: translate(0%) }
`;

export const barilletAnimation = keyframes`
  0% {margin-top: -50% }
  50% {margin-top: 5% }
  100% {margin-top: 0% }
`;

export const barilletRotationAnimation = keyframes`
  0% { transform: rotate(0deg) }
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
