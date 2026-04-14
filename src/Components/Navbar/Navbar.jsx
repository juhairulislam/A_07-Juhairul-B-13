import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.png'
import MyLink from './MyLink';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
            </div>

            <div className="navbar-end flex gap-2">
                <MyLink href='/'>
                    <span className='flex items-center gap-1'><IoHomeOutline />
                        Home</span>
                </MyLink>
                <MyLink href='/timeline'>
                    <span className='flex items-center gap-1'><RiTimeLine />

                        Timeline</span>
                </MyLink>
                <MyLink href='/stats'>
                    <span className='flex items-center gap-1'><TfiStatsUp />

                        Stats</span>
                </MyLink>
            </div>
        </div>
    );
};

export default Navbar;