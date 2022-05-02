import React from 'react'
import NoteItem from '../noteItem/NoteItem'
import './NoteList.css'

export default function NoteList({ notes, deleteNote, changePage }) {
  return (
    <ul >

      {
        notes.length ?
        notes.map((note, i) => {
          return <NoteItem 
            note={note} 
            key={note.id} 
            index={i} 
            deleteNote={deleteNote} 
            changePage={changePage}
          />
        })
          : <h1 className='no-notes'>У вас немає нотаток</h1>
      }

    </ul>
  )
}
