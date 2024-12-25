'use client';

import { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button,
  FormRow,
  Sublabel,
  Subtitle,
  Title,
  Message,
} from './rsvp.styles';

interface Guest {
  firstName: string;
  lastName: string;
}

export default function RSVP() {
  const [guest, setGuest] = useState<Guest>({ firstName: '', lastName: '' });
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleGuestChange = (field: keyof Guest, value: string) => {
    setGuest({ ...guest, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guest, notes }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form after successful submission
      setGuest({ firstName: '', lastName: '' });
      setNotes('');
      setMessage({
        type: 'success',
        text: 'Message sent successfully! We will get back to you soon.',
      });
    } catch (error) {
      console.error('Error:', error);
      setMessage({
        type: 'error',
        text: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Contact Us</Title>
      <Subtitle>
        If you have any questions or anything you would like to let us know, you
        can contact us directly or you can send us a message from here as well!
      </Subtitle>

      <FormRow>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Sublabel htmlFor="firstName">Prénom</Sublabel>
          <Input
            id="firstName"
            value={guest.firstName}
            onChange={(e) => handleGuestChange('firstName', e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Sublabel htmlFor="lastName">Nom</Sublabel>
          <Input
            id="lastName"
            value={guest.lastName}
            onChange={(e) => handleGuestChange('lastName', e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label htmlFor="notes">
          Questions, dietary restrictions or anything else :)
        </Label>
        <Sublabel htmlFor="notes">
          Questions, restrictions alimentaires ou autre :)
        </Sublabel>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Please let us know if you have any questions or dietary restrictions we should be aware of."
          required
        />
      </FormGroup>

      {message && <Message type={message.type}>{message.text}</Message>}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </Form>
  );
}
