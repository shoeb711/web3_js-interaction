import styled from 'styled-components';

export const ModalWrapper = styled.div<any>`
  /* width: 80%; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  padding: 3rem 4rem;
`;

export const ModalContainer = styled.div<any>`
  /* position: fixed;
  top: 43vh;
  left: 36%;
  background: #fff;
  z-index: 100;
  overflow: hidden;
  border-radius: 10px; */

  display: ${(props) => (props.show ? 'block' : 'none')};

  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;
