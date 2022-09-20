import '../styles/matchlist.scss'
import Match from './Match'

export default function Matchlist() {
    return(
        <div className='matchlist-container'>

            <section className='matches-container'>
                <div className='header-container'>
                    <header>MATCHES</header>
                    <button className='add-btn'>ADD MATCH</button>
                </div>

                <Match />
                
            </section>


            <section className='stats-container'>
                <header className='alltime-header'>ALL TIME</header>
                <div>PLAYER</div>

            </section>


        </div>
    )
}