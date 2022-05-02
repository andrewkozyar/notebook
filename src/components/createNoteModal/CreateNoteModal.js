import React from 'react'
import AddNote from '../addNote/AddNote'
import './CreateNoteModal.css'

export default function CreateNoteModal({ openModal, addNote }) {
  return (
    <div>
      
      <div className='modal'>
        <div>     
         
          <div class="close-model-top" onClick={() => openModal()}></div>

          <div class="target">
            <div class="close-model" onClick={() => openModal()}></div>
            <div className='modal-body'>
              <h1>Вкажіть назву нотатки</h1>

              <AddNote addNote={addNote} openModal={openModal}/>

            </div>
            <div class="close-model" onClick={() => openModal()}></div>
          </div>

          <div class="close-model-bottom" onClick={() => openModal()}></div></div>

      </div>

    </div>
  )
}
