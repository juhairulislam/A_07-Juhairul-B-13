import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='p-10 md:p-20 text-center space-y-4'>
                <h1 className='text-2xl md:text-4xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-[12px] md:text-[14px] text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> 
relationships that matter most.</p>
<button className='btn bg-[#244D3F] text-white p-2 font-normal'>+ Add a Friend</button>
            </div>
        </div>
    );
};

export default Banner;