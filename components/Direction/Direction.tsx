'use client';

import {
  DirectionContainer,
  Title,
  LocationInfo,
  DateWrapper,
  Date,
  SubDate,
  Intro,
  MapLink,
  Timeline,
  TimelineItem,
  TimelineMain,
  TimelineSub,
  AttireInfo,
} from './direction.styles';

export default function Ceremony() {
  return (
    <DirectionContainer>
      <Title>Ceremony</Title>

      <Intro>
        <p>
          We are so excited to have you join us for our wedding ceremony.
          <br /> The ceremony and banquet will happen in Hong Kong, see all the
          details below!
        </p>
      </Intro>

      <DateWrapper>
        <Date>Saturday, 1st March 2025</Date>
        <SubDate>2025 年 3 月 1 號星期六</SubDate>
        <SubDate>Samedi 1er Mars 2025</SubDate>
      </DateWrapper>

      <LocationInfo>
        <Date>Ming Court - Cordis Hotel</Date>
        <SubDate>Level 6, 555 Shanghai Street, Mong Kok, Kowloon</SubDate>
        <SubDate>Hong Kong (next to Langham Place)</SubDate>
        <MapLink
          href="https://maps.app.goo.gl/1oDfwWGjKJSdjfvbA"
          target="_blank"
        >
          See on Google Maps
        </MapLink>
      </LocationInfo>

      <Timeline>
        <TimelineItem>
          <TimelineMain>Reception at 6PM</TimelineMain>
          <TimelineSub>下午六點接待</TimelineSub>
          <TimelineSub>Accueil à 18h</TimelineSub>
        </TimelineItem>
        <TimelineItem>
          <TimelineMain>Ceremony at 6:30PM</TimelineMain>
          <TimelineSub>儀式喺下晝六點半</TimelineSub>
          <TimelineSub>Cérémonie à 18h30</TimelineSub>
        </TimelineItem>
        <TimelineItem>
          <TimelineMain>Banquet at 8PM</TimelineMain>
          <TimelineSub>晚上八點嘅宴會</TimelineSub>
          <TimelineSub>Dîner à 20h</TimelineSub>
        </TimelineItem>
      </Timeline>

      <AttireInfo>Smart casual / Semi-formal attire</AttireInfo>
    </DirectionContainer>
  );
}
