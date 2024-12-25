import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const HomepageContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 16px;

  ${media.laptop} {
    padding: 24px;
    height: calc(100svh - 142px);
    max-height: 700px;
  }
`;

export const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 24px;
  z-index: 1;

  ${media.tablet} {
    width: 100%;
  }

  ${media.laptop} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    width: 25%;
    top: 0;
    height: calc(100% - 48px);
    padding: 24px 0;
    margin: 0;
  }

  ${media.desktop} {
    width: 20%;
  }
`;

export const PhotoGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 280px;
  z-index: -1;

  ${media.tablet} {
    position: relative;
  }

  ${media.laptop} {
    margin-top: 0;
    position: absolute;
    width: calc(75% - 48px);
    left: 25%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
    justify-content: center;
    gap: 32px;
    padding: 0 24px;
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, 280px);
    justify-content: space-between;
    width: calc(80% - 96px);
    left: 20%;
    padding: 0 48px;
    gap: 42px;
  }
`;
