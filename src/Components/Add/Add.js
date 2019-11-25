import React, { Component } from "react";
import './Add.css';
import add from './add.png';


class Add extends Component {
    constructor(props){
        super(props)

        this.state = {
            bloodSugar: 0,
            food: '',
            grams: 0,
            units: 0,
            time: '',
            date: ''
        }
    }



    handleChange = (event) => {
        this.setState({
        [event.target.name] : event.target.value
        });
      }

    render(){
        return(
            <div className='Add'>
                <label className='border'>Blood Sugar:
                    <input 
                    type='number'
                    name='bloodSugar'
                    value={this.state.bloodSugar}
                    onChange={event => this.handleChange(event)}/>
                </label>

                <label className='border'>Food:
                    <input 
                    name='food' 
                    value={this.state.food} 
                    onChange={event => this.handleChange(event)}/>
                </label>

                
                <label className='border'>Carbs:
                    <input 
                    name='grams' 
                    type="number" 
                    value={this.state.grams} 
                    onChange={event => this.handleChange(event)}/>
                </label>
                

                <label className='border'>Units:
                    <input 
                    name='units' 
                    type="number" 
                    value={this.state.units} 
                    onChange={event => this.handleChange(event)}/>
                </label>

                <label className='border'>Time:
                    <input 
                    name='time' 
                    type="time" 
                    value={this.state.time} 
                    onChange={event => this.handleChange(event)}/>
                </label>

                <label className='border'>Date:
                    <input 
                    name='date' 
                    type="date" 
                    value={this.state.date} 
                    onChange={event => this.handleChange(event)}/>
                </label>

                <button className='addButton' onClick={() => this.props.addToTracker
                (this.state.bloodSugar,
                this.state.food,
                this.state.grams,
                this.state.units,
                this.state.time,
                this.state.date)}>
                    <img src={add} alt='add' height='45'/>
                </button>
            </div>
        )
    }
}

export default Add;