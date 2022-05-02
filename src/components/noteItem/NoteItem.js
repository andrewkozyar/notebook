import React from 'react'
import './NoteItem.css'

export default function NoteItem({ note, index, deleteNote, changePage }) {
  return (
    <li>
      <span onClick={() => changePage(note.id)}>
        <strong>{++index}</strong>
        &nbsp; &nbsp;
        {note.name}
      </span>
      <div className='rm' onClick={() => deleteNote(note.id)}></div>
    </li>
  )
}
