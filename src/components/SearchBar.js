import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setData, og }) => {
    const [input,setInput] = useState("");

    useEffect(()=>{
        const filtered = og.filter((person)=>{
            let name = person.first.toLowerCase()+" "+person.last.toLowerCase();
            return name.includes(input.toLowerCase());
        })
        setData(filtered);
    },[input])

    const inputHandle=(e)=>{
        setInput(()=>{
            return e.target.value
        })
    }

    return (
        <div className='relative w-full'>
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input type='text' className='pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none w-full' placeholder='Search user' value={input} onChange={inputHandle}/>
        </div>
    )
}

export default SearchBar