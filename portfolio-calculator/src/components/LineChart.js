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
            interval: '1wk',
            date: [],
            stockPrice: [],
            companyName: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();

        await fetch(`http://127.0.0.1:5000/stockData?ticket=${this.state.ticket}&interval=${this.state.interval}`) // Include companyName with the same fetch call 
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => this.setState({date: json.date, stockPrice: json.stockPrice, companyName: json.companyName}))
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
        return (
            <>
                <div className="stock-finder">
                    <form onSubmit={(e) => {this.handleSubmit(e)}}>
                        <label className="ticket">Stock ticket :</label>
                        <input className="input" onChange={this.handleChange}></input>
                        <Button type="submit" >
                            Find
                        </Button>
                        {/* Add more interval buttons -> 1D, 1M, 3M, 6M, 10Y and remove 2M */}
                        <div className="intervalButtons">
                            <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "1d")}>2M</IntervalButton>
                            <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "1wk")}>1Y</IntervalButton>
                            <IntervalButton type="submit" onClick={(e) => this.handleInterval(e, "1mo")}>5Y</IntervalButton> 
                        </div>
                        <div>
                            <h1 className="company-name">
                                {this.state.companyName}
                            </h1>
                        </div>
                    </form>
                </div>
                
                <div className="chart-container">
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
                </div>
            </>
        )
    }
}

export default LineChart