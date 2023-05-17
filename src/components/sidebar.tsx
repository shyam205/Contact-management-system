import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar_wrapper'>
       <div className='flex flex-col py-2 bg-gradient-to-r from-indigo-500 to-blue-500 h-screen'>
       <Link to='/'>
           <p className='text-white py-2 border-b-2 border-white flex flex-row justify-center'>Contact
           <span>
           <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="30px"
            width="30px"
            className='ml-2'
            >
            <path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM661 736h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.6-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H363a8 8 0 01-8-8.4c2.8-53.3 32-99.7 74.6-126.1a111.8 111.8 0 01-29.1-75.5c0-61.9 49.9-112 111.4-112 61.5 0 111.4 50.1 111.4 112 0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1.4 4.6-3.2 8.4-7.8 8.4zM512 474c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52c28.5 0 51.7-23.3 51.7-52s-23.2-52-51.7-52z" />
            </svg>
           </span>
           </p>
           </Link>
           <Link to='/chart-map'>
           <p className='text-white py-2 border-b-2 border-white flex flex-row justify-center'>Charts and Maps
           <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="30px"
            width="30px"
            className='ml-2'
            >
            <path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26a398.57 398.57 0 00-282.5 117 397.47 397.47 0 00-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6a396.64 396.64 0 00155.6 31.5 398.57 398.57 0 00282.5-117c36.7-36.7 65.5-79.4 85.6-127a396.64 396.64 0 0031.5-155.6v-26c-.1-4.4-3.7-8-8.1-8zM951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3A398.5 398.5 0 00588.4 75.6L560.1 73c-4.7-.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-.1 8.4-4 8-8.6z" />
            </svg>
           </p>
           </Link>
        </div>  
    </div>
  )
}

export default Sidebar