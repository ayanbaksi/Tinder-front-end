import { dir } from 'async';
import React,{useState} from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setpeople] = useState([
        {
            name:'Sayan Chakraborty',
            URL : "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"

        },
        {
            name:'Sugato Goswami',
            URL:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        },

    ]);
    const swiped=(direction,nameToDelete)=>{
        console.log("removing:"+nameToDelete);
       // setLastDirection(direction);
    };
    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    };
    return (
        <div className="tinderCards">
             <div className="tinderCards_cardContainer">
             {people.map((person)=> (
             <TinderCard
                 className="Swipe"
                 key={person.name}
                 preventSwipe={["up" , "down"]}
                 onSwipe={(dir)=>swiped(dir,person.name)}
                 onCardLeftScreen={()=>outOfFrame(person.name)}

             >
              <div style={{backgroundImage:"URL("+person.URL+")"}}
              className="card">
                  <h3>{person.name}</h3>
              </div>

             </TinderCard>
             ))}

             </div>

        </div>
    )
}

export default TinderCards
