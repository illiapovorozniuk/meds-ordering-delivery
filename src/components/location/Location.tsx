import styles from "./Location.module.scss";
import { FC, useState, useEffect } from "react";
import { ICity } from "../../types/city";
import { v4 } from "uuid";
import LocationItem from "./LocationItem";
import { citiesData } from "../../../FAKE DATA/cities";
import SearchBar from "../ui/searchbar/Searchbar";
const Location = () => {
  const [selectedCities, changeCities] = useState<ICity[]>([]);
  const [searchInput, changeSearchInput] = useState<string>("");

  useEffect(() => {
    if (searchInput === "") {
      changeCities(citiesData);
    } else {
      changeCities(citiesData.filter((city) => city.name.match(searchInput)));
    }
  }, [searchInput]);

  return (
    <>
      <div>
        <SearchBar onInputChange={changeSearchInput} />
      </div>
      {selectedCities.length !== 0 ? (
        <div className={styles.locationWrapper}>
          {selectedCities.map((city) => (
            <LocationItem name={city.name} region={city.region} key={v4()} />
          ))}
        </div>
      ) : (
        <div className="message-container">
          <p className="zero-results-message">Sorry, no results were found.</p>
        </div>
      )}
    </>
  );
};

export default Location;
