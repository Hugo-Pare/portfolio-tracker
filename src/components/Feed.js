/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './Feed.css'
import HomeBox from './HomeBox';

class Feed extends Component{

    render(){
        return(
            <>
                <div className='text-padding'>
                    <HomeBox subject="Box 1"/>
                    <HomeBox subject="Box 2"/>
                    <HomeBox subject="Box 3"/>
                </div>
            </>
        )
    }   
}

export default Feed;