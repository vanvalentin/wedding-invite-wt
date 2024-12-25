'use client';

import { Homepage } from '@/components/Homepage';
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

      {/* <Section id="rsvp">
        <RSVP />
      </Section>

      <Section id="direction">
        <Direction />
      </Section> */}
    </MainContainer>
  );
}
