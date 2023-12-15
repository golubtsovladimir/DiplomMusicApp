const Details = ( songData ) => {
  if (songData && songData.resources) {
    const shazamSongs = Object.values(songData.resources['shazam-songs']);
    
    for (const shazamSong of shazamSongs) {
      const coverArt = shazamSong.attributes.images?.coverArt;

      if (coverArt) {
        return <img src={coverArt} alt="Cover Art" />;
      }
    }
  }

  return <p>Извините, изображение не найдено.</p>;
};

export default Details;