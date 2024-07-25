

import './ReadMoreButton.css'
import { Link } from 'react-router-dom';

const ReadMoreButton01 = ({url}) => {
  return (
    <Link to={url} className='flex justify-start mt-4'>
          <button className=" flex justify-center w-36 h-10 border-2 font-400 border-[#1165c6] rounded text-lg px-2 py-0.5 transition-all duration-500 ease hover:pl-0 custom-button1">
              Read more
          </button>
    </Link>
  );
};

export default ReadMoreButton01;