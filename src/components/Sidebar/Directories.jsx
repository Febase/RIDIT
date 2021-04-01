import React from 'react';

const data = [
  { name: 'Directory name', bookmark: null },
  { name: 'Directory name2', bookmark: null },
  { name: 'Directory name3', bookmark: null },
  { name: 'Directory name4', bookmark: [
    { name: 'Bookmark name1' },
    { name: 'Bookmark name2' },
    { name: 'Bookmark name3' },
    { name: 'Bookmark name4' },
  ] },
  { name: 'Directory name5', bookmark: null }
]

function Directory ({
  name,
  bookmark,
}) {
  return (
    <li className="flex items-center mb-0.5">
      <div className="flex flex-1 items-center">
        <div
          className="bg-no-repeat w-1.5 h-2 bg-contain bg-center mr-2"
          style={{ backgroundImage: 'url(/img/right-arrow.png' }}
        />
        <div
          className="bg-no-repeat w-6 h-6 bg-contain bg-center"
          style={{ backgroundImage: 'url(/img/folder.png' }}
        />
        <div>{name}</div>
      </div>
      <div className="h-4 bg-contain w-1 bg-center bg-no-repeat" style={{ backgroundImage: 'url(/img/dots-vertical.png)' }} />
    </li>
  )
};

function Directories () {
  return (
    <ul className="px-4 py-2">
      {data.map(directory => <Directory key={directory.name} {...directory} />)}
    </ul>
  )
};

export default Directories;
