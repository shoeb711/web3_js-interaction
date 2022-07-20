// import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import ReactDOM from 'react-dom';
import { injector } from '../utils/connector';
import {
  Button,
  ConnectedAccountButtonWrap,
  ConnectedHeaderWrap,
  ContentWrap,
  NavTab,
  StyledHeader,
  StyledNavLink,
} from '../styles/Header.styled';
import { useEffect, useState } from 'react';
import { web3 } from '../utils/instances';
import { amountFromWei } from './AddLiquidity';
import WalletModal from '../utils/UI/WalletModal';

const Header = () => {
  const [bnbBalance, setbnbBalane] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const { account, active, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injector);
      localStorage.setItem('isConnected', 'true');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (localStorage.getItem('isConnected') === 'true') {
    //   connect();
    // }
    const init = async () => {
      const bnbBalance = await web3.eth.getBalance(
        '0x2af14574a34b08194e2Dd64bb9c234581D8b017D'
      );

      setbnbBalane(Number(amountFromWei(bnbBalance)).toFixed(4));
    };
    init();
  }, []);

  const formatArticleTitle = (account: any) => {
    if (account.length > 40) {
      const title_1 = account.substring(0, 12);
      const title_2 = account.substring(account.length - 9);
      const formattedTitle = `${title_1}....${title_2}`;
      return formattedTitle;
    } else {
      return account;
    }
  };

  return (
    <StyledHeader>
      <ContentWrap>
        <StyledNavLink to='/liquidity-pool'>
          <NavTab>Liquidity Pool & Swap</NavTab>
        </StyledNavLink>
        <StyledNavLink to='/voter'>
          <NavTab>Vote System</NavTab>
        </StyledNavLink>
      </ContentWrap>
      <ContentWrap>
        {!active ? (
          <button onClick={connect}>connect</button>
        ) : (
          <ConnectedHeaderWrap>
            <ConnectedAccountButtonWrap>
              <span>{bnbBalance}</span>
              <button onClick={() => setShowModal((prevState) => !prevState)}>
                {' '}
                {formatArticleTitle(account)}
              </button>
            </ConnectedAccountButtonWrap>
          </ConnectedHeaderWrap>
        )}
      </ContentWrap>

      {showModal && (
        <>
          {ReactDOM.createPortal(
            <WalletModal showModal={showModal} setShowModal={setShowModal} />,
            // @ts-ignore
            document.getElementById('wallet-overlay')
          )}
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
