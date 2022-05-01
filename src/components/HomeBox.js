/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './HomeBox.css'

class HomeBox extends Component{
    render(){
        return(
            <>
                <div className='box'>
                    <div className='title'>
                        {this.props.title}
                    </div>
                    {this.props.description}
                </div>
            </>
        )
    }
}

export default HomeBox;