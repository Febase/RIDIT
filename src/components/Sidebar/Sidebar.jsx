import React, { useState, useCallback } from 'react';
import Header from './Header';
import Input from './Input';
import ListBtn from './ListBtn';
import Directories from './Directories';

function Sidebar() {
  return (
    <div className="bg-white border-2 float-left h-full w-80">
      <Header />
      <Input />
      <ListBtn />
    </div>
  );
}

export default Sidebar;
