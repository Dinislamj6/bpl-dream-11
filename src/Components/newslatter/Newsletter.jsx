import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className='bg-[#FFFFFF] shadow-2xl border-white rounded-3xl flex-col text-center p-10 w-8/12 mx-auto mt-5 space-y-4 bg-linear-to-r from-blue-100 to-orange-100  absolute z-50 -top-[10%] left-50'>
              <h2 className='font-bold text-2xl'>Subscribe to our Newsletter</h2>
              <p className='text-[#131313]'>Get the latest updates and news right in your inbox!</p>
              <div>
                <input type="text" placeholder="Enter your email" className="input input-md mr-2" />
                 <button className='btn bg-linear-to-r from-purple-300 to-yellow-300' >Subscribe</button>
              </div>
            </div>
        </div>
    );
};

export default Newsletter;