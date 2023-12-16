import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return(
    <div className="flex flex-col w-[250px] p-4 bg-white bg-opacity-80 backdrop-blur-sm animate-slideup rounded-xl cursor-pointer hover:bg-[#1a73d84f]">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center  rounded-xl group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70 hover:rounded-xl' : 'hidden'}`}>
          <PlayPause 
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt="song_img" className="rounded-lg"/>
        </div >
        <div className="mt-4 flex flex-col">
          <p className="font-semibold text-lg text-black truncate hover:text-[#1a73d8]">
            <Link to={`/songs/${song?.key}`}>
            {song.title}
            </Link>
          </p>
          <p className="text-sm truncate text-black mt-1 hover:text-[#1a73d8]">
            <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
              {song.subtitle}
            </Link>
          </p>
        </div>
     </div>
)
};

export default SongCard;
