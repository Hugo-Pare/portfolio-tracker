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
                image_url: '',
                snippet: '',
                source: ''
            },
            box1:{
                title:'',
                desciption: '',
                url: '',
                image_url: '',
                snippet: '',
                source: ''
            },
            box2:{
                title:'',
                desciption: '',
                url: '',
                image_url: '',
                snippet: '',
                source: ''
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
            // .then(json => console.log(json));
            .then(json => this.setState({
                box0: {
                    title: json.data[0].title,
                    description: json.data[0].description,
                    url: json.data[0].url,
                    image_url: json.data[0].image_url,
                    snippet: json.data[0].snippet
                },
                box1: {
                    title: json.data[1].title,
                    description: json.data[1].description,
                    url: json.data[1].url,
                    image_url: json.data[1].image_url,
                    snippet: json.data[1].snippet
                },
                box2: {
                    title: json.data[2].title,
                    description: json.data[2].description,
                    url: json.data[2].url,
                    image_url: json.data[2].image_url,
                    snippet: json.data[2].snippet
                }
            }))
    }

    render(){

        return(
            <>
                <div className='text-padding'>
                    <HomeBox    
                        title={this.state.box0.title} 
                        description={this.state.box0.description} 
                        image_url={this.state.box0.image_url} 
                        url={this.state.box0.url}/>
                    <HomeBox 
                        title={this.state.box1.title} 
                        description={this.state.box1.description} 
                        image_url={this.state.box1.image_url} 
                        url={this.state.box1.url}/>
                    <HomeBox title={this.state.box2.title} description={this.state.box2.description} image_url={this.state.box2.image_url} url={this.state.box2.url}/>
                </div>
                <div>
                    
                </div>
            </>
        )
    }   
}

export default Feed;