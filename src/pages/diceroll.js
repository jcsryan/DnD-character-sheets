import React, {Component, useState} from 'react';


export default class diceRoll extends React.Component{
    state = {
        roll: ''
    };

    Dsix = () => {
        const {roll} = this.state;
        return this.setState({roll: Math.floor(Math.random() * 6) + 1});
    }
    
    render(){
        const {roll} = this.state;
    

    return(
        <div>
           <button onClick={this.Dsix}>1d6</button> 
    <p>{this.state.roll}</p>
        </div>
    )
    }
}