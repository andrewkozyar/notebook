import React from 'react'
import './Header.css'

export default function Header({ isMainPage, changePage, openModal }) {
  return (
    <div>
      <div className='headerClass'>
        {
          !isMainPage ? (<div className='back' onClick={() => changePage(null)}></div>) : (<div className='backPasive'></div>)
        }
        
        <div className='plus' onClick={() => openModal()}></div>
      </div>
      <hr/>
    </div>
  )
}
