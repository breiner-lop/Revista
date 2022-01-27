import styled, { keyframes } from 'styled-components';
import { bounceInLeft,wobble,pulse,slideInLeft} from 'react-animations';
 
const bounceInDownAnimation = keyframes`${bounceInLeft}`;
const wobbleAnimation = keyframes`${wobble}`;
const pulseAnimation = keyframes`${pulse}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
 
export const DivAnimated = styled.img`
  animation: 3s ${bounceInDownAnimation} 1;
`;
export const DivAnimatedLogo = styled.img`
  animation: 1s ${wobbleAnimation} 1;
  animation-delay: 0.6s;
`;
export const AnimatedPulse = styled.img`
  animation: 1s ${pulseAnimation} 1;
  animation-delay: 0.4s;
`;
export const AnimatedPulseBG = styled.div`
  animation: 10s ${pulseAnimation} 1;
`;
export const AnimatedSlideInLeft = styled.p`
  animation: 1s ${slideInLeftAnimation} 1;
`;