import { Input, SearchButton, SearchBoxContainer } from "./styles";
import SearchIcon from "../../assets/lupa.svg";
import { useCar } from "../../hooks/useCar";
import { useState } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleGetCarsByName } = useCar();

  return (
    <SearchBoxContainer>
      <Input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite aqui sua busca..."
      />
      <SearchButton onClick={() => handleGetCarsByName(searchTerm)}>
        <img src={SearchIcon} alt="Search" />
      </SearchButton>
    </SearchBoxContainer>
  );
};

export default SearchBox;
