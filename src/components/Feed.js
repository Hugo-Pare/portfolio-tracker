/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react'
import './Feed.css'
import HomeBox from './HomeBox';

class Feed extends Component{

    constructor(props) {
        super(props)
        this.state={
            box0:{
                title:'',
                desciption: '',
                url: '',
                image_url: ''
            },
            box1:{
                title:'',
                desciption: '',
                url: '',
                image_url: ''
            },
            box2:{
                title:'',
                desciption: '',
                url: '',
                image_url: ''
            }
        }
    }

    async componentDidMount() {
        var requestOptions = {
            method: 'GET'
        };

        var params = {
            api_token: 'DoixORqY2kR8bCCiERMVK6Z844d6TNWXJUqY7oFo',
            symbols: 'SPY,DIA,QQQ',
            limit: '3'
        }

        var query = 'symbols=' + params['symbols'] + '&filter_entities=truelimit&api_token=' + params['api_token'];

        fetch("https://api.marketaux.com/v1/news/all?" + query, requestOptions)
            .then(response => response.json())
            .then(json => this.setState({
                box0: {
                    title: json.data[0].title,
                    description: json.data[0].description,
                    url: json.data[0].url,
                    image_url: json.data[0].image_url
                },
                box1: {
                    title: json.data[1].title,
                    description: json.data[1].description,
                    url: json.data[1].url,
                    image_url: json.data[1].image_url
                },
                box2: {
                    title: json.data[2].title,
                    description: json.data[2].description,
                    url: json.data[2].url,
                    image_url: json.data[2].image_url
                }
            }))
    }

    render(){

        return(
            <>
                <div className='text-padding'>
                    <HomeBox title={this.state.box0.title} description={this.state.box0.description}/>
                    <HomeBox title={this.state.box1.title} description={this.state.box1.description}/>
                    <HomeBox title={this.state.box2.title} description={this.state.box2.description}/>
                </div>
                <div>
                    
                </div>
            </>
        )
    }   
}

export default Feed;