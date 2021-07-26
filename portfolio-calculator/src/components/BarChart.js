/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import './BarChart.css';
import { Button } from '../components/Button.js';
import {$,jQuery} from 'jquery';
import { object } from 'prop-types';

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
            },
            data: [],
            dates: [],
            amountList: []
        }
    }

    updateInput(key, value){
        this.setState({
            [key]: value
        })
    }

    removeTransaction(id){
        const list = [...this.state.list];

        const indexToRemove = list.findIndex(x => x.id === id);
        console.log(indexToRemove)

        const data = [...this.state.data];
        const dates = [...this.state.dates];
        const amountList = [...this.state.amountList];

        const dateToRemove = list[indexToRemove]['dateOfTransaction']
        const dateIndex = dates.indexOf(dateToRemove)

        const amountToRemove = list[indexToRemove]['amount']
        const amountIndex = amountList.indexOf(parseInt(amountToRemove))

        const updatedList = list.filter(item => item.id !== id);
        

        //filter arrays 
        const updatedDates = []
        const updatedAmounts = []

        for(var j = 0; j < dates.length; j++){
            if(j !== dateIndex){
                updatedDates.push(dates[j])
            }
        }
        console.log(updatedDates)
        
        for(var i = 0; i < amountList.length; i++){
            if(i !== amountIndex){
                updatedAmounts.push(amountList[i])
            }
        }
        console.log(updatedAmounts)
        

        //setState

        this.setState({
            list: updatedList,
            amountList: updatedAmounts,
            dates: updatedDates
        });

        
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

        const allData = [...this.state.data]
        const dateList = []
        const amountList = []

        if(this.state.typeOfTransaction.toUpperCase() === 'SELL'){
            const negativeAmount = parseFloat(this.state.amount) * -1
            allData.push({
                amountTotal: negativeAmount,
                date: new Date(this.state.dateOfTransaction)
            })
        }
        else{
            allData.push({
                amountTotal: parseFloat(this.state.amount),
                date: new Date(this.state.dateOfTransaction)
            })
        }
        const sortedData = allData.sort((a,b) => a.date - b.date)
        console.log(sortedData)
        
        for(var i = 0; i < sortedData.length; i++){
            var obj = sortedData[i];
            dateList.push(obj['date'].toISOString().slice(0, 10))
            amountList.push(obj['amountTotal'])
        }

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
            },
            data: sortedData,
            dates: dateList,
            amountList: amountList
        });
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
                            datasets: [{
                                label: 'Money Invested',
                                data: this.state.amountList,
                                backgroundColor: '#ff3333'
                            }]
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