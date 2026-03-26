import React from 'react';
import banner from "../../../../assets/bg-shadow.png"
import criket from "../../../../assets/banner-main.png"

const Bannner = () => {
    return (
        <div className='min-h-[80vh] bg-cover bg-center w-11/12 mx-auto mt-5 bg-black space-y-5 rounded-4xl' style={{backgroundImage : `url(${banner})`}}> 
          <div className='flex justify-center items-center pt-10'>
              <img  src={criket} alt="" />
          </div>
          <h2 className='text-white font-bold text-3xl text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <p className='text-center text-white text-xl'>Beyond Boundaries Beyond Limits</p>
          <div className='flex justify-center'>
            <button className="btn btn-outline border-5 btn-warning p-5 bg-[#E7FE29] text-black font-bold">Claim Free Credit</button>
          </div>
        </div>
    );
};

export default Bannner;