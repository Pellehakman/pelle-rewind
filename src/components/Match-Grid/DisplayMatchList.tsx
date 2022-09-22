
import '../../styles/DisplayMatchList.scss'
import DisplayMatch from './SmallMatchCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import BigMatchCard from './BigMatchCard/BigMatchCard'

export default function DisplayMatchList(){
    const matches = useSelector((state: RootState) => state.matches)



    return(
        <div className='matchlist-container'>
            <section className='matches-container'>
                <div className='header-container'>
                    <header>MATCHES</header>
                    <button className='add-btn'>ADD MATCH</button>
                </div>
                

                {matches.map(match => (
                    <DisplayMatch key={match.matchId} match={match} />
                    

            
            ))}
                
       
            </section>




            <section className='stats-container'>
                <header className='alltime-header'>ALL TIME</header>
                <div>PLAYER</div>
            </section>
        </div>
    )
}