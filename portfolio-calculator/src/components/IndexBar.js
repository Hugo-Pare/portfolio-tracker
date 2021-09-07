/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './IndexBar.css';

class IndexBar extends Component{

    constructor(props){
        super(props);
        this.state={
            live_stanPoor: null,
            stanPoor: null,
            prev_stanPoor: null,
            live_dow: null,
            dow: null,
            prev_dow: null,
            live_nasdaq: null,
            nasdaq: null,
            prev_nasdaq: null,
            marketStatus: null,
            loading: true
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
            prev_stanPoor: data.prev_stanPoor,
            live_dow: data.live_dow,
            dow: data.dow,
            prev_dow: data.prev_dow,
            live_nasdaq: data.live_nasdaq,
            nasdaq: data.nasdaq,
            prev_nasdaq: data.prev_nasdaq,
            marketStatus: data.marketStatus,
            loading: false
        }))
    }

    render() {

        let andCharacter = "&";

        const live_stanPoor = this.state.live_stanPoor;
        const prev_stanPoor = this.state.prev_stanPoor;
        const stanPoor = this.state.stanPoor;

        const live_dow = this.state.live_dow;
        const prev_dow = this.state.prev_dow;
        const dow = this.state.dow;

        const live_nasdaq = this.state.live_nasdaq;
        const prev_nasdaq = this.state.prev_nasdaq;
        const nasdaq = this.state.nasdaq;

        const diffStanPoor = (live_stanPoor - prev_stanPoor).toFixed(2);
        const percStanPoor = ((diffStanPoor/live_stanPoor)*100).toFixed(2);

        const diffDow = (live_dow - prev_dow).toFixed(2);
        const percDow = ((diffDow/live_dow)*100).toFixed(2);

        const diffNasdaq = (live_nasdaq - prev_nasdaq).toFixed(2);
        const percNasdaq = ((diffNasdaq/live_nasdaq)*100).toFixed(2);

        return(
            <>
                <div>
                    {this.state.loading ?
                        <div className="indexBox">
                            <b>Loading...</b>
                        </div>
                    :
                    <>
                        {this.state.marketStatus === "open" ? 
                            <div className="indexBox">
                                <div className="marketStatusBox">
                                    <b><p>Market Open</p></b>
                                </div>
                                <div className="index">
                                    S{andCharacter}P 500 : {stanPoor} Dow Jones : {dow} Nasdaq : {nasdaq}
                                </div>
                            </div>
                        :
                            <div className="indexBox">
                                <div className="marketStatusBox">
                                    <b><p>Market Closed</p></b>
                                </div>
                                <div className="index">
                                    <div className="child-index">
                                       <b>
                                            <div className="index-value">S{andCharacter}P 500 : {live_stanPoor}</div>
                                            {diffStanPoor >= 0 ?<div className="index-positive">+{diffStanPoor} ({percStanPoor}%)</div>
                                            :<div className="index-negative">{diffStanPoor} ({percStanPoor}%)</div>}
                                       </b>
                                    </div>
                                    <div className="child-index">
                                        <b>
                                            <div className="index-value">Dow Jones : {live_dow}</div> 
                                            {diffDow >= 0 ?<div className="index-positive">+{diffDow} ({percDow}%)</div>
                                            :<div className="index-negative">{diffDow} ({percDow}%)</div>}
                                        </b>
                                    </div>
                                    <div className="child-index">
                                        <b>
                                            <div className="index-value">Nasdaq : {live_nasdaq}</div>
                                            {diffNasdaq >= 0 ?<div  className="index-positive">+{diffNasdaq} ({percNasdaq}%)</div>
                                            :<div className="index-negative">{diffNasdaq} ({percNasdaq}%)</div>}
                                        </b>
                                    </div>
                                </div>
                            </div>
                        }
                    </>    
                    }
                </div>
            </>
        )
    }
}

export default IndexBar;
        
{/* <i className="fas fa-caret-down"></i>
<i className="fas fa-caret-up"></i> */}