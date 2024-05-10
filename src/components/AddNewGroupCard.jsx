import React, { useState } from 'react'
import './AddGroupCard.css'

function AddNewGroupCard({ setShow }) {
    const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];
    const [groups, SetGroups] = useState({ gName: '', gColor: '', gNotes: [] })
    const [colorIdx, setColorIdx] = useState(10)

    const handleSubmit = () => {
        let arrayGrp = [];
        if (groups.gName.trim().length === 0) {
            console.log('Enter Correct Name')
            SetGroups((prevState) => ({
                ...prevState,
                gName: ''
            }))
            return
        }
        if (groups.gColor === '') {
            console.log('Enter Color')
            return
        }
        if (!localStorage.groupNames) {
            arrayGrp[0] = groups
        } else {
            arrayGrp = JSON.parse(localStorage.getItem('groupNames'))
            arrayGrp.push(groups)
        }
        let strGrp = JSON.stringify(arrayGrp)
        localStorage.setItem('groupNames', strGrp)
        SetGroups({ gName: '', gColor: '', gNotes: [] })
        setShow(false)
    }
    return (

        <div >
            <div className='newGroup' onClick={(eve) => {
                eve.stopPropagation()
            }}>
                <h1>Create New Group</h1>
                <div className='input-field' >
                    <h2>Group Name :  </h2>
                    <input type="text" placeholder='Enter Group Name' value={groups.gName} onInput={(e) => SetGroups((prevState) => ({
                        ...prevState,
                        gName: e.target.value

                    }))} />
                </div>
                <div className='input-field'>
                    <h2>Choose Colour :  </h2>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        {colors.map((colour, idx) =>
                            <div key={idx} className='colorPallet' style={{ backgroundColor: colour , border : idx === colorIdx ? 'solid black 2px' : ''}}
                                onClick={(e) => {
                                    setColorIdx(idx)
                                    SetGroups((prevState) => ({
                                        ...prevState,
                                        gColor: colour
                                    }))
                                }}></div>)}
                    </div>
                </div>
                <button className='createButton' onClick={() => handleSubmit()} >Create</button>
            </div>
        </div>
    )
}

export default AddNewGroupCard
