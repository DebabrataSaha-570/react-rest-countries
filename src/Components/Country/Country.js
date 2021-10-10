import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, population, flag, region } = props.country
    return (
        <div className="country">
            <h1>Name: {name}</h1>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <img src={flag} alt="" />
            <p>{region}</p>
        </div>
    );
};

export default Country;