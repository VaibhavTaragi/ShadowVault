import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setData }) => {
    const [input,setInput] = useState("");

    const inputHandle=(e)=>{
        setInput(()=>{
            return e.target.value
        })
    }

    return (
        <form className='relative w-full'onSubmit={(e)=>{
            e.preventDefault();
            // handleSearch();
          }}>
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input type='text' className='pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none w-full' placeholder='Search user' value={input} onChange={inputHandle}/>
        </form>
    )
}

export default SearchBar