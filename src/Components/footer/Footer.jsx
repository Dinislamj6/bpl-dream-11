import React from 'react';
import footerImg  from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <div className='bg-[#06091A] p-40 relative '>
            <div className='w-11/12 mx-auto text-[white]'>
                {/* img */}
                <div className='flex justify-center items-center'>
                    <img src={footerImg} alt="footerImg" />
                </div>
                {/* lakha */}
                <div className='flex justify-between items-center gap-10 mt-10'>
                    <div className='space-y-3'>
                        <h2 className='font-bold text-xl mb-3'>About Us</h2>
                         <div>
                            <p>We are a passionate team</p>
                         <p>dedicated to providing the best </p>
                         <p>services to our customers.</p>
                         </div>
                    </div>
                    <div>
                        <h2 className='font-bold text-xl mb-3'>Quick Links</h2>
                       <div className='space-y-3'>
                          <p>Home</p>
                        <p>Services</p>
                        <p>About</p>
                        <p>Contact</p>
                       </div>
                    </div>
                    <div>
                        <h2 className='font-bold text-xl mb-3'>Subscribe</h2>
                       <div>
                          <p>Subscribe to our newsletter for the</p>
                        <p>latest updates.</p>
                        <input type="text" placeholder="Your email" className="input input-md rounded-r-none w-40  placeholder:text-black" />
                        <button className='btn bg-linear-to-r from-purple-300 to-yellow-300 rounded-l-none py-0 px-1' >Subscribe</button>
                       </div>
                    </div>
                </div>
            </div>
             




{/* 
                <div className="divider bg-[white]"></div>
                 <p className='text-center text-white'>@2026 Your Company All Rights Reserved.</p> */}
        </div>
        
             
    );
};

export default Footer;