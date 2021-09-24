import React, {useContext} from 'react';
import { Redirect } from 'react-router';
import { VideoIdContext } from '../context/VideoIdContext';

const Card = ({
  title,
  index,
  logo,
  description,
  curator
}) => {
  const {videoId, setVideoId}  = useContext(VideoIdContext);

  return (
    <div className="w-72 h-86 bg-primary shadow-xl rounded-lg text-secondary-lightgray">
      <div className="flex flex-col m-6 ">
        <div className="flex flex-row place-content-between">
          <p className="mt-4 text-2xl font-semibold">{title}</p>
          <img src={logo} alt="logo" className="w-14 h-16 flex" />
        </div>
        <p className="mt-6">{description}</p>
        <p className="mt-8">Curator :</p>
        <p className="mt-1 font-medium">{curator}</p>
        {videoId ? (
          <Redirect to="/video" />
        ) : (
          <button
            onClick={() => {
              setVideoId(index+1);
            }}
            className="mt-8 w-32 h-9 bg-secondary-red items-center rounded-md shadow-md text-primary"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
