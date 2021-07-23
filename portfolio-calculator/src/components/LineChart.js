/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { Legend, Title } from 'chart.js'
import { func } from 'prop-types'
import React, { Component, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Button } from './Button'
import { IntervalButton } from './IntervalButton'
import './LineChart.css'

class LineChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticket: '',
            interval: '1y',
            date: [],
            stockPrice: [],
            companyName: '',
            validTicket: false,
            weekRange: '',
            prevClose: '',
            open: '',
            ask: '',
            bid: '',
            dayRange: '',
            yTargetEst: '',
            averageVolume: '',
            volume: '', marketCap: '', eps: '', forwardDividend: '', peRatio: '', beta: '', earningsDate: '', exDividendDate: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();

        fetch(`http://127.0.0.1:5000/stockData?ticket=${this.state.ticket}&interval=${this.state.interval}`) // Include companyName with the same fetch call 
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => this.setState({
            date: json.date, stockPrice: json.stockPrice, companyName: json.companyName, validTicket: true, attribute: json.attribute, value: json.value,
            weekRange: json.weekRange, prevClose: json.prevClose, open: json.open, ask: json.ask, bid: json.bid, dayRange: json.dayRange, yTargetEst: json.yTargetEst,
            averageVolume: json.averageVolume, volume: json.volume, marketCap: json.marketCap, eps: json.eps, forwardDividend: json.forwardDividend, peRatio: json.peRatio,
            beta: json.beta, earningsDate: json.earningsDate, exDividendDate: json.exDividendDate
        }))
    }

    handleSubmitInterval(e) {
        e.preventDefault();
        console.log(this.state.interval)
    }

    handleChange(e) {
        this.setState({ticket: e.target.value})
    }

    handleInterval(e, value) {
        e.preventDefault();
        this.setState({interval: value},
            () => this.handleSubmit(e))  
    }

    render() {

        const validTicket = this.state.validTicket;

        return (
            <>
                <div className="stock-finder">
                    <form onSubmit={(e) => {this.handleSubmit(e)}}>
                        <label className="ticker">Stock ticker :</label>
                        <input className="input" onChange={this.handleChange}></input>
                        <Button type="submit" >
                            Find
                        </Button>
                        <div>
                            <h1 className="company-name">
                                {this.state.companyName}
                            </h1>
                        </div>
                        {/* Add more interval buttons -> 2M, 6M, 1Y, 5Y, 10Y*/}
                        {validTicket
                        ?
                            <div className="intervalButtons">
                                <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "2mo")}>{this.state.interval === '2mo' 
                                ? <b className="boldIntervalButton">2M</b> : <div>2M</div>}</IntervalButton>
                                <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "6mo")}>{this.state.interval === '6mo' 
                                ? <b className="boldIntervalButton">6M</b> : <div>6M</div>}</IntervalButton> 
                                <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "1y")}>{this.state.interval === '1y' 
                                ? <b className="boldIntervalButton">1Y</b> : <div>1Y</div>}</IntervalButton>
                                <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "5y")}>{this.state.interval === '5y' 
                                ? <b className="boldIntervalButton">5Y</b> : <div>5Y</div>}</IntervalButton> 
                                <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "10y")}>{this.state.interval === '10y' 
                                ? <b className="boldIntervalButton">10Y</b> : <div>10Y</div>}</IntervalButton> 
                            </div>
                        : <div></div>
                        }
                    </form>
                </div>
                
                <div className="chart-container">
                    {validTicket ?
                    <Line
                        data={{
                            labels: this.state.date,
                            datasets:[{
                                data: this.state.stockPrice,
                                borderColor: '#028A0f',
                                fill: false,
                                label: 'Stock Price' 
                            }]
                        }}
                        height={10}
                        width={10}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            legend: {
                                display: false
                            },
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                        }}
                    /> 
                    : <div></div>} 
                </div>

                <div className="stock-stats">
                    {validTicket
                        ? (
                            <>
                                <div className="row">
                                    <div className="column">
                                        <p><b>52 Week Range</b></p>
                                        <p><b>Previous Close</b></p>
                                        <p><b>Open</b></p>
                                        <p><b>Ask</b></p>
                                        <p><b>Bid</b></p>
                                        <p><b>Day's Range</b></p>
                                        <p><b>1y Target Est</b></p>
                                        <p><b>Average Volume</b></p>
                                        <p><b>Volume</b></p>
                                    </div>
                                        
                                    <div className="column">
                                        <p>{this.state.weekRange}</p>
                                        <p>{this.state.prevClose}</p>
                                        <p>{this.state.open}</p>
                                        <p>{this.state.ask}</p>
                                        <p>{this.state.bid}</p>
                                        <p>{this.state.dayRange}</p>
                                        <p>{this.state.yTargetEst}</p>
                                        <p>{this.state.averageVolume}</p>
                                        <p>{this.state.volume}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="column">
                                        <p><b>Market Cap</b></p>
                                        <p><b>EPS (TTM)</b></p>
                                        <p><b>Forward Dividend (Yield)</b></p>
                                        <p><b>PE Ratio (TTM)</b></p>
                                        <p><b>Beta (5Y Monthly)</b></p>
                                        <p><b>Earnings Date</b></p>
                                        <p><b>Ex-Dividend Date</b></p>
                                    </div>
                                        
                                    <div className="column">
                                        <p>{this.state.marketCap}</p>
                                        <p>{this.state.eps}</p>
                                        <p>{this.state.forwardDividend}</p>
                                        <p>{this.state.peRatio}</p>
                                        <p>{this.state.beta}</p>
                                        <p>{this.state.earningsDate}</p>
                                        <p>{this.state.exDividendDate}</p>
                                    </div>
                                </div>
                            
                             </>   
                        )
                        : <div></div> // Returns nothing
                    }
                </div>
            </>
        )
    }
}

export default LineChart