import { Component } from "react";
import styles from "./PersonCard.module.css";
    
class PersonCard extends Component 
{
    constructor(props) {
        super(props);
        const{ age} = this.props;
        this.state = {
            age: age,

        };
    }

        

    render() {

        const { firstName,lastName,age,hairColor } = this.props;
        const cumple = () => {
            console.log(this.state);
            this.setState( {age: this.state.age + 1 })     
        } 
        

        return(
            <div className={styles.personCard} >
               <h1>{lastName}, {firstName} </h1>
               <div>
                <p>Age: {this.state.age} </p>
                <p> {hairColor} </p>
            </div>
            <div>
             <button className={styles.birthdaybtn} onClick={cumple}> Birthday button for {lastName} {firstName}</button>
            </div>
               </div>

        )
    
        }

       
    }

    export default PersonCard;


