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
            typeOfTransaction: this.state.typeOfTransaction
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
                <div className="barchart-container">
                    <Bar
                        data={{
                            // Has to be dates dd/mm/yyyy (example)
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
                                    data: [19, 9, 31, 56],
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
                                display: true
                            },
                            plugins: {
                                legend: {
                                    display: true
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

                <div className="data-input">
                    
                    <input className="input" type="text" placeholder="Buy or Sell" value={this.state.typeOfTransaction} onChange={e => this.updateInput('typeOfTransaction', e.target.value)}></input>
                    <input className="input" type="text" placeholder="Account Type" value={this.state.accountType} onChange={e => this.updateInput('accountType', e.target.value)}></input>
                    <input className="input" type="text" placeholder="DD/MM/YYYY" value={this.state.dateOfTransaction} onChange={e => this.updateInput('dateOfTransaction', e.target.value)}></input>
                    <input className="input" type="number" placeholder="Amount ($)" value={this.state.amount} onChange={e => this.updateInput('amount', e.target.value)}></input>
                    <button className="transaction-add-button" onClick={() => this.addTransaction()}>Add</button>
                    
                </div>

                <div>
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li className={item.typeOfTransaction.toLowerCase() === 'buy' ? "transaction-list-buy" : "transaction-list-sell"} key={item.id}>
                                    {"Type of Transaction : " + item.typeOfTransaction + " Account Type : " + item.accountType + " Year of Transaction : " + item.dateOfTransaction
                                    + " Amount : " + item.amount}
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