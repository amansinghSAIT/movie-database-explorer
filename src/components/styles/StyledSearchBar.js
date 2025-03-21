import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 105px;
  background: #000;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
  animation: animateBar 1s;

  @keyframes animateBar {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: transparent
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #fff;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #fff;
    z-index: 1000;
  }

  input {
    font-family: 'Abel', sans-serif;
    font-size: 28px;
    position: absolute;
    border-bottom:1px solid #000;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;
    box-sizing: border-box;

    :focus {
      outline: none;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
      opacity: 1; /* Firefox */
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #fff;
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #fff;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
