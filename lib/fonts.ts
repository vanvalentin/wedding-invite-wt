import { Montserrat, Imbue } from 'next/font/google';

export const imbue = Imbue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-title',
  weight: '400',
});

export const openSans = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const fontVariables = `${imbue.variable} ${openSans.variable}`;
