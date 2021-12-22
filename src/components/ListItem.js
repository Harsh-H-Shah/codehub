import React from 'react';

const ListItem = ({ title, idx, index, downurl, link, handleSubmit }) => {
  return (
    <div className="flex flex-row place-content-between border-b border-secondary-lightgray w-full h-16 tb:h-32 border-opacity-10 items-center">
      <p className="ml-3 tb:ml-8 text-md tb:text-2xl hidden mb:block lp:hidden font-normal">
        {title.length < 20 ? `${title}` : `${title.slice(0, 20)}...`}
      </p>
      <p className="ml-3 tb:ml-8 text-md tb:text-2xl mb:hidden font-normal">
        {title.length < 20 ? `${title}` : `${title.slice(0, 12)}...`}
      </p>
      <p className="ml-3 tb:ml-8 text-md tb:text-2xl hidden lp:block font-normal">
        {title}
      </p>
      {downurl && idx === index ? (
        <a href={downurl} target="_blank">
          <button className="w-24 tb:w-52 text-sm tb:text-2xl h-8 tb:h-12 mr-3 tb:mr-8 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary">
            Download
          </button>
        </a>
      ) : (
        <button
          onClick={() => handleSubmit(link, idx)}
          className="w-24 tb:w-52 text-sm tb:text-2xl h-8 tb:h-12 mr-3 tb:mr-8 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
        >
          Read now
        </button>
      )}
    </div>
  );
};

export default ListItem;
