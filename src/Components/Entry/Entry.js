import React, { Component } from "react";
import './Entry.css';

class Entry extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            editInput: props.element
        }
    }

    render(){
        return(
            <div className='Entry'>
                <section className='update-styling'>

                </section>

                <article className='entry-container'>
                    
                    <p>{this.props.tracker.bloodSugar}bg</p>

                    <p>{this.props.tracker.food}</p>

                    <p>{this.props.tracker.grams}g</p>

                    <p>{this.props.tracker.units}units</p>

                    <p>{this.props.tracker.time}time</p>
                    
                    <p>{this.props.tracker.date}date</p>

                    <section className='button-container'>
                        <button>edit</button>

                        <button>delete</button>
                    </section>

                </article>


                
            </div>
        )
    }
}

export default Entry;