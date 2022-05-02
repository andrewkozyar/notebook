import React from 'react'
import './AddNote.css'

export default function AddNote({ addNote, openModal }) {
  const [value, setValue] = React.useState()

  const submitHandler = (event) => {
    event.preventDefault()

    if (value.trim) {
      addNote(value)
      openModal()
    }
  }

  return (
    <form className='createModelForm' onSubmit={submitHandler}>
      <input className='addNoteInput' value={value} onChange={event => setValue(event.target.value)} />
      <button className='addNoteButton' type='submit'>Створити</button>
    </form>
  )
}
