import { useContext } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Game } from "../Models/Stream";

export function TopGame(props:{game:Game}) {

    const {addFaveGame, removeFaveGame, faveGames} = useContext(StreamContext);

    function checkFavorites(){
        let foundItem = faveGames.find((item)=> item.id === props.game.id);
        if(foundItem) {
            return true;
        } else {
            return false;
        }
    }
    

    return (
        <div className='topgamecontainer'>
            <ul>
                <li className='topgame'>
                    <a target="_blank" rel="noreferrer" href={'https://www.twitch.tv/directory/game/' + props.game.name}>{props.game.name}</a>
                    <a target="_blank" rel="noreferrer" href={'https://www.twitch.tv/directory/game/' + props.game.name}><img alt='game box art' src={(props.game.box_art_url).replace('{width}', '155').replace('{height}', '204')}/></a>
                </li>
            </ul>

           


            {checkFavorites() === false ? <button className='notliked' onClick={()=> { addFaveGame(props.game)}}><span className={'material-icons-outlined'}>favorite</span></button> : <button className='liked' onClick={()=> { removeFaveGame(props.game.id)}}><span className={'material-icons-outlined'}>favorite</span></button> }
        
        </div>
    
);
}

