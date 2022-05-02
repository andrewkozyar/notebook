import React from 'react'
import './FullNote.css'

export default function FullNote({ note: {id, name, content}, changeNoteName, changeNoteContent }) {

  return (
    <div className='fullNote'>
      <form onSubmit={event => event.preventDefault()} >

        <input className='fullNoteName fullNoteInput' value={name} onChange={event => {
          changeNoteName(id, event.target.value)
        }} />

        <textarea className='fullNoteContent fullNoteInput' value={content} onChange={event => {
          changeNoteContent(id, event.target.value)
        }} />

      </form>
    </div>
  )
}
