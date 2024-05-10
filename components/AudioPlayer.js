import React, { useState } from 'react';
import styles from "./AudioPlayer.module.sass";

const AudioPlayer = ({ src , id}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <span>{id}</span>
      <audio ref={audioRef} src={src} />
      <button className={styles.audio_icon} onClick={togglePlay}>
        {isPlaying ? (
          <img  src="images/icons/altavoz-pause.png" alt="Pause" />
        ) : (
          <img src="images/icons/altavoz-play.png" alt="Play" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
