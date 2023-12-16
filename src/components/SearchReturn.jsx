import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Error, Loader, SongCard, RelatedSongs, ArtistCard} from '../components';
import { useGetSongsBySearchReturnQuery, useGetSongsBySearchQuery} from '../redux/services/shazamCore';

const SearchReturn = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data:data2, isFetching, error } = useGetSongsBySearchReturnQuery(searchTerm);
  const songs = data2?.tracks?.hits.map((song) => song.track);
  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;
  console.log(data2.artists.hits[0].artist.adamid);
  return (
    <div className="flex flex-col">
      
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data2}
            i={i}
          />
          
        ))}
      </div>
    </div>
  );
};

export default SearchReturn;