import React, {Component, useState} from 'react';


export default class diceRoll extends React.Component{
    state = {
        d4roll: '',
        d6roll: '',
        d8roll: '',
        d10roll: '',
        d12roll: '',
        d20roll: ''
    };

    Dfour = () => {
        const {d4roll} = this.setState;
        return this.setState({d4roll: Math.floor(Math.random() * 4) + 1})
    }

    Dsix = () => {
        const {d6roll} = this.state;
        return this.setState({d6roll: Math.floor(Math.random() * 6) + 1});
    }

    Deight = () => {
        const {d8roll} = this.state;
        return this.setState({d8roll: Math.floor(Math.random() * 8) + 1})
    }

    Dten = () => {
        const {d10roll} = this.state;
        return this.setState({d10roll: Math.floor(Math.random() * 10) + 1})
    }

    Dtwelve = () => {
        const {d12roll} = this.state;
        return this.setState({d12roll: Math.floor(Math.random() * 12) + 1})
    }

    Dtwenty = () => {
        const {d20roll} = this.state;
        return this.setState({d20roll: Math.floor(Math.random() * 20) + 1})
    }
    
    render(){
        const {d6roll} = this.state;
        const {d4roll} = this.state;
        const {d8roll} = this.state;
        const {d10roll} = this.state;
        const {d12roll} = this.state;
        const {d20roll} = this.state;

    return(
        <div>
             <button onClick={this.Dfour}>1d4</button> 
                <p>{this.state.d4roll}</p>

           <button onClick={this.Dsix}>1d6</button> 
                <p>{this.state.d6roll}</p>

            <button onClick={this.Deight}>1d8</button> 
                <p>{this.state.d8roll}</p>

            <button onClick={this.Dten}>1d10</button> 
                <p>{this.state.d10roll}</p>

            <button onClick={this.Dtwelve}>1d12</button> 
                <p>{this.state.d12roll}</p>

            <button onClick={this.Dtwenty}>1d20</button> 
                <p>{this.state.d20roll}</p>
                    
        </div>
    )
    }
}