'use client';

import { styled } from 'styled-components';

const DirectionContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const LocationInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 2rem;
`;

export default function Direction() {
  return (
    <DirectionContainer>
      <Title>Location & Directions</Title>

      <LocationInfo>
        <h2>Wedding Venue</h2>
        <p>Venue Name</p>
        <p>Address Line 1</p>
        <p>Address Line 2</p>
      </LocationInfo>

      <MapContainer>
        {/* Add Google Maps or other map integration here */}
        <p style={{ padding: '1rem', textAlign: 'center' }}>
          Map will be integrated here
        </p>
      </MapContainer>
    </DirectionContainer>
  );
}
