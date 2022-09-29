import {useState} from 'react'
import '../../styles/DisplayMatchList.scss'
<<<<<<< HEAD
import SmallCard from './SmallCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useState } from 'react'
import AddMatch from '../AddMatch'


export default function DisplayMatchList(){
    const matches = useSelector((state: RootState) => state.matches)
    
    const [overlay, setOverlay] = useState<boolean>(false);

    const handleAddMatch:  () => void = () => {
        setOverlay(!overlay);
       
    }
=======
import DisplayMatch from './DisplayMatch'
import { useSelector } from 'react-redux'
import {Match} from '../../models/data'
import Input from '../Input'

import useStore from '../../store'

export default function DisplayMatchList(){
    const people = useStore(state => state.people)

    // const matches:Match[] = useSelector((state: RootState) => state.macthes);
>>>>>>> parent of 85e8e6b (daily redux)

    // const singleMatch = matches.map((match) => <DisplayMatch  />);

    return(
        <div className='matchlist-container'>
            <section className='matches-container'>
                <div className='header-container'>
                    <header>MATCHES</header>
                    <button onClick={handleAddMatch} className='add-btn'>ADD MATCH</button>
                </div>
<<<<<<< HEAD
                
                {overlay && 
                   <AddMatch />
                }

                {matches.map(match => (
                    <SmallCard key={match.matchId} match={match} />
                 ))}

              
                
       
=======
            <Input />
<p>{people}</p>

              
>>>>>>> parent of 85e8e6b (daily redux)
            </section>




            <section className='stats-container'>
                <header className='alltime-header'>ALL TIME</header>
                <div>PLAYER</div>
            </section>
        </div>
    )
}