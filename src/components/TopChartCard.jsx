import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const TopChartCard = ({ song, i , isPlaying, activeSong, handlePauseClick, handlePlayClick}) => {
  const dispatch = useDispatch();
  return(
        <div className="w-full flex flex-row items-center hover:bg-[#1a73d8] py-2 p-4 rounded-xl cursor-pointer mb-2 bg-white">
          <h3 className="font-bold text-base text-black mr-3">{i + 1}.</h3>
          <div className="flex-1 flex flex-row justify-between items-center">
            <img src={song?.images?.coverart} alt={song?.title} className="w-20 h-20 rounded-lg"/>
            <div className="flex-1 flex flex-col justify-center mx-3">
              <Link to={`/songs/${song?.key}`}>
                <span className="text-xl font-bold text-black hover:text-white">{song.title}</span>
              </Link>
              <Link to={`/artists/${song?.artists[0].adamid}`}> 
                <span className="text-base text-black mt-1 hover:text-white">{song.subtitle}</span>
              </Link>
            </div>
          </div>
          <PlayPause 
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
)
};

export default TopChartCard; 



{/* <p className="font-semibold text-lg text-white truncate">
            <Link to={`/songs/${song?.key}`}>
            {song.title}
            </Link>
          </p> */}