import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Error,Loader,SongCard } from '../components';
import { useGetTopChartsCountryQuery } from '../redux/services/shazamCore';


const AroundYou = () => {

  const dispatch = useDispatch();
  const { activeSong, isPlaying} = useSelector((state) => state.player);

  const { data, isFetching, error} = useGetTopChartsCountryQuery();
  

  if(isFetching) return <Loader title="Loading songs..."/>;

  if(error) return <Error/>;

  return(
    <div className="flex flex-col">
    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <h2 className="font-bold text-3xl text-white text-left">Топ-чарт: Россия</h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
    </div>
  </div>
  );
}

export default AroundYou;
