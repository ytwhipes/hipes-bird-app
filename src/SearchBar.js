import React from 'react'; 

  

function SearchBar({ value, onChange, onSubmit }) { 

  const handleKeyPress = (event) => { 

    if (event.key === 'Enter') { 

      onSubmit(); 

    } 

  }; 

  

  return ( 

    <div> 

      <input 

        type="text" 

        placeholder="Search for a bird (Robbin, Sparrow, Eagle)" 

        value={value} 

        onChange={onChange} 

        onKeyPress={handleKeyPress} 

      /> 

      <button onClick={onSubmit}>Search</button> 

    </div> 

  ); 

} 

  

export default SearchBar; 