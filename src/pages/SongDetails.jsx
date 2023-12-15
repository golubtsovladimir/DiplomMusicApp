import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";


const SongDetails = () => {
  const dispatch = useDispatch();
  const {songid} = useParams();
  const {activeSong, isPlaying} = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails} = useGetSongDetailsQuery({songid});
  if(isFetchingSongDetails) return <Loader title="Loading songs..."/>;
  
  const textId = songData.resources.lyrics ? Object.keys(songData.resources.lyrics)[0] : null;
  
  return (

    <div className="flex flex-col">
      <DetailsHeader songData={songData}/>
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Текст песни</h2>
        <div className="mt-5 ">
        {songData.resources.lyrics && textId ? (
  songData.resources.lyrics[textId]?.attributes?.text?.map((line, i) => (
    
    <p key={i} className="text-gray-400 tex-base my-1">{line}</p>
  ))
) : ( 
  <p className="text-gray-400 tex-base my-1">Извините, текст пока не добавлен.</p>
)}
        </div>
      </div>
    </div>
  )
    
};



export default SongDetails;


