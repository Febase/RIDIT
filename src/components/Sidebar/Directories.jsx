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

function Directories () {
  return data.map(directory => <Directory {...directory} />)
}

function Directory ({
  name,
  bookmark,
}) {
  return <div>
    <img style={{ backgroundImage: url('/img/right_arrow.png') }} />
  </div>
}

export default Directories;
