import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Error, Loader, SongCard, RelatedSongs, ArtistCard} from '../components';
import { useGetSongsBySearchReturnQuery, useGetSongsBySearchQuery} from '../redux/services/shazamCore';
import SearchReturn from '../components/SearchReturn';
const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {data,  isFetching, error} = useGetSongsBySearchQuery(searchTerm);
  // const { data:data2, isFetching2, error2 } = useGetSongsBySearchReturnQuery(searchTerm2);
  const songs = data?.tracks?.hits.map((song) => song.track);
  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;
  console.log(data);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-black text-left">Найденые песни</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
          
        ))}
        <SearchReturn/>
        {/* {songs2.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
          
        ))} */}
      </div>
    </div>
  );
};

export default Search;