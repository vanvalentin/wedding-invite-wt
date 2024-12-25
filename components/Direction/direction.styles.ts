import { media } from '@/styles/breakpoints';
import Link from 'next/link';
import { styled } from 'styled-components';

export const DirectionContainer = styled.div`
  width: calc(100% - 1rem);
  max-width: 800px;
  margin: 0 auto;
  padding: 0.5rem;

  ${media.laptop} {
    width: calc(100% - 4rem);
    padding: 2rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-family: var(--font-title), serif;
  font-size: 64px;
  font-weight: 300;
  padding: 1rem 0;
  margin: 0;

  ${media.laptop} {
    padding: 2rem 0;
  }
`;

export const Intro = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Date = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const SubDate = styled.h4`
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.8;
  padding: 0;
  margin: 0;
`;

export const LocationInfo = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

export const MapLink = styled(Link)`
  text-decoration: underline;
  color: unset;
  font-size: 0.8rem;
`;

export const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  & > *:last-child {
    grid-column: 1 / -1;
  }

  ${media.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;

    & > *:last-child {
      grid-column: auto;
    }
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const TimelineMain = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`;

export const TimelineSub = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.8;
`;

export const AttireInfo = styled.div`
  text-align: center;
  margin-top: 2rem;
  text-transform: uppercase;
`;
