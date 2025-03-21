import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Abel', sans-serif;
  color: #000;
  background: #fff;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  -webkit-box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.27);
  -moz-box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.27);
  box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.27);

  img {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 15px;
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
    font-weight:bold;
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
    font-style:italic;
  }
`;
