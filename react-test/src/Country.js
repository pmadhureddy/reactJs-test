import React from "react";
import { useHistory } from "react-router-dom";

function Country() {
  const history = useHistory();
  const country = history?.location?.state?.detail;
  console.log(history, "history");
  return (
    <div className="country__container">
      <div className="country">
        <h1>Country Name : {country?.name}</h1>
        <h1>Capital : {country?.capital}</h1>
        <h1>population : {country?.population}</h1>

        <h1>{country?.languages?.length > 0 && "Languages"} </h1>
        {country?.languages?.map((language) => (
          <h2 key={language?.iso639_1}>
            {" "}
            {language?.name ? language?.name : ""}
          </h2>
        ))}
      </div>
      <div>
        <img src={country?.flag} alt={country?.name} width={100} height={100} />
      </div>
    </div>
  );
}

export default Country;
