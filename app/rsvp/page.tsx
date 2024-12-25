'use client'

import { useState } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button
} from '../../components/styled'

interface Guest {
  firstName: string
  lastName: string
}

export default function RSVP() {
  const [guests, setGuests] = useState<Guest[]>([{ firstName: '', lastName: '' }])
  const [notes, setNotes] = useState('')

  const handleAddGuest = () => {
    setGuests([...guests, { firstName: '', lastName: '' }])
  }

  const handleGuestChange = (index: number, field: keyof Guest, value: string) => {
    const newGuests = [...guests]
    newGuests[index][field] = value
    setGuests(newGuests)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ guests, notes })
  }

  return (
    <>

      <Form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-light mb-8 text-center">RSVP</h1>
        
        {guests.map((guest, index) => (
          <FormGroup key={index}>
            <h2 className="text-xl mb-4">Guest {index + 1}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`firstName-${index}`}>First Name</Label>
                <Input
                  id={`firstName-${index}`}
                  value={guest.firstName}
                  onChange={(e) => handleGuestChange(index, 'firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor={`lastName-${index}`}>Last Name</Label>
                <Input
                  id={`lastName-${index}`}
                  value={guest.lastName}
                  onChange={(e) => handleGuestChange(index, 'lastName', e.target.value)}
                  required
                />
              </div>
            </div>
          </FormGroup>
        ))}

        <Button type="button" onClick={handleAddGuest} className="mb-6">
          Add Guest
        </Button>

        <FormGroup>
          <Label htmlFor="notes">Notes (Dietary Restrictions, Questions, etc.)</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </FormGroup>

        <Button type="submit">Submit RSVP</Button>
      </Form>
    </>
  )
}

