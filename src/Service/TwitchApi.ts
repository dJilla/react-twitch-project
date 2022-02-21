import axios from 'axios';

import {Searched, Streams } from '../Models/Stream';

const accessToken = process.env.REACT_APP_TWITCH_ACCESS_TOKEN || '';
const clientID = process.env.REACT_APP_TWITCH_CLIENT_ID || '';


export function fetchTopStreams() {

    return axios.get<Streams>(`https://api.twitch.tv/helix/streams`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Client-Id': `${clientID}`
                    }
                })
                .then(response => response.data);
}

export function searchChannels(searchTerm:string){

    return axios.get<Searched>(`https://api.twitch.tv/helix/search/channels`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Client-Id': `${clientID}`
                },
                params: {
                    'query': searchTerm
                }  
                })
                .then(response => response.data);
}


