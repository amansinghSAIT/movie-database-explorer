import styled from 'styled-components';

export const StyledSpinner = styled.div`
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #000; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
