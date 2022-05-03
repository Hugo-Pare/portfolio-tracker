/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './HomeBox.css'

class HomeBox extends Component{

    handleClick = (e) => {
        e.preventDefault();
        console.log("clicked: " + this.props.url);
        window.open(this.props.url, '_blank').focus();
    };

    handleMouseOver = (e) => {
        e.preventDefault();
        e.target.style.color = 'purple';
    }

    handleMouseOut = (e) => {
        e.preventDefault();
        e.target.style.color = '';
    }

    render(){
        return(
            <>
                <div className='box'>
                    <div className='title' onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                        {this.props.title}
                    </div>
                    <div>
                        {this.props.description}
                    </div>
                </div>
            </>
        )
    }
}

export default HomeBox;