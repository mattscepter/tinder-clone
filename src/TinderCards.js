import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from './firebase'

function TinderCards() {

    const [people, setpeople] = useState([])

    useEffect(() => {
        database.collection("people").onSnapshot((snapshot)=>{
            setpeople(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

    return (
        <div className="tinderCards__cardContainer">
            {people.map((person) =>{
                return(
                        <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}>
                            <div style={{backgroundImage:`url(${person.url})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
            )
            })}
        </div>
    )
}

export default TinderCards
