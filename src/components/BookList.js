import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { storage, listRef } from '../firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

const BookList = () => {
  const [downurl, setDownurl] = useState('');
  const [references, setReferences] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        const data = res.items;
        setReferences(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleSubmit(list, key) {
    setIndex(key);
    getDownloadURL(ref(storage, list))
      .then((url) => {
        setDownurl(url);
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <ul className="flex flex-col bg-primary rounded-lg justify-center w-11/12 tb:w-3/4 mt-4 tb:mt-12 lp:mt-16 z-20 shadow-pn mb-8 tb:mb-32">
      {references.map((ref, idx) => {
        let link = 'gs://' + ref._location.bucket + '/' + ref._location.path_;
        return (
          <ListItem
            title={ref.name.slice(0, -4)}
            idx={idx}
            key={idx}
            link={link}
            index={index}
            downurl={downurl}
            handleSubmit={handleSubmit}
          />
        );
      })}
    </ul>
  );
};

export default BookList;
