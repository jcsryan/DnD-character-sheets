import React from 'react';


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
        return this.setState({d4roll: Math.floor(Math.random() * 4) + 1})
    }

    Dsix = () => {
        return this.setState({d6roll: Math.floor(Math.random() * 6) + 1});
    }

    Deight = () => {
        return this.setState({d8roll: Math.floor(Math.random() * 8) + 1})
    }

    Dten = () => {
        return this.setState({d10roll: Math.floor(Math.random() * 10) + 1})
    }

    Dtwelve = () => {
        return this.setState({d12roll: Math.floor(Math.random() * 12) + 1})
    }

    Dtwenty = () => {
        return this.setState({d20roll: Math.floor(Math.random() * 20) + 1})
    }
    
    render(){
     
    return(
        <div className='DiceRoll'>
            <div className="buttonDiv">
                <button onClick={this.Dfour}>1d4</button> 
                <button onClick={this.Dsix}>1d6</button>
                <button onClick={this.Deight}>1d8</button> 
                <button onClick={this.Dten}>1d10</button> 
                <button onClick={this.Dtwelve}>1d12</button> 
                <button onClick={this.Dtwenty}>1d20</button> 
            </div>
            <div className="results">
                <p>D4: {this.state.d4roll}</p>
                <p>D6: {this.state.d6roll}</p>
                <p>D8: {this.state.d8roll}</p>
                <p>D10: {this.state.d10roll}</p>
                <p>D12: {this.state.d12roll}</p>
                <p>D20: {this.state.d20roll}</p>
            </div>
        </div>
    )
    }
}