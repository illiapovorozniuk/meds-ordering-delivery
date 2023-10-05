import styles from "./Location.module.scss"
import {FC} from 'react'
import {ICity} from '../../types/city'
import LocationItem from "./LocationItem"
import {cities} from "../../../FAKE DATA/cities"

const Location = ()=>{

    return (
        <>
        <div className={styles.locationWrapper}>
            {cities.map((city)=>(
                <LocationItem name={city.name} region={city.region}/>
            ))}
        </div>
        </>
        );
    
}

export default Location;