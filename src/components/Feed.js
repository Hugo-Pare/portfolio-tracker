/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './Feed.css'
import HomeBox from './HomeBox';

class Feed extends Component{

    constructor(props) {
        super(props)
        this.state={
            text: ''
        }
    }

    async componentDidMount() {
        var requestOptions = {
            method: 'GET'
        };

        fetch("https://api.marketaux.com/v1/news/all?symbols=AAPL,TSLA&filter_entities=true&api_token=DoixORqY2kR8bCCiERMVK6Z844d6TNWXJUqY7oFo", requestOptions)
            .then((response) => {
                console.log(response);
                response.json().then((data) => {
                    console.log(data);
                });
            });
    }

    render(){

        return(
            <>
                <div className='text-padding'>
                    <HomeBox subject="Box 1"/>
                    <HomeBox subject="Box 2"/>
                    <HomeBox subject="Box 3"/>
                </div>
                <div>
                    
                </div>
            </>
        )
    }   
}

export default Feed;