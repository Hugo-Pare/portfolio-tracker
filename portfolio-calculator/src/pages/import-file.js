/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import XLSX from "xlsx";
import './import-file.css'
import { Button } from "../components/Button";
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import MaterialTable from 'material-table';

const EXTENSIONS = ['xlsx', 'xls', 'csv']

function File() {
    const [colDefs, setColDefs] = useState()
    const [data, setData] = useState()

    const [input, setInput] = useState(false)
    const [dates, setDates] = useState([])
    const [numberAccounts, setNumberAccounts] = useState(0)

    const getExention = (file) => {
        const parts = file.name.split('.')
        const extension = parts[parts.length - 1]
        return EXTENSIONS.includes(extension) // return boolean
    }

    const ExcelDateToJSDate = (date) => {
        let converted_date = new Date(Math.round((date - 25568) * 864e5));
        converted_date = String(converted_date).slice(4, 15)
        date = converted_date.split(" ")
        let day = date[1];
        let month = date[0];
        month = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(month) / 3 + 1
        if (month.toString().length <= 1)
            month = '0' + month
        let year = date[2];
        return String(day + '-' + month + '-' + year)
    }

    const convertToJson = (headers, data) => {
        const rows = []
        data.forEach(row => {
            let rowData = {}
            row.forEach((element, index) => {
                if(headers[index] == null) {
                    // do nothing
                }
                else{
                    if (index === 0 && headers[0].toLowerCase() === "date"){
                        rowData[headers[0]] = ExcelDateToJSDate(element)
                    }
                    else{
                        rowData[headers[index]] = element
                    }
                }
            })
            rows.push(rowData)

        });
        return rows
    }

    const importExcel = (e) => {
        const file = e.target.files[0]

        const reader = new FileReader()
        reader.onload = (event) => {
        //parse data

        const bstr = event.target.result
        const workBook = XLSX.read(bstr, { type: "binary" })

        //get first sheet
        const workSheetName = workBook.SheetNames[0]
        const workSheet = workBook.Sheets[workSheetName]
        //convert to array
        const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 })
        // console.log(fileData)
        const headers = fileData[0]
        const heads = headers.map(head => ({ title: head, field: head }))
        setColDefs(heads)

        //removing header
        fileData.splice(0, 1)


        setData(convertToJson(headers, fileData))

        // Set all variables of the graph

        const listDates = []

        convertToJson(headers, fileData).forEach(element => {
            if(element.Date !== undefined){
                listDates.push(element.Date)
            }
        })
        
        setDates(listDates)
        // number of accounts
        setNumberAccounts(heads.length - 1)

        // data from first account
        const listTrans = []
        convertToJson(headers, fileData).forEach((element) => {
            if(element.Date !== undefined){
                listTrans.push(element[Object.keys(element)[1]])
            } 
        })

        setInput(true)
    }


    if (file) {
        if (getExention(file)) {
            reader.readAsBinaryString(file)
        }
        else {
            alert("Invalid file input, Select Excel file")
        }
        } else {
            setData([])
            setColDefs([])
        }
    }

    const returnTotal = () => {
        const total = []
        let j = 0;
        while(data[j].Date !== undefined){
            let value = 0
            let k = 0
            while(k < numberAccounts){
                value += data[j][Object.keys(data[j])[k+1]];
                k++
            }
            total.push(value)
            j++;
        }
        return total;
    }

    const returnData = () => {
        const dataset = []
        const colors = ['#ff0000','#ff8000','#ffff00','#40ff00','#0000ff','#8000ff','#ff00bf']
        

        for(let i = 0; i < numberAccounts; i++){

            const listTrans = []

            data.forEach((element) => {
                if(element.Date !== undefined){
                    
                    listTrans.push(element[Object.keys(element)[i+1]]);
                } 
            })

            dataset.push({
                label: colDefs[i+1].title,
                data: listTrans,
                borderColor: colors[i]
            })
        }

        dataset.push({
            label: 'Total',
            data: returnTotal(),
            borderColor: '#000000'
        })

        return dataset
    }

    const xirr = () => {
        var xirr = require('xirr');
        var rate = xirr([
            {amount: -1000, when: new Date(2016, 0, 15)},
            {amount: -2500, when: new Date(2016, 1, 8)},
            {amount: -1000, when: new Date(2016, 3, 17)},
            {amount: 5050, when: new Date(2016, 7, 24)},
        ]);
        return rate*100;
    }

    return (
        <>
            <div className="import">
                <label className="custom-file-upload">
                    <input type="file" onChange={importExcel} />Choose File
                </label>
                <div className="table">
                    <MaterialTable 
                        title="Portfolio Data" 
                        options={{
                            emptyRowsWhenPaging: false, 
                            search: false,
                            showTitle: true,
                            toolbar:false,
                            paging: true,
                            headerStyle:{fontWeight: 'bold', fontSize: 20},
                            pageSize: 10,
                            pageSizeOptions:[10,20,30],
                            showFirstLastPageButtons: false
                        }}
                        data={data} 
                        columns={colDefs}
                        minRows={0}
                    />
                </div>
                
                <div>
                    {input ? 
                    <>
                    <div className="title">
                        You have -- $
                    </div>
                    <div className="container">
                        <div className="line-chart-container">
                            <Line
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    boxSizing: "content-box"
                                }}
                                data={{
                                    labels:dates,
                                    datasets:returnData()
                                }}
                                height={10}
                                width={10}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </div>
                        <div className="interest-rate">
                            Internal Rate of Return : {xirr()}%
                        </div>
                    </div>    
                    </>
                    :
                    <div>
                        {/* Returns nothing */}
                    </div>}
                </div>
            </div>
        </>
  );
}

export default File;

// Excel : =XIRR(B2:B14,A2:A14,0.1)

