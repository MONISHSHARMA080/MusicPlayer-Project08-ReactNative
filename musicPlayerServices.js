import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { playListData } from "./src/constants"


export async function setupPlayer(){
    
    let isSetup = false;

    try {
        TrackPlayer.getActiveTrackIndex();
        isSetup = true
    } catch (error) {
        TrackPlayer.setupPlayer()
        isSetup = true
    }finally{
         return isSetup
    }
    
}

// loading the data (playListData)  
  export async function addTrack(){

    await TrackPlayer.add(playListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)

  }


export async function PlaybackService() {

    TrackPlayer.addEventListener(Event.RemotePause, ()=>{TrackPlayer.pause()})
    
    TrackPlayer.addEventListener(Event.RemotePlay, ()=>{TrackPlayer.play()})

    TrackPlayer.addEventListener(Event.RemoteNext, ()=>{TrackPlayer.skipToNext()})
    
    TrackPlayer.addEventListener(Event.RemotePrevious, ()=>{TrackPlayer.skipToPrevious()})
    
}
