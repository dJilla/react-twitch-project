import axios from "axios";
import { useContext, useEffect } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Games } from "../Models/Stream";
import { TopGame } from "./TopGame";
const accessToken = process.env.REACT_APP_TWITCH_ACCESS_TOKEN || '';
const clientID = process.env.REACT_APP_TWITCH_CLIENT_ID || '';


export function TopGames() {


const { gamesList, setGames } = useContext(StreamContext)


function fetchGames() {
    axios.get<Games>(`https://api.twitch.tv/helix/games/top`, {
        headers : {
            'Authorization': `Bearer ${accessToken}`,
            'Client-Id': `${clientID}`
        }
    })
    .then(response =>setGames(response.data.data))
} 

useEffect(()=> {
    fetchGames();
},[]);



      return(
  
          <div className='topgames'>

           { gamesList.map(game=> <TopGame key={game.id} game={game}></TopGame>)}
             
          </div>
  
      );

  }


