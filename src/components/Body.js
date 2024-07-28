import React, { useState } from 'react';
import celebData from "../constants/celebrities.json";
import SearchBar from './SearchBar';
import Layout from './Layout';

const Body = () => {
  const [data, setData] = useState(celebData || {});
  return (
    <div className='shadow-md px-4 py-8 flex items-center justify-center'>
      <div className='w-1/3'>
        <h1 className='font-medium mb-4'>List View</h1>
        <SearchBar setData={setData} og={celebData}/>
        <Layout data={data} setData={setData} />
      </div>
    </div>
  )
}

export default Body;