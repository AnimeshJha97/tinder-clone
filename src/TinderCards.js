import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase.js';

function TinderCards() {
    const [people, setPeople] = useState([
        
    ]);

    // Piece of code that runs based on conditions
    useEffect(() => {

    // this will run once when the component loads
    // and will never load again
    // if the dependency is [] blank
    // Now dependency is used to re run the function
    // every time the value of the depencency changes
    // For Example : if use add dependency [people],
    // then the code will run everytime we swipe...
    // other example can be [message] will fire the function
    // every time the variable message changes
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        });
    // so everytime there is a change in data of
    // collection people in the firebase, it will
    // reflect back
    // onSnapShot function we take the snapshot which
    // will get all the elements in collection and 
    // then iterate through them using map func
    // and then returning the data of each element,
    // which is here name and url
    // and whenever the database changes, we will 
    // pull the new updated collection and it will
    // set the people with new data

    return () => {
        //this is cleanup...
        unsubscribe();
    }
    // So what this does is, before calling the next
    // dependency, it detaches the previous
    // data which avoids the breakdown of our website
    // as we can have millions of data
    }, []);    

    return (
        <div>
            <div className="TinderCards__cardContainer">
                {people.map((person) => (
                <TinderCard
                        className = "swipe"
                        key = {person.name}
                        preventSwipe = {['up', 'down']}
                >
                {/* Always use keys in react whenever using any list under */}
                {/* encoding bcuz it allows react to efficiently re-render a List */}
                {/* It makes the app super fast. */}
                {/* For example : when we post a comment in instagram */}
                {/* the whole comment section doesn't get refereshed. */}
                {/* this is done due to keys. */}
                    <div 
                            style = {{backgroundImage : `url(${person.url})`}}
                            className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard> 
                ))}
            </div>            
        </div>
    )
}

export default TinderCards

