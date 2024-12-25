'use client';

import { CircularTextContainer } from './CircularText.styles';
import Link from 'next/link';
import { useState } from 'react';

export default function CircularText() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/rsvp">
      <CircularTextContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <path
              id="circle"
              d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
            />
          </defs>
          <circle
            cx="50"
            cy="50"
            r="25"
            style={{ fill: '#ffcfcf', opacity: 0.15 }}
          />
          <circle
            cx="50"
            cy="50"
            r={isHovered ? '3' : '2'}
            style={{
              fill: '#de9b5f',
              transition: 'r 0.2s ease-in-out',
            }}
          />
          <text
            style={{
              fill: '#ffcfcf',
              fontSize: '12px',
              letterSpacing: '4px',
              fontFamily: 'var(--font-title), serif',
              textTransform: 'uppercase',
              fontWeight: 300,
            }}
          >
            <textPath href="#circle" startOffset="0">
              You are invited
            </textPath>
          </text>
        </svg>
      </CircularTextContainer>
    </Link>
  );
}
