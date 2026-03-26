import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";


const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,coin,setCoin}) => {
  
    const handelDeleteSelectedPlayer = (selectedPlayer) => {
        const filteredPlayer = selectedPlayers.filter(player => player.playerName !== selectedPlayer.playerName)
        setSelectedPlayers(filteredPlayer)
        setCoin(coin + selectedPlayer.price)
    }
    return ( <div>
         <div className='space-y-4'>
            {selectedPlayers.length === 0 ?
              <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
              <h2 className='font-semibold text-xl'>No Players Selected yet</h2>
              <p>Go to Available tab to select players</p>
              </div>
              :
              selectedPlayers.map((selectedPlayer,ind) => {
                return <div key={ind} className='flex items-center justify-between gap-6 p-5 rounded-2xl border'>
                   <div className='flex items-center gap-4'>
                       <img src={selectedPlayer.playerImage} alt="selectedPlayer" className='h-[75px] w-auto rounded-md' />
                       <div className=''>
                         <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser />{selectedPlayer.playerName}</h2>
                         <p>{selectedPlayer.playerType}</p>
                       </div>
                   </div>
                   <button className='btn text-red-500'
                    onClick={()=>handelDeleteSelectedPlayer(selectedPlayer)}><MdDelete /></button>
                </div>
              })
           }
         </div>
        </div>
    );
};

export default SelectedPlayers;