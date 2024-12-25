'use client';

import Image from 'next/image';
import { ImageContainer, PhotoFrameContainer } from './PhotoFrame.styles';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function PhotoFrame({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Main frame animation
      const randomOffset = Math.random() * 2;

      gsap.to(containerRef.current, {
        y: '+=8',
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: randomOffset,
      });

      gsap.to(containerRef.current, {
        x: '+=5',
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: randomOffset + 0.5,
      });

      gsap.to(containerRef.current, {
        rotate: 0.8,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: randomOffset + 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <PhotoFrameContainer ref={containerRef}>
      <ImageContainer>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </ImageContainer>
    </PhotoFrameContainer>
  );
}
