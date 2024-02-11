import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { FaAndroid } from 'react-icons/fa';


const CustomCardView = ({ rowData }) => {
  const [homeworld, setHomeworld] = useState(null);
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState('');

 
  const {
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,
  } = rowData;


  useEffect(() => {
  const fetchHomeworld = async () => {
    if (rowData.homeworld) {
      const response = await fetch(rowData.homeworld);
      const data = await response.json();
      setHomeworld(data.name);
    }
  };

  const fetchFilms = async () => {
    if (rowData.films && rowData.films.length > 0) {
      const filmResponses = await Promise.all(rowData.films.map(url => fetch(url)));
      const filmData = await Promise.all(filmResponses.map(response => response.json()));
      setFilms(filmData.map(film => film.title));
    } else {
      setFilms([""]); 
    }
  };

  const fetchStarships = async () => {
    if (rowData.starships && rowData.starships.length > 0) {
      const starShipResponses = await Promise.all(rowData.starships.map(url => fetch(url)));
      const starShipData = await Promise.all(starShipResponses.map(response => response.json()));
      setStarships(starShipData.map(starShip => starShip.name));
    } else {
      setStarships([""]); 
    }
  };

  const fetchSpecies = async () => {
    if (rowData.species && rowData.species.length > 0) {
      const speciesResponses = await Promise.all(rowData.species.map(url => fetch(url)));
      const speciesData = await Promise.all(speciesResponses.map(response => response.json()));
      setSpecies(speciesData.map(species => species.name));
    } else {
      setSpecies([""]); 
    }
  };

  const fetchVehicles = async () => {
    if (rowData.vehicles && rowData.vehicles.length > 0) {
      const vehiclesResponses = await Promise.all(rowData.vehicles.map(url => fetch(url)));
      const vehiclesData = await Promise.all(vehiclesResponses.map(response => response.json()));
      setVehicles(vehiclesData.map(vehicles => vehicles.name));
    } else {
      setVehicles([""]); 
    }
  };

  fetchHomeworld();
  fetchFilms();
  fetchStarships();
  fetchSpecies();
  fetchVehicles();
}, [rowData.homeworld, rowData.films, rowData.species, rowData.vehicles, rowData.starships]);

const renderIcon = (title) => {

    return title === "Droid" ? <FontAwesomeIcon icon={faAndroid} /> : <FontAwesomeIcon icon={faUser} />;
 
};

  return (

    <Grid item xs={12} sm={6} md={4} lg={3} className="card-container">
  <Card>
    <CardContent className="card-content">
      <Typography variant="h5">{name}</Typography>
      <div>
        <Typography variant="body1" className="key">Birth Year:</Typography>
        <Typography variant="body1" className="value">{birth_year}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="key">Gender:</Typography>
        <Typography variant="body1" className="value">{gender}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="key">Height:</Typography>
        <Typography variant="body1" className="value">{height}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="key">Mass:</Typography>
        <Typography variant="body1" className="value">{mass}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="key">Skin Color:</Typography>
        <Typography variant="body1" className="value">{skin_color}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="key">Hair Color:</Typography>
        <Typography variant="body1" className="value">{hair_color}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="key">Eye Color:</Typography>
        <Typography variant="body1" className="value">{eye_color}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="key">Homeworld:</Typography>
        <Typography variant="body1" className="value">{homeworld}</Typography>
      </div>
      <div>
        <Typography variant="body1" className="key">Starships:</Typography>
        <Typography variant="body1" className="value"> 
         {/* {starships.length ? starships.join(", ") : "Na"} */}
         {starships.length ? starships.length : "Na"}
         </Typography>
      </div>
 

<div>
  <Typography variant="body1" className="key">Vehicles:</Typography>
  <Typography variant="body1" className="value">
    {/* {vehicles.length ? vehicles.join(", ") : "Na"} */}
    {vehicles.length ? vehicles.length : "Na"}
  </Typography>
</div>
<div>
  <Typography variant="body1" className="key">Films:</Typography>
  <Typography variant="body1" className="value">
    {/* {films.length ? films.join(", ") : "Na"} */}
    {films.length ? films.length : "Na"}
  </Typography>
</div>

      <div>
        <Typography variant="body1" className="key">Species:</Typography>
        <Typography variant="body1" className="value">{species}</Typography>
        {species === 'Droid' && <FaAndroid />}
      </div>

      
      <div>
  <Typography variant="body1" className="key">Species:</Typography>
  {renderIcon(species)}
</div>






    </CardContent>
  </Card>
</Grid>

  );
};

export default CustomCardView;

