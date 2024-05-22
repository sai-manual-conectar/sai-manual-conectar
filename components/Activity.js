import React from 'react';
import Bounce from "react-reveal/Bounce";

import CardGrid from "./CardGrid";
import CardGridMulti from "./CardGridMulti";
import AudioPlayer from "./AudioPlayer";
const Activity = ({item, showId, act }) => {
  // Verifica si la keyProp es igual a 5
  if (item === showId) {
    return (
       // eslint-disable-next-line react/jsx-key
       <div className="activity">
       <Bounce top cascade>
         <h3 className="text-white mb-3">Actividad {act.id}:</h3>
       </Bounce>
       {act.items.map((subact,j) => (
         <div key={j}>
           <div className="d-inline-flex align-items-center">
            <AudioPlayer 
               id={subact.id}
               src={subact.audio}
             />
           </div>

           <div className="row">
            
             {act.type==="card_grid" &&<CardGrid {...subact} />}
             {act.type==="card_grid_multi" &&<CardGridMulti {...subact} />}
           </div>
         </div>
       ))}
     </div>
    );
  } else {
    // Si la keyProp no es igual a 5, no se renderiza nada
    return null;
  }
};

export default Activity;
