import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { Button } from '../../styles/Header.styled';
import { ModalContainer, ModalWrapper } from '../../styles/WalletModal';

const WalletModal = ({ showModal, setShowModal }: any) => {
  const { account, active, deactivate } = useWeb3React();

  const disconnect = async () => {
    try {
      await deactivate();
      setShowModal(false);
      localStorage.setItem('isConnected', 'false');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(showModal, 'showModal');

  return (
    <ModalContainer show={showModal} onClick={() => setShowModal(false)}>
      <ModalWrapper>
        <div>{account}</div>
        <div>
          {active && (
            <Button margin_top='35px' onClick={disconnect}>
              disconnect
            </Button>
          )}
        </div>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default WalletModal;
