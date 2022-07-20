import styled from 'styled-components';

export const VoterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
  align-items: center;
`;

export const VoterDiv = styled.div`
  position: relative;
  margin: 2rem;
  background: #eddfb3;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 13rem;
  width: 17rem;
  align-items: center;

  box-shadow: 0 3px 3px rgb(0 0 0 / 3%), 0 1px 8px rgb(0 0 0 / 11%);

  p {
    background-color: #fffbfb;
    position: absolute;
    top: -35px;
    background: #fff;
    border-radius: 1rem;
    padding: 7px 15px;
    box-shadow: 0 3px 3px rgb(0 0 0 / 3%), 0 1px 8px rgb(0 0 0 / 11%);
  }
  button {
    border: 1px solid #fff;
    border-radius: 14px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 38px;
    background: transparent;
    box-shadow: 0 3px 3px rgb(0 0 0 / 3%), 0 1px 8px rgb(0 0 0 / 11%);
  }

  button:active {
    transform: scale(0.96);
  }
`;
