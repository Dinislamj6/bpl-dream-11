import React, { use, useState } from 'react';
import AvailablePlayers from '../../../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../../../availablePlayers/SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise,setCoin,coin}) => {
     const players = use(playersPromise)
     const [selectedType, setSelectedType] = useState("available")
      
    return (
        <div className='w-11/12 mx-auto my-[60px]'>
          <div className='flex justify-between items-center mb-[20px] gap-4'>
          { selectedType === "available" ?  <h2 className='font-bold text-3xl'>Available Players</h2> :   <h2 className='font-bold text-3xl'>Selected Players</h2>}

            <div> 
                <button 
                onClick={()=>setSelectedType("available")}
                className={`btn ${selectedType === "available"? "bg-[#E7FE29]": ""}  rounded-r-none rounded-l-xl`}>Available</button>
                
                <button 
                 onClick={()=>setSelectedType("selected")}
                className={`btn ${selectedType === "selected"? "bg-[#E7FE29]": ""}  rounded-l-none rounded-r-xl`}>Selected (0)</button>
            </div>
          </div>
         {selectedType === "available" ?   <AvailablePlayers players={players} setCoin={setCoin} coin={coin}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;