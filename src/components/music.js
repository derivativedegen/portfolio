import React from "react";
import "./music.css";
import song from "../sounds/song.mp3";
import useSound from "use-sound";
import play from "../images/play.png";
import pause from "../images/pause.png";
import { useDispatch, useSelector } from "react-redux";
import { selectPlaying, setPlaying } from "../redux/data";

const audio = new Audio(song);

export default function Music(props) {
  const dispatch = useDispatch();
  const playing = useSelector(selectPlaying);

  const playButton = (
    <img src={play} className="music-image" alt="play button" />
  );
  const pauseButton = (
    <img src={pause} className="music-image" alt="pause button" />
  );

  const togglePlay = () => {
    const toggle = !playing;
    dispatch(setPlaying(toggle));

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <div>
      <button
        className={playing ? "btn-pause" : "btn-play"}
        onClick={togglePlay}
      >
        {playing ? pauseButton : playButton}
      </button>
    </div>
  );
}

/*
componentDidMount() {
  audio.addEventListener('ended', () => this.setState({ play: false }));
}

componentWillUnmount() {
  audio.removeEventListener('ended', () => this.setState({ play: false }));  
}
*/
