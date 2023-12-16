import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { Error, Loader, RelatedSongs} from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { data } from "autoprefixer";
import ArtistPhoto from "../components/ArtistPhoto";

const ArtistDetails = () => {
  const {id: artistId} = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery({artistId});
  if(isFetchingArtistDetails) return <Loader title="Загрузка информации"/>;
  if (error) return <Error/>
  const artistDataId = (Object.keys(artistData.data)[0]);
  console.log(artistData);
  return (

    <div className="flex flex-col"> 
      <ArtistPhoto/>
      <RelatedSongs
        data={Object.values(artistData.data)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
    
};



export default ArtistDetails;
