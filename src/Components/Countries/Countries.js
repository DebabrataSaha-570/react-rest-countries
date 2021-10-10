import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    console.log(countries)
    return (
        <div>
            <div className="parent-Countries-div">
                {
                    countries.map(country => <Country country={country} key={country.name}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;