import React from 'react';
import {
  FaCode,
  FaChartLine,
  FaPeopleCarry,
  FaDatabase,
  FaCloud,
  FaFileCode,
} from 'react-icons/fa';
export default [
  {
    id: 1,
    icon: <FaCode className='service-icon' />,
    title: 'Web development',
  },
  {
    id: 2,
    icon: <FaChartLine className='service-icon' />,
    title: 'Data Science',
  },
  {
    id: 3,
    icon: <FaDatabase className='service-icon' />,
    title: 'Database Design',
  },
  {
    id: 4,
    icon: <FaCloud className='service-icon' />,
    title: 'Cloud & Serverless Computing',
  },
  {
    id: 5,
    icon: <FaFileCode className='service-icon' />,
    title: 'API Development',
  },
  {
    id: 6,
    icon: <FaPeopleCarry className='service-icon' />,
    title: 'Community Work',
  },
];
