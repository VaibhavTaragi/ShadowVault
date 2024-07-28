import React, { useState } from 'react'
import Card from './Card'

const Layout = ({ data, setData }) => {

    const [openId, setOpenId]= useState(null);

    return (
        <div className='p-4 border my-4 rounded-md'>
            {data.map((person)=><Card detail={person} openId={openId} setOpenId={setOpenId}/>)}
        </div>
    )
}

export default Layout