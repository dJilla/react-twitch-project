import { useContext } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Stream } from "../Models/Stream";
import { ChannelSearched } from "./ChannelSearched";
import { TopGame } from "./TopGame";
import { TrendingResult } from "./TrendingResult";


export function FavoritesPage() {

    const {favorites, faveChannels, faveGames} = useContext(StreamContext);

    let favoriteStreams = JSON.parse(localStorage.getItem('favedStreams')|| '{}')
    let favoriteGames = JSON.parse(localStorage.getItem('favedGames')|| '{}')
    let favoriteChannels = JSON.parse(localStorage.getItem('favedChannels')|| '{}')



   
    return(

        <div className='favoritespage'>

            <div className='favorites'>

                <h2>Trending Favorites</h2>
                <div className='favoritetrending'>
                    {favorites.length > 0 ? favorites.map((stream, i) => <TrendingResult key={i} stream={stream}></TrendingResult>): <h3>You haven't favorited any trending channels yet :)</h3>}
                </div>

                <h2>Favorite Channels from Search</h2>
                <div className='favoritesearches'>
                    {faveChannels.length > 0 ? faveChannels.map((channel, i) => <ChannelSearched key={i} channel={channel}></ChannelSearched>) : <h3>You haven't favorited any searched channels yet :)</h3>}
                </div>

                <h2>Favorite Games</h2>
                <div className='favoritegames'>
                    {faveGames.length > 0 ? faveGames.map((game, i) => <TopGame key={i} game={game}></TopGame>) : <h3>You haven't favorited any games yet :)</h3>}
                </div>
    
            </div>
        </div>
    );
    
}