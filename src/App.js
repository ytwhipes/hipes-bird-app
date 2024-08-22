

import React, { useState } from 'react'; 

import birdDatabase from './birdDatabase'; 

import SearchBar from './SearchBar'; 

import BirdDisplay from './BirdDisplay'; 


  

function App() { 

  const [searchQuery, setSearchQuery] = useState(''); 

  const [selectedBird, setSelectedBird] = useState(''); 

  const [randomBird, setRandomBird] = useState(null); 

  

  const handleSearchChange = (event) => { 

    setSearchQuery(event.target.value); 

  }; 

  

  const handleSearchSubmit = () => { 

    setSelectedBird(searchQuery); 

    setRandomBird(null); 

  }; 

  

  const handleRandomBird = () => { 

    const birdNames = Object.keys(birdDatabase); 

    const randomBirdName = birdNames[Math.floor(Math.random() * birdNames.length)]; 

    setRandomBird(birdDatabase[randomBirdName]); 

  }; 

  

  const handleHearMyCall = () => { 

    alert(randomBird ? randomBird.call : birdDatabase[selectedBird]?.call); 

  }; 

  

  const handleNaturalRange = () => { 

    alert(randomBird ? randomBird.range : birdDatabase[selectedBird]?.range); 

  }; 

  

  const birdToDisplay = randomBird || birdDatabase[selectedBird]; 

  

  return ( 

    <div> 

      <h1>Bird of the Day</h1> 

      <SearchBar value={searchQuery} onChange={handleSearchChange} onSubmit={handleSearchSubmit} /> 

      <button onClick={handleRandomBird}>Yesterday's Bird</button> 
      <button onClick={handleRandomBird}>Natural Range</button> 
      <button onClick={handleRandomBird}>Hear my Call</button> 

      <BirdDisplay bird={birdToDisplay} onHearCall={handleHearMyCall} onShowRange={handleNaturalRange} /> 
      <img src="./images/baldeagle.jpg" alt="2"/>
    </div> 

  ); 

} 

  

export default App; 