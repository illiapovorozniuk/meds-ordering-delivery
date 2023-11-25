import { useState, FC, ChangeEvent, useEffect, useRef } from "react";
import styles from "./Searchbar.module.scss";

interface SearchBarProps {
  onInputChange: (input: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onInputChange }) => {
  const [input, setInput] = useState<string>("");
  const inputEl = useRef<HTMLInputElement | null>(null);
  useEffect(function () {
    if (inputEl.current) inputEl.current.focus();
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    onInputChange(inputValue);
  };

  return (
    <input
      className={styles.searchbar}
      type="text"
      value={input}
      onChange={handleInput}
      placeholder="Search..."
      ref={inputEl}
    />
  );
};

export default SearchBar;
