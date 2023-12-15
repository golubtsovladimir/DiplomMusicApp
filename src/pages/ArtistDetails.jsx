import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs} from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { data } from "autoprefixer";

const ArtistDetails = () => {
  const {id: artistId} = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery({artistId});
  if(isFetchingArtistDetails) return <Loader title="Загрузка информации"/>;
  if (error) return <Error/>
  console.log(Object.values(artistData.data));
  return (

    <div className="flex flex-col">
      <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
        <div className="absolute inset-0 flex items-center">
          {/* <img 
          src={artistId ? artist ?.artwork?.url.replace('{w}', '500').replace('{h}' , '500'):imgurl} 
          alt="art" 
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"/> */}

          <div className="ml-5">
            {/* <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artists.name : shazamSongs[0].attributes.title}</p> */}
            {!artistId && ( 
              <Link to={`/artists/${artistId}`}>
                <p className="text-base text-gray-400 mt-2">{Object.values(artistData.data)[0].artistName}</p>
              </Link>
            )}

              {/* <p className="text-base text-gray-400 mt-2">
                {artistId
                 ? artist?.genreNames[0]
                : genresSongs}
              </p>  */}

          </div>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24">
        
      </div>
    </div>

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
