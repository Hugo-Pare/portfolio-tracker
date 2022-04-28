/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './Feed.css'

class Feed extends Component{

    render(){
        return(
            <>
                <div className='text-padding'>
                    <div className='link-box'>
                        Box 1
                    </div>
                    <div className='link-box'>
                        Box 2
                    </div>
                    <div className='link-box'>
                        Box 3
                    </div>
                    
                </div>
            </>
        )
    }   
}

export default Feed;