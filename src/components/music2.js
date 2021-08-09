import React from 'react';
import './music.css';
import song from '../sounds/song.mp3';
import useSound from 'use-sound';
import playButton from '../images/play.png';
import stopButton from '../images/stop.png';

export default function Music(props) {  
    const [play, { stop }] = useSound(song, { volume: 0.5 });

    const [isPlaying, setIsPlaying] = React.useState(
        props.playing
    );


    const playSong = () => {
        if (!isPlaying) {
            play();
            props.togglePlaying();
            setIsPlaying(true);
        }
    }

    const stopSong = () => {
        if (isPlaying) {
            stop();
            props.togglePlaying();
            setIsPlaying(false);
        }
    }
  
    return (
        <div className="row justify-content-center">
            <button className="btn-music" onClick={playSong}>
                <img src={playButton} className="music-image" alt="play button" />
            </button>

            <button className="btn-music" onClick={stopSong}>
                <img src={stopButton} className="music-image" alt="stop button" />
            </button>
      </div>
    );
}