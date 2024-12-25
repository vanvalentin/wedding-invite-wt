'use client';

import Head from 'next/head';
import {
  Container,
  Header,
  Logo,
  Nav,
  LeftNav,
  RightNav,
  NavLink,
} from './client-layout.styles';
import { useEffect } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without causing a page reload
      window.history.pushState({}, '', `#${id}`);
    }
  };

  // Handle initial load with hash in URL
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Use a small timeout to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <Container>
      <Header>
        <Nav>
          <LeftNav>
            <Logo onClick={() => scrollToSection('home')}>Wini & Valentin</Logo>
          </LeftNav>
          <RightNav>
            <NavLink onClick={() => scrollToSection('ceremony')}>
              CEREMONY
            </NavLink>
            •
            <NavLink onClick={() => scrollToSection('contact')}>
              CONTACT
            </NavLink>
          </RightNav>
        </Nav>
      </Header>
      {children}
    </Container>
  );
}
