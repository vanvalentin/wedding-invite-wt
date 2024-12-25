import { media } from '@/styles/breakpoints';
import styled from 'styled-components';

export const CircularTextContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 120px;
  height: 120px;
  animation: rotate 20s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${media.laptop} {
    position: relative;
    width: 140px;
    height: 140px;
  }
`;

export const StyledPath = styled.path`
  fill: none;
  stroke: #ffcfcf;
`;
