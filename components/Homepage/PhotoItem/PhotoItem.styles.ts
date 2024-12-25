import { media } from '@/styles/breakpoints';
import styled from 'styled-components';

export const PhotoContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
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
  padding: 32px 16px;
  pointer-events: none;

  ${media.laptop} {
    position: relative;
    bottom: auto;
    padding: 0;
    pointer-events: auto;
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
