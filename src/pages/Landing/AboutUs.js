import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { useSpring, animated } from 'react-spring';
import { fadeInAndUpWhenInView } from '../../styles/transitions';
import image from '../../assets/img/vegassign.png';
import useIntersecting from '../../hooks/useIntersecting';
import LazyImage from '../../components/LazyImage';

const description1 = `
Press Express was founded in 2018 as a new concept with the goal of providing a much needed service for business travelers, groups, as well as anyone looking for a quick and easy way to get their garments looking good in Las Vegas.`;

const description2 = ` 
We realized that many people don't need their clothing dry cleaned or washed, but simply pressed free of wrinkles and creases so they look sharp for events, business conferences, conventions, or anything else. `;

const description3 = `
  Although this business is young, the owners have over 30 years of experience in the industry and the know-how to provide expert and professional service.
  Our location only 1/2 a mile from The Strip and less than 1 mile from Downtown allows us to pickup and return garments faster than any other service in the city.
`;

function AboutUs() {
  // Animate on scroll
  const [ref, inView] = useIntersecting({
    threshold: 0.2,
    triggerOnce: true,
  });

  const spring1 = useSpring(fadeInAndUpWhenInView(inView, 0));
  const spring2 = useSpring(fadeInAndUpWhenInView(inView, 100));

  return (
    <Section id="aboutus">
      <SectionTitle>About Us</SectionTitle>
      <Container>
        <Description style={spring2}>
          <P>{description1}</P>
          <P>{description2}</P>
          <P>{description3}</P>
        </Description>
        <Images ref={ref} style={spring1}>
          <LazyImage src={image} preDistance={600} alt="Las Vegas sign." />
        </Images>
      </Container>
    </Section>
  );
}

export default AboutUs;

const Section = styled.section`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  @media (min-width: 1025px) {
    padding: 2.5rem 10%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 3rem;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Images = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  margin-bottom: 4rem;
  min-height: 200px;
`;

const Description = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  margin-bottom: 4rem;

  @media (min-width: 1025px) {
    margin-right: 2rem;
  }
`;

const P = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`;
