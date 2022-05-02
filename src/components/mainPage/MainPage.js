import React from 'react'
import CreateNoteModal from '../createNoteModal/CreateNoteModal';
import FullNote from '../fullNote/FullNote';
import Header from '../header/Header'
import NoteList from '../noleList/NoteList'
import './MainPage.css'

export default function MainPage({ notes, deleteNote, addNote, changeNoteName, changeNoteContent }) {

  const [page, setPage] = React.useState({ isMainPage: true, pageId: null, openModal: false })

  const changePage = (pageId) => {
    setPage({ 
      isMainPage: pageId ? false : true, 
      pageId: pageId ? pageId : null, 
      openModal: page.openModal
    })
  }

  const openModal = () => {
    setPage({
      openModal: !page.openModal,
      isMainPage: page.isMainPage,
      pageId: page.pageId, 
    })
  }

  return (
    <div className='mainPage'>

      {
        page.openModal ? (<CreateNoteModal openModal={openModal} addNote={addNote}/>) : null
      }

      <Header isMainPage={page.isMainPage} changePage={changePage} openModal={openModal}/>

      {
        page.isMainPage ? (
          <NoteList notes={notes} deleteNote={deleteNote} changePage={changePage}/>
        ) : (
            <FullNote note={notes.find(note => note.id === page.pageId)} changeNoteName={changeNoteName} changeNoteContent={changeNoteContent}/>
        ) 
      }


    </div>
  )
}
