import React, { Component } from "react";
import "./Entry.css";
import trashcan2 from './trashcan2.png';
import edit2 from './edit2.jpg';
import squareSave from './squareSave.jpg';



class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      bloodSugar: props.tracker.bloodSugar,
      food: props.tracker.food,
      grams: props.tracker.grams,
      units: props.tracker.units,
      time: props.tracker.time,
      date: props.tracker.date
    };
  }

  //handleChange
  handleChange = (event) => {
    this.setState({
    [event.target.name] : event.target.value
    });
  }



  editTracker() {
    this.props.editTracker(
      this.props.tracker.id,
      this.state.bloodSugar,
      this.state.food,
      this.state.grams,
      this.state.units,
      this.state.time,
      this.state.date
    );

    this.setState({
      editing: false
    });
  }

  render() {
      console.log(this.state)
    return (
      <div >

          {/* {condition ? whentruedothis : whenfalsedothis} */}

            {this.state.editing ? (
              <div className='update-container'>
                <section className='border'>
                  <label>Blood Sugar:
                    <input 
                    className='bloodSugar'
                    type="number" 
                    name='bloodSugar' 
                    value={this.state.bloodSugar}  
                    onChange={event => this.handleChange(event)}/></label>
                </section>


                <label 
                className='border'>
                  Food:
                  <input 
                  name='food' 
                  value={this.state.food} 
                  onChange={event => this.handleChange(event)}/></label>

                <label 
                className='border'>
                  Carbs:
                  <input 
                  className='carbs'
                  name='grams' t
                  ype="number"
                  value={this.state.grams} 
                  onChange={event => this.handleChange(event)}/></label>

                <label 
                className='border'>
                  Units:
                  <input 
                  className='units'
                  name='units' 
                  type="number" 
                  value={this.state.units} 
                  onChange={event => this.handleChange(event)}/></label>

                <label 
                className='border'>
                  Time:
                  <input 
                  className='time'
                  name='time' 
                  type="time" 
                  value={this.state.time} 
                  onChange={event => this.handleChange(event)}/></label>

                <label 
                className='border'>
                  Date:
                  <input 
                  className='date'
                  name='date' 
                  type="date" 
                  value={this.state.date} 
                  onChange={event => this.handleChange(event)}/></label>

                <button
                  className="edit-button"
                  onClick={() => {
                    this.editTracker();
                  }}
                >
                  <img src={squareSave} alt='check mark' height='30'/>
                </button>
              </div>
            ) : (
              <div className='entry-container'>

                <p className='border'>{this.props.tracker.bloodSugar} bg</p>

                <p className='border'>{this.props.tracker.food}</p>

                <p className='border'>{this.props.tracker.grams} g</p>

                <p className='border'>{this.props.tracker.units} units</p>

                <p className='border'>{this.props.tracker.time}</p>

                <p className='border'>{this.props.tracker.date}</p>

              <article className='button-container'>
                <button
                  className='edit-button'
                  onClick={() => {
                    this.setState({ editing: true });
                  }}
                ><img src={edit2} alt='edit' height='30'/>
                </button>

              <button
                className="trash-button"
                onClick={() => this.props.deleteTracker(this.props.index)}
                ><img src={trashcan2} alt='trashcan' height='35'/>
            </button>

            </article>
              </div>
            )}


      </div>
    );
  }
}

export default Entry;
