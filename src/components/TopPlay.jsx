import { useDispatch, useSelector } from 'react-redux';
import {genres} from '../assets/constants';
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery,useGetTopChartsCountryQuery } from "../redux/services/shazamCore";
import 'swiper/css';
import 'swiper/css/free-mode';
import TopChartCard from './TopChartCard';
import Loader from './Loader';

const TopPlay = () => {
  
  const dispatch = useDispatch();
  const { activeSong, isPlaying} = useSelector((state) => state.player);
  const { data , isFetching} = useGetTopChartsCountryQuery();
  if(isFetching) return <Loader title="Loading songs..."/>;
  const db =  data.tracks;
  const topPlays = db.slice(0,5);
  // const divRef = useRef(null);

  const handlePauseClick = (song, i) => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };


/*При обновлении проподает удалить все с датой и перезагрузить страницу*/
  return(
    <div /*ref={divRef}*/ className="xl:ml-6 ml-0 xl-mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-black font-bold text-2xl">Популярные песни</h2>
          <Link to="/top-charts">
            <p className="text-black cursor-pointer text-base hover:text-[#1a73d8]">Смотреть все</p>
          </Link>
        </div>

        <div className="mt-3 flex flex-col gap-1">
        {topPlays.map((song, i) => (
          <TopChartCard
            song={song}
            i={i}
            key={song.key}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(song, i)}
          />
        ))}
        </div>
      </div>

      <div className='w-full flex flex-col mt-8'>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-black font-bold text-2xl">Популярные исполнители</h2>
          <Link to="/top-artists">
            <p className="text-black cursor-pointer text-base hover:text-[#1a73d8]">Смотреть все</p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className='mt-4'
          >
            {topPlays?.map((song,i) => (
              <SwiperSlide
              key={song?.key}
              style={{width: '31%', height: 'auto'}}
              className='shadow-lg rounded-full animate-slideright'>
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                  <img src={song?.images.background} alt="name" className='rounded-full w-full object-cover hover:scale-105' />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default TopPlay;




