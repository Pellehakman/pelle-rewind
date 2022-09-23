
import '../../../styles/BigCard.scss'

import { Match } from '../../../models/data'
import { json } from 'react-router-dom';



interface BigCardProps{
    match: Match<string>
   
   
    
}
const BigCard = ({ match }: BigCardProps) => {

 

const data = match.teams[0].participants[0]['player-2'][0].name
console.log(data)







    return (
        <section className='big-match-card-container' >
            <p>{match.matchName}</p>
           
            
<>

{data}
</>

            
           
        </section>
    )
};
export default BigCard