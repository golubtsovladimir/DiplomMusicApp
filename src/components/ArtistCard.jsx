import {useNavigate} from "react-router-dom";

const ArtistCard = ({track}) => {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col w-[250px] p-4 bg-white hover:bg-[#1a73d86c] backdrop-blur-sm animate-slideup rounded-lg cursor-pointer " onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img src={track?.images?.background} alt="artist" className="w-full h-56 rounded-lg"/>
      <p className="mt-4 font-semibold text-lg text-black truncate">{track?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
