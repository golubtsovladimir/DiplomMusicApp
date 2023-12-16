import SongBar from "./SongBar";

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  console.log(isPlaying)
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-black">Вам понравится:</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, i) => (
          <SongBar
            key={`${song.id}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying} 
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;