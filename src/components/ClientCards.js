import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const CardStyles = styled.div`
  background: var(--altBackground);
  color: var(--altColour);
  border: solid 4px var(--mainColour);
  padding: 2rem 1.5rem;
  margin-right: 1rem;

  p {
    font-style: italic;
    font-weight: 600;
    font-size: 0.9rem;
  }
  h4 {
    color: var(--black);
    font-size: 1.2rem;
    margin: 1rem 0 0.5rem 0;
  }
  h5 {
    color: var(--mainColour);
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const ClientCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    centerPadding: '60px',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <CardStyles>
        <p>
          “I want to leave a good review for the work that was done today in my
          flat – repairing a bathroom extractor that wasn’t working. The workman
          was very kind and the extractor was properly fixed.
        </p>
        <h4>Joe Bloggs</h4>
        <h5>Company Name</h5>
      </CardStyles>
      <CardStyles>
        <p>
          “I want to leave a good review for the work that was done today in my
          flat – repairing a bathroom extractor that wasn’t working. The workman
          was very kind and the extractor was properly fixed.
        </p>
        <h4>Joe Bloggs</h4>
        <h5>Company Name</h5>
      </CardStyles>
      <CardStyles>
        <p>
          “I want to leave a good review for the work that was done today in my
          flat – repairing a bathroom extractor that wasn’t working. The workman
          was very kind and the extractor was properly fixed.
        </p>
        <h4>Joe Bloggs</h4>
        <h5>Company Name</h5>
      </CardStyles>
    </Slider>
  );
};

export default ClientCards;