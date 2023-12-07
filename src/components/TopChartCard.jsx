import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const TopChartCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  return(
        <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
          <p className="font-semibold text-lg text-white truncate">
            <Link to={`/songs/${song?.key}`}>
            {song.title}
            </Link>
          </p>
        </div>
)
};

export default TopChartCard;