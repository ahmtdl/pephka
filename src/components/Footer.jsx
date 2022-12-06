import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <About>
        <h2>About Us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
          nesciunt sed. At, nulla dignissimos. Itaque, nihil suscipit ipsam
          consequuntur labore perspiciatis, tempore vitae sunt reprehenderit
          amet repellat. Quisquam, molestias perferendis.
        </p>
      </About>

      <Contact>
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
          nesciunt sed. At, nulla dignissimos. Itaque, nihil suscipit .
        </p>
      </Contact>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 100px;
`;

const About = styled.div`
  text-align: center;
  background-color: #2c3359;
`;

const Contact = styled.div`
  text-align: center;
  background-color: #396b64;
`;
