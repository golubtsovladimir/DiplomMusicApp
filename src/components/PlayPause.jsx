import { FaPauseCircle, FaPlayCircle} from 'react-icons/fa';
 
const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => ( isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle  size={35} className='text-black hover:text-white' onClick={handlePause}/>
) : (
  <FaPlayCircle size={35} className='text-black hover:text-white' onClick={handlePlay}/>
));

export default PlayPause;
