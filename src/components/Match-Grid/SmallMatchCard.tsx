
import '../../styles/SmallMatchCard.scss'
import  { Match } from '../../models/data'
import { useState } from 'react';

import { RootState } from '../../store';
import { matchRoutes } from 'react-router-dom';
import BigMatchCard from '../../components/Match-Grid/BigMatchCard/BigMatchCard'


interface Props{
    match: Match
}
const SmallMatchCard = ({ match }: Props) => {

    const [overlay, setOverlay] = useState<boolean>(false);

    const handleOverlay: () => void = () => {
        setOverlay(!overlay);
       
    }


return(
    <section className="match" key={match.matchId}>

        <div className='match-date-container'>
            <p> {match.date} </p>
            <p> {match.time} </p>
        </div>
			<p> {match.matchName} </p>
            <p> {match.winner} </p>
            <button className='btn-card' onClick={handleOverlay}>Läs Mer</button>
            {overlay && 
                <BigMatchCard match={match}/>            
            }
			
		</section>
)
}

export default SmallMatchCard