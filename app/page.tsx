'use client';

import { Direction } from '@/components/Direction';
import { Homepage } from '@/components/Homepage';
import { RSVP } from '@/components/RSVP';
import { styled } from 'styled-components';

const MainContainer = styled.div`
  scroll-behavior: smooth;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <MainContainer>
      <Section id="home">
        <Homepage />
      </Section>

      <Section id="ceremony">
        <Direction />
      </Section>

      <Section id="contact">
        <RSVP />
      </Section>
    </MainContainer>
  );
}
