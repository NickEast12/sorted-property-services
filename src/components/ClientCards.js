import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const CardStyles = styled.div`
  @media only screen and (min-width: 100px) {
    background: var(--altBackground);
    color: var(--altColour);
    border: solid 4px var(--mainColour);
    padding: 2rem 1.5rem;
    margin-right: 1rem;

    p {
      font-style: italic;
      font-weight: 600;
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 375px) {
    p {
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 414px) {
    p {
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    /* padding: 2.5rem 2rem 1rem 2rem; */
  }
  @media only screen and (min-width: 1280px) {
    /* padding: 1.5rem 2rem 1rem 2rem; */
  }
  @media only screen and (min-width: 1440px) {
    /* padding: 2.5rem 2rem 1rem 2rem; */
  }
`;

const ClientCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 320,
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
          “A Sorted engineer attended our house for an energy check yesterday. I
          just wanted to say thank you – he went out of his way to help get our
          little girl’s radiator working. It’s lovely to have somebody who wants
          to help.”
        </p>
      </CardStyles>
      <CardStyles>
        <p>
          “I want to leave a good review for the work that was done today in my
          flat – repairing a bathroom extractor that wasn’t working. The workman
          was very kind and the extractor was properly fixed."
        </p>
      </CardStyles>
      <CardStyles>
        <p>
          “I just wanted to send a note thanking you for the work that your
          engineer did today and last week on my apartment. He was very
          efficient, polite and a pleasure to work with.”
        </p>
      </CardStyles>
      <CardStyles>
        <p>
          “I recently had Steven over to paint my bathroom ceiling, where there
          had been visible water damage. He went above and beyond!”
        </p>
      </CardStyles>
    </Slider>
  );
};

export default ClientCards;
