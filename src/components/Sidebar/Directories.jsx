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
    <li>
      <div className="flex">
        <div
          className="bg-no-repeat w-5 h-5"
          style={{ backgroundImage: 'url(/img/right_arrow.png' }}
        />
        <div
          className="bg-no-repeat w-5 h-5"
          style={{ backgroundImage: 'url(/img/folder.png' }}
        />
        <div>{name}</div>
      </div>
      <div className="h-5 w-5" style={{ backgroundImage: 'url(/img/dots_vertical)' }} />
    </li>
  )
};

function Directories () {
  return (
    <ul className="">
      {data.map(directory => <Directory key={directory.name} {...directory} />)}
    </ul>
  )
};

export default Directories;
