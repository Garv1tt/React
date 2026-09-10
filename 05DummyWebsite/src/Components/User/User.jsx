import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {Id} = useParams()
    return (
        <div className='bg-gray-600 text-white p-4 text-2xl text-center rounded-2xl w-[50%] ml-90'>User: {Id}</div>
    )
}

export default User
