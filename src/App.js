import React from 'react';
import Controller from './Controller';
import zingTouch from 'zingtouch'; 
import Screen from './Screen';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentState : 'MainMenu'
    }
  }
  handleRotate = () => {
    const element = document.getElementById('childElement');
    // console.log(element);
    const region = new zingTouch.Region(element);
    region.bind(element,'rotate',(e)=> {
      let angle = e.detail.angle;
      let option1 = document.getElementById('option1');
      let option2 = document.getElementById('option2');
      let option3 = document.getElementById('option3');
      let option4 = document.getElementById('option4');
      // console.log(angle);
      if(angle < 180 && angle > 120){
        option1.classList.add('selected');
        try{
          option2.classList.remove('selected');
          option3.classList.remove('selected');
          option4.classList.remove('selected');
        }catch(err){
          console.log('');
        }
      }
      else if((angle < 120 && angle > 60) || (angle < 240 && angle > 180)){
        option2.classList.add('selected');
        try{
          option1.classList.remove('selected');
          option3.classList.remove('selected');
          option4.classList.remove('selected');
        }catch(err){
          console.log('');
        }
      }
      else if((angle < 60 && angle) > 0 || (angle < 300 && angle > 240)){
        option3.classList.add('selected');
        try{
          option2.classList.remove('selected');
          option1.classList.remove('selected');
          option4.classList.remove('selected');
        }catch(err){
          console.log('');
        }
      }
      else if(angle < 360 && angle > 300){
        option4.classList.add('selected');
        try{
          option2.classList.remove('selected');
          option3.classList.remove('selected');
          option1.classList.remove('selected');
        }catch(err){
          console.log('');
        }
      }
    })
  }

  handleSelect = () => {
    let option1 = document.getElementById('option1');
    let option2 = document.getElementById('option2');
    let option3 = document.getElementById('option3');
    let option4 = document.getElementById('option4');
    let selectedOption;
    if(option1.classList.contains('selected')){
      selectedOption = option1;
    }
    else if(option2.classList.contains('selected')){
      selectedOption = option2;
    }
    else if(option3.classList.contains('selected')){
      selectedOption = option3;
    }
    else if(option4.classList.contains('selected')){
      selectedOption = option4;
    }
    let currentValue = selectedOption.firstChild.innerText;
    this.setState((prevState) => {
      return {
        currentState : currentValue
      }
    })
  }

  handleMenu= () => {
    this.setState({
      currentState : 'MainMenu'
    })
  }
  render() {
    return (
      <div className="app">
        <Screen currentState={this.state.currentState}/>
        <Controller handleRotate={this.handleRotate} 
        handleSelect={this.handleSelect}
        handleMenu={this.handleMenu}/>
      </div>
    );
  }
}

export default App;
