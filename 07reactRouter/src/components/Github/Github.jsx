import React, { useState, useEffect } from 'react'
import { redirect } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/virajhole")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })


    // }, [])



    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4  text-3xl'><h1> Github followers : {data.followers}</h1>
            <img src={data.avatar_url} alt="" width={300} />
            <h1>Name : {data.name}</h1>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/virajhole")
    return response.json()
}