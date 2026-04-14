import React from 'react';
import footerImage from '../../../public/assets/logo-xl.png'
import instagram from '../../../public/assets/instagram.png'
import facebook from '../../../public/assets/facebook.png'
import twitter from '../../../public/assets/twitter.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] px-10 md:px-20 pt-10 md:pt-15'>
            <div className='flex justify-center'>
                <Image
                    src={footerImage}
                    alt='Footer Image'
                    width={250}
                    height={250}
                >

                </Image>






            </div>

            <p className='text-[13px] text-gray-300 text-center  mt-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <div>
                <p className='text-white text-center mt-8'>Social Links</p>


                <div className='flex justify-center gap-2 mt-3'>

                    <Image
                    src={instagram}
                    alt='Footer Image'
                    width={30}
                    height={30}
                >

                </Image>


                <Image
                    src={facebook}
                    alt='Footer Image'
                    width={30}
                    height={30}
                >

                </Image>


                <Image
                    src={twitter}
                    alt='Footer Image'
                    width={30}
                    height={30}
                >

                </Image>

                </div>
            </div>

            
                    <div className='mt-10 flex justify-between border-t border-green-800 py-4 text-[14px]'>
                        <p className='text-gray-500'>© 2026 KeenKeeper. All rights reserved.</p>

                        <div className='text-gray-500 flex justify-between gap-8'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service </p>
                            <p>Cookies</p>
                        </div>
                    </div>
        </div>
    );
};

export default Footer;