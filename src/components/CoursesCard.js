import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { UserContext } from '../context/UserContext';
import { VideoIdContext } from '../context/VideoIdContext';
import { Link } from 'react-router-dom';

const Card = ({ title, index, logo, description, curator }) => {
  const { user, setUser } = useContext(UserContext);
  const { videoId, setVideoId } = useContext(VideoIdContext);
  const img = fetch(logo)
  const toggleCard = () => {
    if (user) {
      if (videoId) {
        return <Redirect to="/video" />;
      } else {
        return (
          <button
            onClick={() => {
              setVideoId(index + 1);
            }}
            className="mt-8 w-32 h-9 bg-secondary-red items-center rounded-md shadow-md text-primary"
          >
            Get Started
          </button>
        );
      }
    } else {
      return (
        <button
          onClick={() => {
            setVideoId(index + 1);
          }}
          className="mt-8 w-32 h-9 bg-secondary-red items-center rounded-md shadow-md text-primary"
        >
          <Link to="/signup">Get Started</Link>
        </button>
      );
    }
  };

  return (
    <div className="w-72 h-86 bg-primary shadow-xl rounded-lg text-secondary-lightgray">
      <div className="flex flex-col m-6 ">
        <div className="flex flex-row place-content-between">
          <p className="mt-4 text-2xl font-semibold">{title}</p>
          <img src={img} alt="logo" className="w-14 h-16 flex" />
        </div>
        <p className="mt-6">{description}</p>
        <p className="mt-8">Curator :</p>
        <p className="mt-1 font-medium">{curator}</p>
        {toggleCard()}
      </div>
    </div>
  );
};

export default Card;
