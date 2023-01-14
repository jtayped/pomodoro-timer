import "./player.css";
import React, { useState } from "react";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import TrackList from "./tracks";
import { motion } from "framer-motion";

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
    <motion.div
      className="player"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "35%", opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
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
    </motion.div>
  );
};

export default Player;
