import Navbar from '../components/Navbar';
import React, { useState, useEffect, useContext } from 'react';
import { storage, vidRef } from '../firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { VideoIdContext } from '../context/VideoIdContext';

const VideoPage = () => {
  const { videoId, setVideoId } = useContext(VideoIdContext);
  const [videoRef, setVideoRef] = useState('');
  const [downUrl, setDownUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listAll(vidRef)
      .then((res) => {
        const data = res.items;
        setVideoRef(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('list error', error);
      });
  }, []);

  const handleCall = (e) => {
    e.preventDefault();
    const rec = videoRef[videoId - 1];
    console.log(rec);
    let link = 'gs://' + rec._location.bucket + '/' + rec._location.path_;
    console.log(link);
    getDownloadURL(ref(storage, link))
      .then((url) => {
        console.log('harsh', url);
        setDownUrl(url);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar setVideoId={setVideoId} />
      <h1>Videos</h1>
      <button onClick={(e) => handleCall(e)}>Start the course</button>
      {loading ? (
        <p>Loading</p>
      ) : (
        <video className="w-screen" controls>
          <source src={downUrl} type="video/mp4"></source>
        </video>
      )}
    </div>
  );
};

export default VideoPage;
