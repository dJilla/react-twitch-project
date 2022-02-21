import { useEffect, useState } from "react";
import { Stream } from "../Models/Stream";
import { fetchTopStreams } from "../Service/TwitchApi";
import { TrendingResult } from "./TrendingResult";


export function TrendingPage() {

    const [topStreams, setTopStreams] = useState<Stream[]>([])

    useEffect(() => {
        fetchTopStreams().then(response =>  setTopStreams(response.data));
    },[])

    return(

        <div className='trendingpage'>
            {topStreams.map((stream, i) => <TrendingResult key={i} stream={stream}></TrendingResult>)}
        </div>
    );
}