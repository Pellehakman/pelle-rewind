
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
    const [hide, setHide] = useState<boolean>(true);

    // const handleOverlay: () => void = () => {
    //     setOverlay(!overlay);
       
    // }
const handleHide:  () => void = () => {
    setHide(!hide)
    setOverlay(!overlay);
   
}

return(<>

    <section className="match" key={match.matchId}>
    {hide &&
<div className='small-overlay'onClick={handleHide}>
        <div className='match-date-container'>
            <p> {match.date} </p>
            <p> {match.time} </p>
        </div>
			<p> {match.matchName} </p>
            <p> {match.winner} </p>
            {/* <button className='btn-card' onClick={handleOverlay}>Läs Mer</button> */}
    </div>
}
            {overlay && 
                <BigMatchCard match={match}/>
                            
            }
            
			
		</section>
        <button onClick={handleHide}>VIEW MATCH</button>
        </>)
}

export default SmallMatchCard