import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Card = ({ detail, setOpenId, openId, setpopup }) => {
    const [showMore, setShowMore] = useState(true);
    const [edit, setEdit] = useState(false);
    const [editing, setEditing] = useState(edit && (detail.id === openId));
    useEffect(() => {
        if (openId === detail?.id) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    }, [openId]);

    useEffect(() => {
        if (edit && (detail.id === openId)) {
            setEditing(true);
        } else {
            setEditing(false);
        }
    }, [edit])

    const handleShow = () => {
        if (showMore) {
            setOpenId(detail?.id)
        } else {
            setOpenId(null);
        }
    }

    const getAge = (birthdate) => {
        const birthDate = new Date(birthdate);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <div className='border rounded-md px-4 py-2 my-2'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img src={detail?.picture} alt='Person Image' className='rounded-full w-12 border p-1' />
                    {!editing ? <h2 className='font-semibold'>{detail?.first + " " + detail?.last}</h2> : 
                    <input type='text' value={detail?.first + " " + detail?.last}/>}
                </div>
                <div onClick={handleShow} className='text-xs cursor-pointer pt-2'>
                    {showMore ? <FaChevronDown /> : <FaChevronUp />}
                </div>
            </div>
            {!showMore && <div className='px-4 my-4'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-gray-400'>Age</h2>
                        <p>{getAge(detail?.dob)} Years</p>
                    </div>
                    <div>
                        <h2 className='text-gray-400'>Gender</h2>
                        <p>{detail?.gender}</p>
                    </div>
                    <div>
                        <h2 className='text-gray-400'>Country</h2>
                        <p>{detail?.country}</p>
                    </div>
                </div>
                <div className='mt-2'>
                    <h2 className='text-gray-400'>Description</h2>
                    <p>{detail?.description}</p>
                </div>
                <div className='flex justify-end items-center'>
                    {!editing ? (<div className='flex gap-2'>
                        <AiOutlineDelete className='text-red-500 cursor-pointer text-xl' onClick={() => setpopup(true)} />
                        {(getAge(detail?.dob) > 18) && <MdOutlineModeEdit className='text-blue-500 cursor-pointer text-xl' onClick={() => setEdit(true)} />}
                    </div>) :
                        (<div className='flex gap-2 items-center'>
                            <IoMdCloseCircleOutline className='text-red-500 cursor-pointer text-xl' onClick={() => setEdit(false)} />
                            <FaRegCheckCircle className='text-green-500 cursor-pointer text-lg' />
                        </div>)}
                </div>
            </div>}
        </div>
    )
}

export default Card