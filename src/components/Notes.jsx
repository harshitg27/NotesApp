import React, {useState , useEffect} from 'react'
import { useMediaQuery } from 'react-responsive';
import moment from 'moment';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

import NotesCard from './NotesCard';
import addNotes from '../assets/add-notes.png'
import './Notes.css'
import backSign from '../assets/back-button.png'

const grp = JSON.parse(localStorage.getItem('groupNames'))

function Notes({ index }) {
  // const idx = useSelector(store => store.index)
  // console.log(idx)
  const styles = {
    disabledButton: {
      cursor: 'not-allowed',
      opacity: '0.4'
    },
    enabledButton: {
      cursor: 'pointer',
      opacity: '1'
    }
  }; 
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const groups = JSON.parse(localStorage.getItem('groupNames'))
  let name = groups[index].gName.trim();
  const heading = name.slice(0, 2).toUpperCase()
  const [note , setNote] = useState('')
  const dispatch = useDispatch()
  const [notesArr , setNotesArr] = useState(groups[index].gNotes)
  // console.log('main')
  useEffect(()=>{
    setNotesArr(grp[index].gNotes)
  },[index])

  const setIndex = (ind) =>{
    return{
      type: 'ACTIVE',
      payload : ind
    }
  }

  const handleSubmit = ()=>{
    const date =  moment().format("D MMM YY"); 
    const time =  moment().format("LT");
    const obj = {
      date: date ,
      time:time,
      note:note
    }
    groups[index].gNotes.push(obj)
    
    setNotesArr([
      ...notesArr ,
      obj
    ])
    // console.log(notesArr)
    let strGrp = JSON.stringify(groups)
    localStorage.setItem('groupNames', strGrp)
    setNote('')
  }

  return (
    <div className='Notes'>
      <header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} >
          {isTabletOrMobile && <div onClick={()=> {return dispatch(setIndex(-1))}}><img src={backSign} alt='Back' /></div>}
          <div className='groupHeading' style={{ backgroundColor: groups[index].gColor }}>{heading}</div>
          <h2>{name}</h2>
        </div>
      </header>

      <section className='notes-display' >
        {notesArr.map((notes , index)=>{
          return <NotesCard key={index} noteDetail={notes} />
        } )}
      </section>

      <footer >
        <textarea className='notes-editor' value={note} placeholder='Enter your text here...........'
          onInput={(e) => setNote(e.target.value) }>
        </textarea>
        <button disabled={note.length === 0} style={note.length === 0 ?
          styles.disabledButton : styles.enabledButton} 
          onClick={handleSubmit} ><img src={addNotes} alt='Subit' /></button>
      </footer>
    </div>
  )
}

export default Notes
