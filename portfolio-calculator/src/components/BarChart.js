/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import './BarChart.css';

class BarChart extends Component {


    render() {
        return(
            <div className="chart-container">
                <Bar
                    data={{
                        labels: ['2018','2019','2020','2021'],
                        datasets:[
                            {
                                label: 'Dataset 1',
                                data: [23, 45, 87, 150],
                                backgroundColor: '#028A0f',
                                stack: 'Stack 0'
                            },
                            {
                                label: 'Dataset 2',
                                data: [-19, 9, 31, 56],
                                backgroundColor: '#ff0000',
                                stack: 'Stack 0'
                            },
                            {
                                label: 'Dataset 3',
                                data: [-98, -4, 78, 145],
                                backgroundColor: '#0000ff',
                                stack: 'Stack 1' 
                            }
                        ]
                    }}
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
                        },
                        scales: {
                            x: {
                                stacked: true
                            },
                            y: {
                                stacked: true
                            }
                        }
                    }}
                    height={10}
                    width={10}
                />
            </div>
            
        )
    }
}

export default BarChart;