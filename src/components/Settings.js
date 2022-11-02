import React from 'react'
import Spanner from './../assets/cog.svg'

class Settings extends React.Component {
    settings;
    constructor(props){
        super(props);
        this.settings = props.settings;
        this.change_setting_value = this.change_setting_value.bind(this);
    }

    state = {
        show_settings:false
    }
    
    render(){
        return(
        <div id="settings">
            <div id="settings_button" title="Settings" onClick={() => this.switch_form()}>
                <img src={Spanner} alt="settings button" id="spanner"/>
            </div>
            <div id="settings_form" className={this.state.show_settings ? "show_form" : "hide_form"}>
                <h1>
                    Settings
                </h1>
                
                <h2>
                    Change cube colors
                </h2>
                <div id="colors">
                <label htmlFor="white">White: </label><input type="color" defaultValue={this.settings.colors.white} id="white" onChange={this.change_setting_value}/>
                <label htmlFor="orange">Orange: </label><input type="color" defaultValue={this.settings.colors.orange} id="orange" onChange={this.change_setting_value}/>
                <label htmlFor="green">Green: </label><input type="color" defaultValue={this.settings.colors.green} id="green" onChange={this.change_setting_value}/>
                <label htmlFor="red">Red: </label><input type="color" defaultValue={this.settings.colors.red} id="red" onChange={this.change_setting_value}/>
                <label htmlFor="blue">Blue: </label><input type="color" defaultValue={this.settings.colors.blue} id="blue" onChange={this.change_setting_value}/>
                <label htmlFor="yellow">Yellow: </label><input type="color" defaultValue={this.settings.colors.yellow} id="yellow" onChange={this.change_setting_value}/>
                </div>
                <div id="buttons">
                    <button id="save" onClick={()=> this.save_settings()}>Save</button>
                    <button id="cancel" onClick={()=> this.cancel()}>Cancel</button>
                </div>
            </div>
        </div>
        ) 
    }
    change_setting_value(event){
        this.settings.colors[event.target.id] = event.target.value
    }
    save_settings(){
        this.props.change_settings(this.settings)
        this.switch_form()
    }
    cancel(){
        this.switch_form()
    }
    switch_form(){
        if(this.state.show_settings){
            this.setState({show_settings: false})
        }else{
            this.setState({show_settings: true})
        }
    }
}

export default Settings