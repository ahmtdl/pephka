import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Logo>
          <Link to="/">pephka</Link>
        </Logo>

        <Links>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Cocktails</Link>
        </Links>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
`;

const Logo = styled.h1`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Roboto Mono", monospace;

  a {
    text-decoration: none;
    color: white;
    letter-spacing: 3px;
    &:hover {
      color: #52d3b9;
    }
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 60px;
  justify-content: end;
  text-transform: uppercase;
  margin-right: 20%;

  a {
    text-decoration: none;
    color: white;
    font-family: "Roboto Mono", monospace;
    font-size: 17px;
    letter-spacing: 2px;
    &:hover {
      color: #52d3b9;
    }
  }
`;

export default Navbar;
