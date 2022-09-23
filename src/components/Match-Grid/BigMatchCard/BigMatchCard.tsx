
import '../../../styles/BigCard.scss'

import { Match } from '../../../models/data'



interface BigCardProps{
    match: Match
}
const BigCard = ({ match }: BigCardProps) => {




        
        
       

    
    return (
        <section className='big-match-card-container' >
            <p>{match.matchName}</p>
           
        </section>
    )
};
export default BigCard