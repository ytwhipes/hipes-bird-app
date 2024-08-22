import React from 'react'; 

  

function BirdDisplay({ bird, onHearMyCall, onNaturalRange }) { 

  if (!bird) { 

    return <p>Please enter a valid bird name.</p>; 

  } 

  

  return ( 

    <div> 

      <h2>{bird.name}</h2> 

      <p>{bird.description}</p> 

      <p><strong>Habitat:</strong> {bird.habitat}</p> 
      <button onClick={onHearMyCall}>Hear My Call</button>
      <button onClick={onNaturalRange}>Natural Range</button>

    </div> 

  ); 

} 

  

export default BirdDisplay; 