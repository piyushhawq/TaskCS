import React, { useState, useEffect } from 'react';


function SpeciesCard() {
  const [speciesData, setSpeciesData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);


  useEffect(() => {
    fetchSpeciesData();
    fetchTotalCount();
  }, []);

  const fetchSpeciesData = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/species/');
      const data = await response.json();
      setSpeciesData(data.results);
    } catch (error) {
      console.error('Error fetching species data:', error);
    }
  };
  const fetchTotalCount = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
    //   console.log(data.count);
      setTotalCount(data.count);
    } catch (error) {
      console.error('Error fetching total count:', error);
    }
  };

  return (
    <div className="species-container">
           <div className="species-card">
          <h3 className="species-name">Total Results</h3>
          <p className="species-count"> Count : {totalCount}</p>
        </div>
      {speciesData.map((species, index) => (
        <div className="species-card" key={index}>
          <h4 className="species-name">{species.name} </h4>
          <p className="species-count"> Count : {species.people.length}</p>
        </div>
      ))}
    </div>
  );
}

export default SpeciesCard;

