import { useEffect, useState } from "react";
import { searchChannels } from "../Service/TwitchApi";
import { Channel } from "../Models/Stream";
import { ChannelSearched } from "./ChannelSearched";

export function SearchPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchList, setSearchList] = useState<Channel[]>([]);

    useEffect(() => {
        if (searchTerm === '') {

        } else {
            searchChannels(searchTerm).then(response => setSearchList(response.data));
        }
        
    },[searchTerm]);

        return (

            <div>
               
                <input className="searchinput" placeholder='Type here to search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' name='channelSearch'/>
                {/* <button className='testbutton' onClick={() => setSearchTerm(searchTerm)}>Search</button> */}
                

                {searchList.map((channel, i) => <ChannelSearched key={i} channel={channel}></ChannelSearched>)}

            </div>
        );
}
