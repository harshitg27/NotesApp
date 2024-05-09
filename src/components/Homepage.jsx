import React from 'react'
import lock from '../assets/lock.png'
import pocketnotes from '../assets/pocketnotes.png'
import './HomePage.css'

function Homepage() {
  return (
    <div className='Homepage'>
      <div style={{marginTop:'-75px'}}>
        <div><img src={pocketnotes} alt='pocket Notes' /></div>
        <h1>Pocket Notes</h1>
        <p>Send and receive messages without keeping your phone online.<br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
      <div className='encrypted'>
        <img src={lock} alt='lock' />
        <p>end-to-end encrypted</p>
      </div>
      
    </div>
  )
}

export default Homepage
