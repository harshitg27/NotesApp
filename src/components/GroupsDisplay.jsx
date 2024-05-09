import React from 'react'
import { useDispatch } from 'react-redux';

function GroupsDisplay({ name, color, index }) {
  name = name.trim();
  const heading = name.slice(0, 2).toUpperCase()
  const dispatch = useDispatch()

  const setIndex = (ind) => {
    return {
      type: 'ACTIVE',
      payload: ind
    }
  }

  return (
    <div className='group-display'
      onClick={() => {
        return dispatch(setIndex(index))
      }} >
      <div className='groupNameHeading' style={{ backgroundColor: color }}>{heading}</div>
      <h2>{name}</h2>
    </div>
  )
}

export default GroupsDisplay
