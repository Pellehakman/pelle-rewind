import React, {useRef} from 'react'
import useStore from '../store'
export default function Input() {

    const inputRef = useRef()
    const addPerson = useStore((state) => state.addPerson)
   
    const add: () => void = () => {
        addPerson(inputRef.current.value)

    }


    return (
        <div>
            <input type="text" ref={inputRef}>
            
            </input>
            <button onClick={add}>ADDPERSON</button>
        </div>
        
    )
};