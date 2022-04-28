/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './HomeBox.css'

class HomeBox extends Component{
    render(){
        return(
            <>
                <div className='box'>
                    {this.props.subject}
                </div>
            </>
        )
    }
}

export default HomeBox;