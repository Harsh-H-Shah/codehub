import db from '../Db.js';
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { storage, frontRef, backRef, dataBaseRef, gitRef } from '../firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

const VideoPage = ({ videoId, setVideoId }) => {
  const [selectRef, setSelectRef] = useState('');
  const [videoRef, setVideoRef] = useState('');
  const [urlRef, setUrlRef] = useState('');
  const [downUrl, setDownUrl] = useState('');
  
  useEffect(() => {
    if (videoId < 4) {
      setSelectRef(frontRef);
    }
    listAll(selectRef)
      .then((res) => {
        const data = res.items;
        console.log(data);
        setVideoRef(data);
        const rec = data[videoId];
        let link = 'gs://' + rec._location.bucket + '/' + rec._location.path_;
        setUrlRef(link);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    getDownloadURL(ref(storage, urlRef))
      .then((url) => {
        setDownUrl(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Videos</h1>
      <p>{downUrl}</p>
    </div>
  );
};

export default VideoPage;
