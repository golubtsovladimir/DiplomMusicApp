import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const {songid} = useParams();
  const {activeSong, isPlaying} = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails} = useGetSongDetailsQuery({songid});
  
  const {data, isFetching: isFetchingRelatedSongs, error} = useGetSongRelatedQuery({songid});

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };


  if(isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Loading songs..."/>;
  
  if (error) return <Error/>
  console.log(Object.values(data.resources['shazam-songs']))
  const textId = songData.resources.lyrics ? Object.keys(songData.resources.lyrics)[0] : null;
  return (

    <div className="flex flex-col">
      <DetailsHeader songData={songData}/>
      <div className="mb-10">
        <h2 className="text-black text-3xl font-mono font-bold">Текст песни</h2>
        <div className="mt-5 ">
        {songData.resources.lyrics && textId ? (
  songData.resources.lyrics[textId]?.attributes?.text?.map((line, i) => (
    
    <div key={i} className="text-gray-500 text-base my-2 flex ">{line}</div>
  ))
) : ( 
  <p className="text-gray-500 text-base my-1">Извините, текст пока не добавлен.</p>
)}
        </div>
      </div>
        <RelatedSongs
        data={Object.values(data.resources['shazam-songs'])}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  )
    
};



export default SongDetails;


