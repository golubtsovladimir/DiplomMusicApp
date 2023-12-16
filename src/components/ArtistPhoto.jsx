import { useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { useGetArtistDetailsPhotoQuery } from "../redux/services/shazamCore";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";

const ArtistPhoto = ({}) => {

  const {id: artistId} = useParams();
  const { activeSong, isPlaying} = useSelector((state) => state.player);

  const { data, isFetching, error} = useGetArtistDetailsPhotoQuery({artistId});

  if(isFetching) return <Loader title="Loading songs..."/>;
  if(error) return <Error/>;
  console.log(data.data[0].attributes.genreNames[0])
  return(
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-r from-transparent to-[#1a73d8] sm:h-48 h-18">
        <div className="absolute inset-0 flex items-center">
          <img 
          src={data.data[0].attributes.artwork.url.replace('{w}', '500').replace('{h}' , '500')} 
          alt="art" 
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"/>

          <div className="ml-5">
              <Link to={`/artists/${artistId}`}>
              <p className="font-bold sm:text-3xl text-xl text-black">
                {data.data[0].attributes.name}
              </p>
              </Link>

              <p className="text-base text-black mt-2">
                {data.data[0].attributes.genreNames[0]}
              </p> 

          </div>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24">
        
      </div>
    </div>
  );
}

export default ArtistPhoto;