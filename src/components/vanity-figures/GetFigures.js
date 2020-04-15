import React, { Component } from 'react'

import VanityFigure from "../VanityFigure"
class GetFigures extends Component {

    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            conversations: "",
            interactions: "",
            players:"",
            data: null
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        fetch("https://hello-lamp-post-api.herokuapp.com/locations/58")
        .then(res => res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded: true,
                    data: result,
                    conversations: result.conversations,
                    interactions: result.player_messages,
                    players: result.players
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
            
        )
    }

    render() {

        const {
            error,
            isLoaded,
            conversations,
            interactions,
            players
        } = this.state;

        if(error){
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded){
            return <div>Loading...</div>;

        }else{
            return (
                <div className="vanity-figures">
                    <VanityFigure unit={conversations} figureType="Conversations"/>
                    <VanityFigure unit={interactions} figureType="Interactions"/>
                    <VanityFigure unit={players} figureType="Players"/>
                </div>
            )
        }
    }
}

export default GetFigures