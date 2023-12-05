import {loader} from '../assets';

const Loader = ({title}) => (
  <div>
    <img src={loader} alt="loader" className='w-32 h-32 
    object-contain' />
    <h1 className='font-bold text-2xl'>
      {title || "Loading"}</h1>
  </div>
);

export default Loader;
