import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, )
    return (
        <div className='text-center m-4 text-xl text-white bg-gray-500 p-4 rounded-xl w-[50%] ml-90'>Github Followers: {data.followers} <img className='mx-auto p-3 ' src={data.avatar_url} alt="PFP" width={200} mb-600/>
        Chai Aur Code</div>
    )
}

export default Github
export const GithubInfo = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
