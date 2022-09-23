
import '../../../styles/BigMatchCard.scss'

import { Match } from '../../../models/data'

interface BigCardProps{
    match: Match
}

    const BigMatchCard = ({ match }: BigCardProps) => {
       
        
        
       

    
    return (
        <section className='big-match-card-container' >
            {/* HÄR SLUTATE DU IGÅR */}
            {/* {match.map((item, i) => (
          <div key={i}>{item}</div> */}
           
        </section>
    )
};
export default BigMatchCard