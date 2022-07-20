import styled from 'styled-components';

// interface IProps {
//   toggle: boolean;
// }

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 370px; //665px 370px
  height: 470px;
  background-color: #eddfb3;
  border-radius: 10px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;

  .liq-button {
    margin-top: 30px;
  }
  h3 {
    margin: 0px;
  }
`;

export const AddLiquidityWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  font-size: 30px;
  font-weight: 200;

  label {
    margin-left: 20px;
  }

  input {
    height: 45px;
    border-radius: 8px;
    margin: 20px 40px;
    border: none;
    text-transform: uppercase;
    outline: none;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
  }

  .para-div {
    margin: 25px 0px;
  }

  p {
    margin: 0px;
    font-size: 16px;
    font-weight: 400;
  }

  /*  */
`;

export const NavHeader = styled.div`
  display: flex;
  margin-top: 30px;
  background-color: #eddfb3;
  width: 371px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 9px;
  justify-content: space-evenly;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

export const TabButton = styled.button<any>`
  border: none;
  width: 82px;
  height: 41px;
  margin: 5px;
  border-radius: 8px;
  transition: 0.3s;
  box-shadow: ${(props) =>
    props.activeTab ? '0 0.5em 0.5em -0.4em #886f6f' : null};

  cursor: pointer;
  &:hover {
    &:hover {
      box-shadow: 0 0.5em 0.5em -0.4em #886f6f;
      transform: translateY(-0.17em);
    }
  }
`;

export const RemoveLiquidityWrap = styled.div`
  display: flex;
  /* flex-direction: column; */

  align-items: center;
  font-size: 30px;
  font-weight: 200;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
  }

  p {
    margin: 0px;
    font-size: 16px;
    font-weight: 400;
  }

  .pool-section {
    width: 100%;
    margin: 10px 0px 8px;
  }

  .pool-data {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 10px;
  }
  .percentage-section {
    display: flex;
    justify-content: space-evenly;
    font-size: 18px;
  }
  .percentage {
    padding: 0.4rem;
    background-color: #bcb0bc;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: white;
    border-radius: 7px;
    cursor: pointer;
    /* margin: 20px 0px; */
  }
  /* .right-arrow-svg {
    position: absolute;
    top: 38%;
    right: 0;
    cursor: pointer;
  } */
`;

export const SwapWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  font-size: 30px;
  font-weight: 200;

  label {
    margin-left: 20px;
  }

  input {
    height: 45px;
    border-radius: 8px;
    margin: 20px 40px;
    border: none;
    text-transform: uppercase;
    outline: none;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
  }

  .para-div {
    margin: 25px 0px;
  }

  p {
    margin: 0px;
    font-size: 16px;
    font-weight: 400;
  }
`;
