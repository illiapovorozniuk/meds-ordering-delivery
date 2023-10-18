import styles from "./Location.module.scss"
import {FC, useState, useEffect} from 'react'
import {ICity} from '../../types/city'
import LocationItem from "./LocationItem"
import {citiesData} from "../../../FAKE DATA/cities"
import SearchBar from "../ui/searchbar/Searchbar"
const Location = ()=> {

    const [selectedCities, changeCities] = useState<ICity[]>([]);
    const [searchInput, changeSearchInput] = useState<string>("");

    useEffect(() => {
        if (searchInput === "") {
            changeCities(citiesData);
        } else {
            changeCities(citiesData.filter(city => city.name.match(searchInput)));
        }
    }, [searchInput]);

    return (
        <>
        <div>
            <SearchBar onInputChange={changeSearchInput}/>
        </div>
        <div className={styles.locationWrapper}>
            {selectedCities.map((city)=>(
                <LocationItem name={city.name} region={city.region}/>
            ))}
        </div>
        </>
        );
    
}

export default Location;