import React from 'react';
import styled from 'styled-components';
//import avatar from './assets/myAvatar.png'



const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const About = () => (
    <GridWrapper>
        <h2>About Page</h2>
        {/* <img src={avatar} alt="avator of megan"/> */}
        Hello, I am Megan. I was born and raised in Colorado Springs, CO. I am a mother and wife. My
        education background is a BS in Human Biology from the University of Colorado.
        I taught middle and high school, biology and Chemistry were my main focus. While teaching middle
        school I taught Project Lead The Way, this is where I found my love of coding.
        I love science, my kids and trying to be a runner. My favorite color pink and coral. The beach and mountains are my happy place.
    </GridWrapper>
)