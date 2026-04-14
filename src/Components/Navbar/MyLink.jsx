'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, children}) => {

    const myPath = usePathname()

    return (
        <div>
            <Link href={href} className={`btn ${myPath === href?'text-white bg-[#244D3F]':''}`}>
            {children}
            </Link>
            
        </div>
    );
};

export default MyLink;