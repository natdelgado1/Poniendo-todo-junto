import { Component } from "react";

class PersonCard extends Component 
{
    render() {

        const { firstName,lastName,age,hairColor } = this.props; 
            
        
        return(
            <div style={{width: "300px", margin: "0 auto", textAlign: "left"}} >
               <h1>{lastName} {firstName} </h1>
               <div>
                <p> {age} </p>
                <p> {hairColor} </p>
            </div>
            <div>
             <button> Birthday button for {lastName} {firstName}</button>
            </div>
               </div>

        )
    
        }

       
    }

    export default PersonCard;


