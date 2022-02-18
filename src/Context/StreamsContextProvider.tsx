import {  ReactNode, useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import { Channel, Game, Stream, Streams } from "../Models/Stream";
import { StreamContext } from "../Context/StreamsContext";




interface Props {children:ReactNode;}

export function StreamContextProvider({children}:Props) {


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 9b648fd3ce0c8d9db460ef999d9e4e9b7e77084d
=======
//localStorage implementation
>>>>>>> 192b4b3be037b364d5006466a3ae4984af07ad4c
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

    

function addFave(stream:Stream) {

    setFavorites([...favorites,stream]);
}

function removeFave(id:string) {
    setFavorites(favorites.filter((stream)=> stream.user_id != id));

}

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 9b648fd3ce0c8d9db460ef999d9e4e9b7e77084d
const [faveChannels, setFaveChannels] = useState<Channel[]>(()=> {
    const saved = localStorage.getItem('favedChannels') || '{}';
    const initialValue = JSON.parse(saved);
    return initialValue || [];
})
<<<<<<< HEAD

=======
>>>>>>> 9b648fd3ce0c8d9db460ef999d9e4e9b7e77084d
=======
>>>>>>> 192b4b3be037b364d5006466a3ae4984af07ad4c

function addFaveChannel(channel:Channel) {
    setFaveChannels([...faveChannels,channel]);
}

function removeFaveChannel(id:string) {
    setFaveChannels(faveChannels.filter((channel)=> channel.id != id));

}

const [gamesList, setGamesList] = useState<Game[]>([])


<<<<<<< HEAD
<<<<<<< HEAD
=======
useEffect(()=> {
    localStorage.setItem('favedGames', JSON.stringify(faveGames));
    localStorage.setItem('favedChannels', JSON.stringify(faveChannels));
    localStorage.setItem('favedStreams', JSON.stringify(favorites));
    }, [faveGames, faveChannels, favorites])
>>>>>>> 9b648fd3ce0c8d9db460ef999d9e4e9b7e77084d
=======
>>>>>>> 192b4b3be037b364d5006466a3ae4984af07ad4c

function addFaveGame(game:Game) {

    setFaveGames([...faveGames,game]);
    
}

function removeFaveGame(id:string) {
    setFaveGames(faveGames.filter((game)=> game.id != id));
}

function setGames(games:Game[]){
    setGamesList(games)
}

useEffect(()=> {
    localStorage.setItem('favedGames', JSON.stringify(faveGames));
    localStorage.setItem('favedChannels', JSON.stringify(faveChannels));
    localStorage.setItem('favedStreams', JSON.stringify(favorites));
    }, [faveGames, faveChannels, favorites])


    return (

        <StreamContext.Provider value={{faveGames, gamesList, setGames, addFaveGame, removeFaveGame, faveChannels, addFaveChannel, removeFaveChannel, favorites, addFave, removeFave}}>
            {children}
        </StreamContext.Provider>  
    );
}
