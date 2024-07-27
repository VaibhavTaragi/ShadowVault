import React from 'react';
import Logo from "../assets/Logo.png"

const Header = () => {

  const leftActions = ["Home", "About Us", "Logout"];
  
  return (
    <div className='flex items-center justify-between px-4 p-2 shadow-md'>
      <img src={Logo} alt='Shadow Vault Logo' className='w-44 cursor-pointer hover:scale-105' />
      <ul className='flex list-none gap-4 cursor-pointer'>
        {leftActions.map((item,idx) => {
          return (
            <li key={idx+item} className='hover:font-medium'>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Header