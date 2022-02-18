import {  ReactNode, useEffect, useState } from "react";
import { Channel, Game, Stream, Streams } from "../Models/Stream";
import { StreamContext } from "../Context/StreamsContext";

interface Props {children:ReactNode;}

export function StreamContextProvider({children}:Props) {


// initial list of games
const [gamesList, setGamesList] = useState<Game[]>([])


// localStorage implementation
const [favorites, setFavorites] = useState<Stream[]>(()=> {
    const saved = localStorage.getItem('favedStreams') || '{}';
    const initialValue = JSON.parse(saved);
    return initialValue || [];
})
// localStorage implementation
const [faveGames, setFaveGames] = useState<Game[]>(()=> {
    const saved = localStorage.getItem('favedGames') || '{}';
    const initialValue = JSON.parse(saved);
    return initialValue || [];
})

//localStorage implementation
const [faveChannels, setFaveChannels] = useState<Channel[]>(()=> {
    const saved = localStorage.getItem('favedChannels') || '{}';
    const initialValue = JSON.parse(saved);
    return initialValue || [];
})

useEffect(()=> {
    localStorage.setItem('favedGames', JSON.stringify(faveGames));
    localStorage.setItem('favedChannels', JSON.stringify(faveChannels));
    localStorage.setItem('favedStreams', JSON.stringify(favorites));
    }, [faveGames, faveChannels, favorites])


// add and remove faved Streams
function addFave(stream:Stream) {

    setFavorites([...favorites,stream]);
}

function removeFave(id:string) {
    setFavorites(favorites.filter((stream)=> stream.user_id != id));

}

// add and remove faved Channels
function addFaveChannel(channel:Channel) {
    setFaveChannels([...faveChannels,channel]);
}

function removeFaveChannel(id:string) {
    setFaveChannels(faveChannels.filter((channel)=> channel.id != id));

}


// add and remove faved Games

function addFaveGame(game:Game) {
    setFaveGames([...faveGames,game]);  
}

function removeFaveGame(id:string) {
    setFaveGames(faveGames.filter((game)=> game.id != id));
}

function setGames(games:Game[]){
    setGamesList(games)
}


    return (

        <StreamContext.Provider value={{faveGames, gamesList, setGames, addFaveGame, removeFaveGame, faveChannels, addFaveChannel, removeFaveChannel, favorites, addFave, removeFave}}>
            {children}
        </StreamContext.Provider>  
    );
}

