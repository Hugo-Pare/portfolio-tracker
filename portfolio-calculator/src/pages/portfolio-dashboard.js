import React from 'react';
import BarChart from '../components/BarChart.js'

const PortfolioDashboard = () => {
    return(
        <>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <h1>Portfolio Dashboard</h1>
            </div>
            
            <BarChart />
            
        </>
    )
}

export default PortfolioDashboard;