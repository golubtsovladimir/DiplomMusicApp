import { Link } from "react-router-dom";
import RelatedSongs from "./RelatedSongs";

const DetailsHeader = ({songData , artistData, artistId}) => {
    const shazamSongs = Object.values(songData.resources['shazam-songs']);
    const genresSongsId = Object.keys(songData.resources.genres)[0];
    const genresSongs = songData.resources.genres[genresSongsId].attributes.name;
    const shazamArtistId = Object.keys(songData.resources.artists)[0];
    const shazamArtist = songData.resources.artists[shazamArtistId];
    const artist = artistData?.artists[artistId].attributes;
    const imgurl = shazamSongs[0].attributes.images?.coverArt;
    return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
        <div className="absolute inset-0 flex items-center">
          <img 
          src={artistId ? artist ?.artwork?.url.replace('{w}', '500').replace('{h}' , '500'):imgurl} 
          alt="art" 
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"/>

          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artists.name : shazamSongs[0].attributes.title}</p>
            {!artistId && ( 
              <Link to={`/artists/${shazamArtistId}`}>
                <p className="text-base text-gray-400 mt-2">{shazamArtist.attributes.name}</p>
                
              </Link>
            )}

              <p className="text-base text-gray-400 mt-2">
                {artistId
                 ? artist?.genreNames[0]
                : genresSongs}
              </p> 

          </div>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24"></div>
      <RelatedSongs />
    </div>
  );
    
    
  //   for (const shazamSong of shazamSongs) {
  //     const coverArt = shazamSong.attributes.images?.coverArt;

  //     if (coverArt) {
  //       return <img src={coverArt} alt="Cover Art" />;
  //     }
  //   }

  //   // If 'shazam-songs' coverArt not found, check for 'shazam-artists'
  //   const shazamArtists = Object.values(songData.resources['shazam-artists']);

  //   for (const shazamArtist of shazamArtists) {
  //     const artistAvatar = shazamArtist.attributes.images?.artistAvatar;

  //     if (artistAvatar) {
  //       return <img src={artistAvatar} alt="Artist Avatar" />;
  //     }
  //   }
  // }

  // return <p>Извините, изображение не найдено.</p>;
};

export default DetailsHeader;
