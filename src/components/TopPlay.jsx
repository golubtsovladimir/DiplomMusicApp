import { useDispatch, useSelector } from 'react-redux';
import {genres} from '../assets/constants';
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import 'swiper/css';
import 'swiper/css/free-mode';
import TopChartCard from './TopChartCard';
import Loader from './Loader';

const TopPlay = () => {
  
  const dispatch = useDispatch();
  const { activeSong, isPlaying} = useSelector((state) => state.player);
  const { data , isFetching} = useGetTopChartsQuery();
  if(isFetching) return <Loader title="Loading songs..."/>;
  const db = data.tracks;
  const topPlays = db.slice(0,5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };


/*При обновлении проподает удалить все с датой и перезагрузить страницу*/
  return(
    <div className="xl:ml-6 ml-0 xl-mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 cursor-pointer text-base">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
        {topPlays.map((song, i) => (
          <TopChartCard
            song={song}
            i={i}
            key={song.key}
          />
        ))}
        </div>

      </div>
    </div>
  )
};

export default TopPlay;




