
import '../../styles/DisplayMatchList.scss'
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


    return(
        <div className='matchlist-container'>
            <section className='matches-container'>
                <div className='header-container'>
                    <header>MATCHES</header>
                    <button onClick={handleAddMatch} className='add-btn'>ADD MATCH</button>
                </div>
                
                {overlay && 
                   <AddMatch />
                }

                {matches.map(match => (
                    <SmallCard key={match.matchId} match={match} />
                 ))}

              
                
       
            </section>




            <section className='stats-container'>
                <header className='alltime-header'>ALL TIME</header>
                <div>PLAYER</div>
            </section>
        </div>
    )
}