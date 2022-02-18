import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { StreamContext } from "../Context/StreamsContext";

export function Header() {

    const {faveChannels, faveGames, favorites} = useContext(StreamContext);

    const numFaves = faveChannels.length + faveGames.length + favorites.length;
    return (

        <div>
            <h1><a target="_blank" href="https://www.twitch.tv/">SWITCH</a></h1> 
            
            <div className="nav">
            <NavLink to='/'>Trending</NavLink>
            <NavLink to='/TopGames'>Top Games</NavLink>
            <NavLink to='/Search'>Search</NavLink>
            <NavLink to='/Favorites'>Favorites ({numFaves})</NavLink>
            </div>
        </div>
    );
}

