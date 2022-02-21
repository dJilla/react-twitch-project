import { Stream, Channel, Game } from "../Models/Stream";
import { createContext} from 'react';


export interface StreamContextModel {
   
    favorites:Stream[];
    faveChannels:Channel[];
    gamesList:Game[];
    faveGames:Game[];
    addFave:(stream:Stream)=>void;
    addFaveChannel:(channel:Channel)=>void;
    addFaveGame:(game:Game)=>void;
    removeFave:(id:string)=>void;
    removeFaveChannel:(id:string)=>void;
    removeFaveGame:(id:string)=>void;
    setGames:(games:Game[])=>void;  
}

const defaultValue:StreamContextModel = {
   
    favorites:[],
    faveChannels:[],
    gamesList:[],
    faveGames:[],
    addFave:()=>{},
    addFaveChannel:()=>{},
    addFaveGame:()=>{},
    removeFaveGame:()=>{},
    removeFave:()=>{},
    removeFaveChannel:()=>{},
    setGames:()=>{},
}

export const StreamContext = createContext<StreamContextModel>(defaultValue);
