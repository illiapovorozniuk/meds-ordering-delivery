'use client'

import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    const [isExtended, setIsExtended] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== '') {
            if (!isExtended) setIsExtended(true);
        }
        else {
            setIsExtended(false);
        }
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsExtended(false);
    };

    return (
        <div className={`${styles.searchBar} ${isExtended ? styles.extended : ''}`}>
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default SearchBar
