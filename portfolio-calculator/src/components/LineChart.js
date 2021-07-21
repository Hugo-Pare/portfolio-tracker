/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    return <div>
        <Line
            data={{
                labels: ['16','17','18','19','20'],
                datasets:[{
                    data: [4000,6000,9000,20000,50000]
                }]
            }}
            height={400}
            width={400}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
}
export default LineChart