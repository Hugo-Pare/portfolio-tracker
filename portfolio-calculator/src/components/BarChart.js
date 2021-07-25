/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import './BarChart.css';
import { Button } from '../components/Button.js';

class BarChart extends Component {

    constructor(props) {
        super(props)
        this.state={
            list: [],
            accountType: '',
            dateOfTransaction:  '',
            amount: '',
            typeOfTransaction: '',
            newTransaction: {
                accountType: '',
                dateOfTransaction:  '',
                amount: '',
                typeOfTransaction: ''
            }
        }
    }

    updateInput(key, value){
        this.setState({
            [key]: value
        })
    }

    removeTransaction(id){
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({list: updatedList});
    }

    addTransaction() {
        const newTransaction={
            id: 1 + Math.random(),

            accountType: this.state.accountType,
            dateOfTransaction: this.state.dateOfTransaction,
            amount: this.state.amount,
            typeOfTransaction: this.state.typeOfTransaction.toUpperCase()
        };

        const list = [...this.state.list];

        list.push(newTransaction);

        console.log(list)

        this.setState({
            list,
            accountType: '',
            dateOfTransaction:  '',
            amount: '',
            typeOfTransaction: '',
            newTransaction:{
                accountType: '',
                dateOfTransaction:  '',
                amount: '',
                typeOfTransaction: ''
            }
        })
        
    }

    render() {
        return(
            <>
                {this.state.list.length > 0 ? 
                <div className="barchart-container">
                    <Bar
                        data={{
                            // Has to be dates dd/mm/yyyy (example)
                            labels: this.state.dates,
                            datasets:[
                                {
                                    label: 'Dataset 1',
                                    data: [23, 45, 87, 150]
                                },
                                {
                                    label: 'Dataset 2',
                                    data: [19, 9, 31, 56]
                                },
                                {
                                    label: 'Dataset 3',
                                    data: [-98, -4, 78, 145]
                                }
                            ]
                        }}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            legend: {
                                display: true
                            },
                            plugins: {
                                legend: {
                                    display: true
                                }
                            },
                            scales: {
                                xAxes:[{
                                    type: 'time',
                                    time: {
                                        unit: 'year'
                                    }
                                }]
                            }
                        }}
                        height={10}
                        width={10}
                    />
                </div>
                :
                <div></div>}

                <div className="data-input">
                    
                    <input className="input" type="text" placeholder="Buy or Sell" value={this.state.typeOfTransaction} onChange={e => this.updateInput('typeOfTransaction', e.target.value)}></input>
                    <input className="input" type="text" placeholder="Account Type" value={this.state.accountType} onChange={e => this.updateInput('accountType', e.target.value)}></input>
                    <input className="input" type="date" placeholder="Date of Transaction" value={this.state.dateOfTransaction} onChange={e => this.updateInput('dateOfTransaction', e.target.value)}></input>
                    <input className="input" type="number" placeholder="Amount ($)" value={this.state.amount} onChange={e => this.updateInput('amount', e.target.value)}></input>
                    <button className="transaction-add-button" onClick={() => this.addTransaction()}>Add</button>
                    
                </div>

                <div>
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li className={item.typeOfTransaction.toUpperCase() === 'SELL' ? "transaction-list-sell" : "transaction-list-buy"} key={item.id}>
                                    {"Type of Transaction : " + item.typeOfTransaction + " Account Type : " + item.accountType + " Year of Transaction : " + item.dateOfTransaction
                                    + " Amount : " + item.amount + " "}
                                    <Button onClick={() => this.removeTransaction(item.id)}>X</Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </> 
        )
    }
}

export default BarChart;