'use client';

import { HomepageContainer, PhotoGrid, TitleWrapper } from './homepage.styles';
import MainTitle from './MainTitle';
import PhotoItem from './PhotoItem';
import CircularText from './CircularText';

export default function Homepage() {
  const events = [
    {
      id: 1,
      date: '9th of April 2021',
      title: 'THE DAY WE MET',
      image: '/images/wt_meeting.webp',
    },
    {
      id: 2,
      date: '24th of April 2021',
      title: 'THE PRELUDE',
      image: '/images/wt_together.webp',
    },
    {
      id: 3,
      date: '1st of March 2025',
      title: 'THE NEXT JOURNEY',
      image: '/images/wt_wedding.webp',
    },
  ];

  return (
    <HomepageContainer>
      <TitleWrapper>
        <MainTitle />
        <CircularText />
      </TitleWrapper>

      <PhotoGrid>
        {events.map((event) => (
          <PhotoItem key={event.id} {...event} />
        ))}
      </PhotoGrid>
    </HomepageContainer>
  );
}
