/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as XLSX from "xlsx";
import './import-file.css'
import { Button } from "../components/Button";
import { Bar } from 'react-chartjs-2'
import moment from 'moment'

function File() {
    const [items, setItems] = useState([]);
    // const titleList = Object.keys(items[1])

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setItems(d);
            console.log(d);
        });

    };

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

    return (
        <>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <h1>Portfolio Dashboard</h1>
            </div>
            <div className="input-file">
                <label className="custome-file-upload">
                    <input
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            readExcel(file);
                        }}
                    />
                Choose File
                </label>
                <table>
                    <tbody>
                        
                        {
                            items.map((d) => (
                                <tr key={d.Item}>
                                    <td>{ExcelDateToJSDate(d.Date)}</td>
                                </tr>
                            ))

                        }
                        
                    </tbody>
                </table>
            </div>
            
        </>
    );
}

export default File;