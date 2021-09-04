/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './IndexBar.css';

class IndexBar extends Component{

    constructor(props){
        super(props);
        this.state={}
    }

    render() {
        return(
            <>
                <div>
                    <div className="indexBox">Index</div>
                </div>
            </>
        )
    }
}

export default IndexBar;
        