import React from 'react'

function NotesCard({noteDetail}) {
  return (
    <div className='NotesCard'>
      <p> {noteDetail.note} </p>
      <div>
        <h4>{noteDetail.date} </h4>
        <h1 >&#x2022;</h1>
        <h4>{noteDetail.time}</h4>
      </div>
    </div>
  )
}

export default NotesCard
