import { styled } from 'styled-components';
import { media } from '@/styles/breakpoints';

export const Form = styled.form`
  width: calc(100% - 3rem);
  margin: 4rem auto 2rem auto;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${media.laptop} {
    width: calc(100% - 4rem);
    margin: 4rem auto;
    padding: 2rem;
    max-width: 800px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #ce9360;
  padding: 0;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffcfcf;
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div``;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffcfcf;
`;

export const Sublabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #cfa9a9;
`;

export const Input = styled.input`
  width: calc(100% - 1.5rem);
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Textarea = styled.textarea`
  width: calc(100% - 1.5rem);
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
  font-size: 1rem;
  font-family: var(--font-body), sans-serif;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Button = styled.button`
  background: #1d1d1d;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  transition: all 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background: #3d3d3d;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
