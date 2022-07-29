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
                description: '',
                url: '',
                image_url: '',
                snippet: '',
                source: ''
            },
            box1:{
                title:'',
                description: '',
                url: '',
                image_url: '',
                snippet: '',
                source: ''
            },
            box2:{
                title:'',
                description: '',
                url: '',
                image_url: '',
                snippet: '',
                source: ''
            },
            rebelInvestorBox:{
                title:'Rebel Investor',
                description: 'Financially independent self-directed investors sharing unbiased and fact-based investment knowledge for family and friends',
                url: 'https://pilotprojectsite.wordpress.com/',
                image_url: 'https://pilotprojectsite.files.wordpress.com/2015/12/cropped-rebelinvestor3.png?w=387',
                source: 'Anonymous'
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
            limit: '3',
            language: 'en'
        }

        var query = 'symbols=' + params['symbols'] + '&language=' + params['language'] + '&filter_entities=truelimit&api_token=' + params['api_token'];

        fetch("https://api.marketaux.com/v1/news/all?" + query, requestOptions)
            .then(response => response.json())
            // .then(json => console.log(json));
            .then(json => this.setState({
                box0: {
                    title: json.data[0].title,
                    description: json.data[0].description,
                    url: json.data[0].url,
                    image_url: json.data[0].image_url,
                    snippet: json.data[0].snippet,
                    source: json.data[0].source
                },
                box1: {
                    title: json.data[1].title,
                    description: json.data[1].description,
                    url: json.data[1].url,
                    image_url: json.data[1].image_url,
                    snippet: json.data[1].snippet,
                    source: json.data[1].source
                },
                box2: {
                    title: json.data[2].title,
                    description: json.data[2].description,
                    url: json.data[2].url,
                    image_url: json.data[2].image_url,
                    snippet: json.data[2].snippet,
                    source: json.data[2].source
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
                        url={this.state.box0.url}
                        source={this.state.box0.source}/>
                    <HomeBox 
                        title={this.state.box1.title} 
                        description={this.state.box1.description} 
                        image_url={this.state.box1.image_url} 
                        url={this.state.box1.url}
                        source={this.state.box1.source}/>
                    <HomeBox 
                        title={this.state.box2.title} 
                        description={this.state.box2.description} 
                        image_url={this.state.box2.image_url} 
                        url={this.state.box2.url}
                        source={this.state.box2.source}/>
                    <HomeBox
                        title={this.state.rebelInvestorBox.title} 
                        description={this.state.rebelInvestorBox.description} 
                        image_url={this.state.rebelInvestorBox.image_url} 
                        url={this.state.rebelInvestorBox.url}
                        source={this.state.rebelInvestorBox.source}/>
                </div>
            </>
        )
    }   
}

export default Feed;