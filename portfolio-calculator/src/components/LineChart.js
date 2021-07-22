/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { Legend, Title } from 'chart.js'
import { func } from 'prop-types'
import React, { Component, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Button } from './Button'
import './LineChart.css'

class LineChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticket: '',
            interval: '1wk',
            date: [],
            stockPrice: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch(`http://127.0.0.1:5000/portfolio?ticket=${this.state.ticket}&interval=${this.state.interval}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => this.setState({date: json.date, stockPrice: json.stockPrice}))   
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
                    <form onSubmit={this.handleSubmit}>
                        <label className="ticket">Stock ticket :</label>
                        <input className="input" onChange={this.handleChange}></input>
                        <Button type="submit">
                            Find
                        </Button>
                        {/* Add spaces between the two buttons + change style of those buttons */}
                        <Button type="submit" onClick={(e) => this.handleInterval(e, "1d")}>2 Months</Button>
                        <Button type="submit" onClick={(e) => this.handleInterval(e, "1wk")}>1 Year</Button>
                        <Button type="submit" onClick={(e) => this.handleInterval(e, "1mo")}>5 Years</Button>
                    </form>
                </div>

                <div className="interval">
                    <form onSubmit={this.handleSubmitInterval}>
                        
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
                            responsive: true
                        }}
                    />   
                </div>
            </>
        )
    }
}

export default LineChart