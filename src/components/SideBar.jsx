import React  from 'react'
import { useDispatch } from 'react-redux';
import GroupsDisplay from './GroupsDisplay';
import './SideBar.css'

function SideBar({show , setShow}) {
  let groups = JSON.parse(localStorage.getItem('groupNames')) ;
  const dispatch = useDispatch()
  if(groups == null){
    groups = []
  }
  const setIndex = (ind) =>{
    return{
      type: 'ACTIVE',
      payload : ind
    }
  }
  // console.log(groups)
  return (
    <div className='SideBar'>
      <h1 style={{height:'8%'}} onClick={()=>{
        return dispatch(setIndex(-1))
      }} >Pocket Notes</h1>
      <button className='addGroup' onClick={(eve)=> {
        eve.stopPropagation()
        setShow(true)
      }}>+</button>
      <div className='grpNames'>
        {groups.map((group , idx) => {
        return <GroupsDisplay name={group.gName} color={group.gColor} index = {idx} key={idx}/> })}
      </div>
    </div>
  )
}

export default SideBar
