import styles from "./Location.module.scss";
import { FC, useState, useEffect } from "react";
import { ICity } from "../../types/city";
import { v4 } from "uuid";
import LocationItem from "./LocationItem";
import { citiesData } from "../../../FAKE DATA/cities";
import SearchBar from "../ui/searchbar/Searchbar";

const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2c4f283e04mshed6a21428b69aadp18d87ajsn2b3c0bdaea90",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const Location = () => {
  const [selectedCities, changeCities] = useState<any>([]);
  const [searchInput, changeSearchInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    changeCities([]);
    setError("");
    setIsLoading(true);
    const controller = new AbortController();
    async function fetchCities() {
      try {
        const res: any = await fetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=Q212&namePrefix=${searchInput}`,
          { ...OPTIONS, signal: controller.signal }
        );
        const data: any = await res.json();
        if (!data) throw new Error("Cannot find the city by this name");
        if (data.message) throw new Error("Too many requests");
        changeCities(data.data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    const timer: NodeJS.Timeout = setTimeout(fetchCities, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  // useEffect(
  //   function () {
  //     function getLocation() {
  //       if (!navigator.geolocation) return setError("Geolocation is disabled");
  //       let coords: object;
  //       navigator.geolocation.getCurrentPosition(
  //         (pos) => {
  //           coords = {
  //             lat: pos.coords.latitude,
  //             lng: pos.coords.longitude,
  //           };
  //           setIsLoading(false);
  //         },
  //         (error) => {
  //           setError(error.message);
  //           setIsLoading(false);
  //         }
  //       );
  //     }
  //   },
  //   [isLoading]
  // );

  return (
    <>
      <div>
        <SearchBar onInputChange={changeSearchInput} />
        {/* <button
          className={styles.button}
          disabled={isLoading ? true : false}
          onClick={() => setIsLoading(true)}
        >
          Get my current location
        </button> */}
      </div>
      {selectedCities.length !== 0 && !isLoading && (
        <div className={styles.locationWrapper}>
          {selectedCities.map((city: any) => (
            <LocationItem name={city.city} region={city.region} key={v4()} />
          ))}
        </div>
      )}
      {error && { error }}
      {isLoading && "Loading..."}
    </>
  );
};

export default Location;
