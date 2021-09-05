/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './IndexBar.css';

class IndexBar extends Component{

    constructor(props){
        super(props);
        this.state={
            live_stanPoor: null,
            stanPoor: null,
            live_dow: null,
            dow: null,
            live_nasdaq: null,
            nasdaq: null,
            marketStatus: null
        }
    }

    async componentDidMount() {

        fetch(`http://127.0.0.1:5000/index`,
        {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            live_stanPoor: data.live_stanPoor,
            stanPoor: data.stanPoor,
            live_dow: data.live_dow,
            dow: data.dow,
            live_nasdaq: data.live_nasdaq,
            nasdaq: data.nasdaq,
            marketStatus: data.marketStatus
        }))
    }

    render() {

        let andCharacter = "&"

        return(
            <>
                <div>
                    <div className="indexBox">
                        <div className="marketStatusBox">
                            {this.state.marketStatus ? <p>Market Open</p> : <p>Market Closed</p>}
                        </div>
                        <div className="index">
                            S{andCharacter}P 500 : {this.state.stanPoor} Dow Jones : {this.state.dow} Nasdaq : {this.state.nasdaq}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default IndexBar;
        