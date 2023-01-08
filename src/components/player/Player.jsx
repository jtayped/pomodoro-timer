import "./player.css";
import React, { useState } from "react";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import TrackList from "./tracks";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // eslint-disable-next-line
  const [currentTrack, setCurrentTrack] = useState(null);
  const [audioElement, setAudioElement] = useState(null);

  const handlePlay = () => {
    const index = Math.floor(Math.random() * TrackList.length);
    const track = TrackList[index];

    setCurrentTrack(track);

    const audio = new Audio(track.src);
    setAudioElement(audio);

    audio.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioElement.pause();
    setIsPlaying(false);
  };

  const handleEnded = () => {
    handlePlay();
  };

  return (
    <div className="player">
      {isPlaying ? (
        <button onClick={handlePause}>
          <VolumeUp className="player-icon" />
        </button>
      ) : (
        <button onClick={handlePlay}>
          <VolumeOff className="player-icon" />
        </button>
      )}
      <audio onEnded={handleEnded} />
    </div>
  );
};

export default Player;
