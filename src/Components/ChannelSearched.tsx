import { useContext } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Channel} from "../Models/Stream";


export function ChannelSearched(props:{channel:Channel}) {

    const {addFaveChannel, removeFaveChannel, faveChannels} = useContext(StreamContext);

    function checkFavorites(){
        let foundItem = faveChannels.find((item)=>item.id === props.channel.id);
        if(foundItem) {
            return true;
        } else {
            return false;
        }
    }

 
   

    return (
        <div className="searchedframe">
            <div className="searched">
            <ul>

                <li>Playing: {props.channel.game_name}</li> 
                <li>{props.channel.title}</li> 
    
                <li className={props.channel.is_live === false ? 'offline' : 'live'}>{props.channel.is_live === false ? 'OFFLINE' : 'LIVE'}</li>
                <li><img alt='thumbnail url' src={(props.channel.thumbnail_url)}/></li>
            </ul>

            <div className='center'>

            <button> <a target="_blank" rel="noreferrer" href={'https://www.twitch.tv/' + props.channel.broadcaster_login}>Watch {props.channel.game_name} now!</a>  </button>

            {checkFavorites() === false ? <button className='notliked' onClick={()=> { addFaveChannel(props.channel)}}><span className={'material-icons-outlined'}>favorite</span></button> : <button className='liked' onClick={()=> { removeFaveChannel(props.channel.id)}}><span className={'material-icons-outlined'}>favorite</span></button> }
            </div>
            </div>
        </div>
    
);
}
