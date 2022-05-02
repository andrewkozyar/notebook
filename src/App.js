import React from 'react';
import './App.css';
import MainPage from './components/mainPage/MainPage';

function App() {
  const [notes, setNotes] = React.useState([
    {
      id: 1,
      name: 'qwer',
      content: 'qwer qwer qewr qwer'
    },
    {
      id: 2,
      name: 'asdf',
      content: 'asdf asdf asdf asdf'
    }
  ])

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const addNote = (name) => {
    notes.push(
      {
        id: notes[notes.length - 1] ? notes[notes.length-1].id + 1 : 1,
        name,
        content: ''
      }
    )
    setNotes(notes)
  }

  const changeNoteName = (id, name) => {
    const changeNotes = notes.map(note => {
      if (note.id === id) {
        note.name = name;
      }
      return note;
    })
    setNotes(changeNotes)
  }

  const changeNoteContent = (id, content) => {
    const changeNotes = notes.map(note => {
      if (note.id === id) {
        note.content = content;
      }
      return note;
    })
    setNotes(changeNotes)
  }

  return (
    <div className="App">
      <MainPage 
        notes={notes} 
        deleteNote={deleteNote} 
        addNote={addNote} 
        changeNoteName={changeNoteName}      
        changeNoteContent={changeNoteContent}
      />
    </div>
  );
}

export default App;
