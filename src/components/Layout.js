import React, { useState } from 'react'
import Card from './Card'
import DeleteConfirmation from './DeleteConfirmation';

const Layout = ({ data, setData, setOgData }) => {

    const [openId, setOpenId]= useState(null);
    const [popup, setpopup] = useState(false);

    const handleDelete = ()=>{
        const updatedList = data.filter((person)=>person.id!==openId);
        setOpenId(null);
        setData(updatedList);
        setOgData(updatedList);
        setpopup(false);
    };

    return (
        <div className='p-4 border my-4 rounded-md'>
            {data && data.map((person)=><Card key={person.id} detail={person} openId={openId} setOpenId={setOpenId} setpopup={setpopup} handleDelete={handleDelete}/>)}
            {!data.length && <p>No Data Found!</p>}
            <DeleteConfirmation show={popup} onClose={()=>setpopup(false)} onConfirm={handleDelete}/>
        </div>
    )
}

export default Layout