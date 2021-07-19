/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return <div>
        <Bar
            data={{
                labels: ['2018','2019','2020','2021'],
                datasets:[{
                    data: [4000,6000,9000,20000]
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
export default BarChart