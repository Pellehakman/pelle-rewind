
import '../../../styles/BigCard.scss'

import { Match } from '../../../models/data'
import { json } from 'react-router-dom';



interface BigCardProps{
    match: Match
    teams: object
    
}
const BigCard = ({ match }: BigCardProps) => {



const data = match.teams[0].team
console.log(data)

// const result = Object.keys(match.teams).map((d: string) => `${d} - ${match.teams[d as keyof typeof match.teams]}`)





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