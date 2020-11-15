import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  /* margin-right: 3rem; */
`;

const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Personal Portfolio</title>
      </Helmet>
      <HomeContainer>
        <HomeLeft>
          <h3>Welcome to my portfolio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            officia nesciunt magni molestiae mollitia adipisci qui rem at veniam
            quam cumque, similique ratione laborum ut nulla fugit optio
            necessitatibus saepe asperiores. Facere, ut! Qui cupiditate hic
            voluptates velit, quis eaque distinctio consequuntur neque optio
            alias vitae obcaecati in quaerat dicta dolore molestiae rem dolorum
            eius! Est, eos explicabo veritatis sequi repudiandae odio, expedita
            atque nobis doloribus voluptatibus ratione aliquam, dolorem quidem
            excepturi dolores enim! Animi laboriosam distinctio fugiat
            accusamus, eligendi vero. Ipsam inventore illum minima. Maiores
            nesciunt error reprehenderit quaerat? Placeat deserunt voluptas est
            vitae itaque doloribus ea quam quis.
          </p>
        </HomeLeft>
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
