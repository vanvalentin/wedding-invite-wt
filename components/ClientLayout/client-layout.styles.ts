import { media } from '@/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;

  ${media.laptop} {
    padding: 0 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  ${media.laptop} {
    height: 72px;
  }
`;

export const Logo = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: var(--font-title), serif;
  letter-spacing: 1px;
  text-decoration: none;
  color: #ce9360;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  ${media.laptop} {
    font-size: 1.8rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const RightNav = styled.div`
  display: flex;
  gap: 1rem;
  color: #ffcfcf;
  align-items: center;

  ${media.laptop} {
    gap: 2rem;
  }
`;

export const NavLink = styled.button`
  text-decoration: none;
  color: #ffcfcf;
  text-transform: uppercase;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: inherit;
  font-size: 0.8rem;

  &:hover {
    color: #e6b488;
  }

  ${media.laptop} {
    font-size: 1rem;
  }
`;
