import { useState, FC, ChangeEvent } from "react";

interface SearchBarProps {
  onInputChange: (input: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onInputChange }) => {
  const [input, setInput] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    onInputChange(inputValue);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleInput}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
