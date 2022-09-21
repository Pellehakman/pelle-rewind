import '../styles/match.scss'
import {useState} from 'react'
import { Match } from '../models/data'
import matchData from '../data/data.json'


export default function DisplayMatch(){
    const [matches, setMatches] = useState<Match[]>(matchData.matchData)


    return(
        <div>  
            {matches.map(match =>(
            <div className='match' key={match.matchId}>
                <div className='match-date-container'>       
                    <span className='date'>{match.date}</span>
                    <span className='time'>{match.time}</span>                    
                </div>           
                <span className='match-name'>{match.matchName}</span>
                <span className='match-win'>{match.winner}</span> 
                <button>edit</button>    
        </div>
        ))}
           






                    

                    
                    
                    

    </div>
    )
}