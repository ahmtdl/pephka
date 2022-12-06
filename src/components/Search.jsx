import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearch(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  const clearInput = () => {
    setSearch("");
    searchValue.current.value = "";
  };

  return (
    <Wrapper>
      <Input onSubmit={handleSubmit}>
        <input
          placeholder="Search a cocktail..."
          type="text"
          ref={searchValue}
          onChange={searchCocktail}
        />
        <div>
          <button type="submit" onClick={searchCocktail}>
            <SearchOutlinedIcon />
          </button>
          <button type="submit" onClick={clearInput}>
            <CloseIcon />
          </button>
        </div>
      </Input>
    </Wrapper>
  );
};

export default Search;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr auto;
  margin-left: 80px;
  margin-top: 40px;
  justify-self: center;
`;

const Input = styled.div`
  display: flex;
  position: relative;
  font-family: "Roboto Mono", monospace;
  border: 3px solid #52d3b9;

  input {
    font-family: "Roboto Mono", monospace;
    font-size: 18px;
    text-align: center;
    letter-spacing: 2px;
    height: 50px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }

  button {
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
  }

  button:first-child {
    color: green;
  }

  button:last-child {
    color: red;
  }

  div {
    position: absolute;
    height: 100%;
    right: 5px;
  }
`;
