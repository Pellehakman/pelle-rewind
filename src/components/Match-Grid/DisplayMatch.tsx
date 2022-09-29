import '../../styles/DisplayMatch.scss'

import { Match } from '../../models/data'


interface DisplayMatchProps {
	match: Match;
};


const DisplayMatch = (props: DisplayMatchProps) => { 
    const { matchId, matchName, winner, date, time} = props.match

 


    
    return(
        <div>  
            <p>{matchId}</p>
            <p>{matchName}</p>
            <p>{winner}</p>
            <p>{time}</p>
            
            
            
                
        
        
        </div>
    )}


    export default DisplayMatch