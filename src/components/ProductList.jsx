import React from "react";
import { useGlobalContext } from "../context";
import Product from "../components/Product";
import Loading from "./Loading";
import styled from "styled-components";

const ProductList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>no cocktails matched your search criteria</h2>;
  }
  return (
    <Sec>
      <Card>
        {cocktails.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </Card>
    </Sec>
  );
};

export default ProductList;

const Sec = styled.section`
  margin-top: 40px;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-items: center;
`;
