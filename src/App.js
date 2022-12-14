import React from 'react'
import Scramble from './components/Scramble'
import Timer from './components/Timer'
import Scoreboard from './components/Scoreboard'
import Settings from './components/Settings'
import Help from './components/Help'
import './App.css';


class App extends React.Component{
  default_settings= {
    colors: {
      white:"#ffffff",
      orange:"#ff6400",
      green:"#05b527",
      red:"#b91818",
      blue:"#006bee",
      yellow:"#fdf400"
    }
  }
  constructor(props){
    super(props)
    this.check_localstorage();
  }
  records = JSON.parse(localStorage.getItem("records"))
  state={
    last_time:0,
    settings:JSON.parse(localStorage.getItem("settings"))
  }
  set_new_scramble = true;
  last_scramble = 0;
  render(){
    return(
      <div className="App">
        <Scramble onEnd={(value)=>this.handleScramble(value)} settings={this.state.settings} set_new_scramble={this.set_new_scramble}/>
        {this.set_new_scramble = false}
        <Timer onEnd={(value)=>this.handleTime(value)}/>
        <Scoreboard records={this.records}/>
        <div id="top_right">
          <Help/>
          <Settings settings={this.state.settings} change_settings={(new_settings) => this.change_settings(new_settings)}/>
        </div>
      </div>
    );

  }
  handleScramble(newscramble){
      this.last_scramble = newscramble;
  }
  handleTime(newtime){
    this.set_new_scramble = true;
    this.setState({
      last_time: newtime
    })
    this.save_time(newtime);
  }

  save_time(newtime){
    this.records.push([this.last_scramble, newtime,'id', false, false])//scramble, time, id, has +2, has dnf
    localStorage.setItem("records", JSON.stringify(this.records))
  }
  change_settings(new_settings){
    localStorage.setItem("settings", JSON.stringify(new_settings))
    this.setState({
      settings:new_settings
    })
  }
  check_localstorage(){
    if(localStorage.getItem("settings") === null) {
      localStorage.setItem("settings", JSON.stringify(this.default_settings))
    }
    if(localStorage.getItem("records") === null) {
      localStorage.setItem("records", JSON.stringify([]))
    }
  }
}

export default App;

/* 
      //fix timer.js code visually
      //add a button to turn 3d cube
      //add a button to change to classic grid
      //add a timer
      //add a table to show times
      //add to git
      //store times somehow maybe json file or local storage
      //add settings
      add a tutorial
      install css preprocessor
      //style buttons
      //style table
*/