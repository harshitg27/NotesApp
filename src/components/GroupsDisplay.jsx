import React  from 'react'
import { useDispatch } from 'react-redux';

function GroupsDisplay({ name, color, index }) {
  name = name.trim();
  const heading = name.slice(0, 2).toUpperCase()
  const dispatch = useDispatch()
  // const [clsName , setClsName] = useState('')
  const clsName = ''

  const setIndex = (ind) => {
    return {
      type: 'ACTIVE',
      payload: ind
    }
  }
//   useEffect(()=>  {
//     setClsName('')
//     console.log(clsName)
//   } , [index])

//   useEffect(() => {
//     return () => {
//       console.log('page Unmount' , index)
//         // Anything in here is fired on component unmount.
//     }
// }, [])

  return (
    <div className= {`group-display ${clsName}` }
      onClick={() => {
        // setClsName('active-group')
        return dispatch(setIndex(index))
      }} >
      <div className='groupNameHeading' style={{ backgroundColor: color }}>{heading}</div>
      <h2>{name}</h2>
    </div>
  )
}

export default GroupsDisplay
