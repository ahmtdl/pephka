import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleProduct = ({ image, name, id, info, glass }) => {
  return (
    <Wrapper>
      <Img>
        <img src={image} alt={name} />
      </Img>
      <hr />
      <Footer>
        <h3>{name}</h3>
        <p>{glass}</p>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>details</Link>
      </Footer>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 350px;
  background: white;
  margin-bottom: 2rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
  border-radius: 0.5rem;
  justify-content: center;

  hr {
    top: 80%;
    width: 100%;
    align-items: center;
    border: 0;
    height: 1.5px;
    background-image: linear-gradient(
      to right,
      rgba(73, 189, 166, 0),
      rgba(73, 189, 166, 1),
      rgba(73, 189, 166, 0)
    );
  }
`;

const Img = styled.div`
  img {
    margin-top: 1.5rem;
    height: 18rem;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

const Footer = styled.div`
  font-family: "Roboto Mono", monospace;

  h3 {
    text-align: center;
  }

  a {
    margin-bottom: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    border: 2px solid rgba(73, 189, 166);
    padding: 0.45rem 0.8rem;
    cursor: pointer;
    font-size: 1rem;
    background: rgba(73, 189, 166, 1.5);
    align-content: flex-end;
    border-radius: 2px;
    display: inline-block;
    &:hover {
      background: rgba(73, 189, 166, 0.7);
    }
  }

  p {
    margin-left: 0;
    color: gray;
  }
`;
