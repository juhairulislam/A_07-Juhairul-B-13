import React from 'react';



const AllFriends =async () => {

    const res = await fetch('https://a-07-juhairul-b-13.vercel.app/friends.json');
    const data = await res.json() ;

    console.log(data)
    return (
        <div className='mt-8 w-[80%] mx-auto'>

           <h1 className='font-bold text-xl'>Your Friends</h1>
            
        </div>
    );
};

export default AllFriends;