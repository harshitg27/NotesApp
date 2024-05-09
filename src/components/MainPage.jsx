import React from 'react'
import Homepage from './Homepage'
import Notes from './Notes';
import { useSelector } from 'react-redux';

import './MainPage.css'

function MainPage() {
  const idx = useSelector(store => store.index)
  return (
    <div className='MainPage'>
        {idx >=0 ? <Notes index={idx} /> : <Homepage />}
      {/* <Homepage /> */}
    </div>
  )
}

export default MainPage
