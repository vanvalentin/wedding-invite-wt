import { media } from '@/styles/breakpoints';
import styled from 'styled-components';

export const PhotoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const PhotoFrameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 50px;
  margin-bottom: 1rem;

  ${media.tablet} {
    height: 800px;
  }

  ${media.laptop} {
    height: 65svh;
    max-height: 600px;
    border-radius: 140px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.45) 80%
    );
    pointer-events: none;
  }

  ${media.laptop} {
    border-radius: 140px;

    &::after {
      display: none;
    }
  }
`;

export const PhotoInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  ${media.laptop} {
    position: relative;
  }
`;

export const DateText = styled.div`
  font-size: 0.9rem;
  color: #ffcfcf;
`;

export const EventTitle = styled.h2`
  font-family: var(--font-title), serif;
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0;
  margin: 0;
`;
