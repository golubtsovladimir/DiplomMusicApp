import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? '#0075FF' : 'black'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={30} color="black" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer bg-[#0075FF] rounded-3xl" />
    ) : (
      <BsFillPlayFill size={45} color="#0075FF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="black" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? '#0075FF' : 'black'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
);

export default Controls;
