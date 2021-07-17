import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState();

  const history = useHistory();
  const getCountryDetails = (countryName) => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        // handle success
        setCountry(res, "clicked");
        const countryDetails = res?.data?.filter(
          (country) => country?.name === countryName
        );
        console.log(countryName);
        history.push({
          pathname: "/country",
          state: { detail: countryDetails[0] },
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        // handle success
        setCountries(res?.data);
        console.log(res?.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="left">
        <h1>Countries List</h1>
        {countries?.map((country, index) => {
          return (
            <>
              <h4 onClick={() => getCountryDetails(country?.name)}>
                {country?.name}
              </h4>
            </>
          );
        })}
      </div>
      <div className="right">
        {countries?.map((country, index) => {
          console.log(country, "country");
          return (
            <div className="right__container">
              <div>
                <h2>Name : {country?.name}</h2>
                <h2>Capital : {country?.capital}</h2>
                <h2> population : {country?.population}</h2>
                {countries?.languages?.map((language) => (
                  <h2 key={language?.iso639_1}>Languages : {language?.name}</h2>
                ))}
              </div>

              <div>
                <img
                  src={country?.flag}
                  alt={country?.name}
                  width={100}
                  height={100}
                />
                {countries?.currencies?.map((currency) => (
                  <h2 key={currency?.code}> Currency : {currency?.name}</h2>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
