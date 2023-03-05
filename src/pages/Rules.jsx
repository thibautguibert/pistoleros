import React from 'react';
import tw, { styled } from 'twin.macro';
import SectionTitle from '../components/SectionTitle';
import { smallDeviceThreshold } from '../styles/variables';

const RulesContainer = tw.div`relative w-full h-full flex flex-col py-4`;
const TextContainer = styled.p(() => [
  tw`text-xl text-center py-2 px-4`,
  `@media (max-width: ${smallDeviceThreshold[0]}px) and (max-height: ${smallDeviceThreshold[1]}px){
    padding: 0.125rem 0.5rem;
    font-size: 1.125rem;
  }`,
]);

function Rules() {
  return (
    <RulesContainer>
      <SectionTitle title="1. Deathmatch" width={80} />
      <TextContainer>
        &quot;Pistoleros&quot; is a 1 vs 1 game where the first player to die loses.
      </TextContainer>
      <SectionTitle title="2. Rock-Paper-Scissors mechanic" width={101} />
      <TextContainer>
        Every turn, a player has to choose between loading their gun, shooting or escaping a shot.
      </TextContainer>
    </RulesContainer>
  );
}

export default Rules;
