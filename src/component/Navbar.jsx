import React, { useState } from 'react';
import { LuAlignLeft } from 'react-icons/lu';
import { BsPersonFill, BsJournalBookmarkFill } from 'react-icons/bs';
import { BiHome, BiCctv } from 'react-icons/bi';
import { MdOutlineStackedBarChart } from 'react-icons/md';

export default function Navbar() {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <nav>
      <div className='nav'>
        <div className='nav-toggle'>
          <LuAlignLeft size={28} onClick={() => setIsvisible((prev) => !prev)} />
        </div>
        <div className='home-icon'>
          <BsPersonFill size={28} color='#ff8c3a96' />
        </div>
      </div>
      <div className={`nav-menu ${isVisible ? 'visible' : ''}`}>
        <ul className='nav-items'>
          <li className='item'>
            <BiHome size={28} />
            <span>Summary Dashboard</span>
          </li>
          <li className='item'>
            <MdOutlineStackedBarChart size={28} />
            <span>Attendance Tracking</span>
          </li>
          <li className='item'>
            <BiCctv size={28} />
            <span>Behavioral Analytics</span>
          </li>
          <li className='item'>
            <BsJournalBookmarkFill size={28} />
            <span>Academic Performance Tracking</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
