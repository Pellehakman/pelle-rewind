import {useState} from 'react'
import '../../styles/DisplayMatchList.scss'
import DisplayMatch from './DisplayMatch'
import { useSelector } from 'react-redux'
import {Match} from '../../models/data'
import Input from '../Input'

import useStore from '../../store'

export default function DisplayMatchList(){
    const people = useStore(state => state.people)

    // const matches:Match[] = useSelector((state: RootState) => state.macthes);

    // const singleMatch = matches.map((match) => <DisplayMatch  />);

    return(
        <div className='matchlist-container'>
            <section className='matches-container'>
                <div className='header-container'>
                    <header>MATCHES</header>
                    <button className='add-btn'>ADD MATCH</button>
                </div>
            <Input />
<p>{people}</p>

              
            </section>




            <section className='stats-container'>
                <header className='alltime-header'>ALL TIME</header>
                <div>PLAYER</div>
            </section>
        </div>
    )
}