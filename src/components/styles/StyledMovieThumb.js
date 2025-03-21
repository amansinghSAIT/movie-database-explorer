import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    -webkit-box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.27);
    -moz-box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.27);
    box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.27);

    :hover {
       transform:translateY(-15px) scale(1.1);
       -webkit-transform:translateY(-15px) scale(1.1);
       -moz-transform:translateY(-15px) scale(1.1);
       -webkit-box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.4);
       -moz-box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.4);
       box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.4);
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;
