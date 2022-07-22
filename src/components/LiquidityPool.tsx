import React, { useEffect, useState } from 'react';

import { useWeb3React } from '@web3-react/core';
import {
  AddLiquidityWrap,
  Container,
  NavHeader,
  RemoveLiquidityWrap,
  SwapWrap,
  TabButton,
} from '../styles/AddLiquidity.styles';
import { Button } from '../styles/Header.styled';
import { BUSD_ADDRESS } from '../utils/ABI/BUSD';
import { BUST_ADDRESS } from '../utils/ABI/BUST';
import { RouterAddress } from '../utils/ABI/routers';
import {
  busdContract,
  bustContract,
  checkSummedAddress,
  deadline,
  pairContract,
  pathAddress,
  routerContract,
  web3,
} from '../utils/instances';

export const amountInWei = (amount: string) => {
  return web3.utils.toWei(amount, 'ether');
};
export const amountFromWei = (amount: string) => {
  return web3.utils.fromWei(amount, 'ether');
};

const LiquidityPool: React.FC = () => {
  const [enteredBusd, setEnteredBusd] = useState('');
  const [enteredBust, setEnteredBust] = useState('');

  const [poolToken, setPoolToken] = useState('');

  const [pooledBusd, setPooledBusd] = useState<any>(0);
  const [pooledBust, setPooledBust] = useState<any>(0);

  const [calculatedLpToken, setCalculatedLpToken] = useState('');
  const [calculatedBusdToken, setCalculatedBusdToken] = useState('');
  const [calculatedBusdtToken, setCalculatedBustToken] = useState('');

  const [enteredBusdSwap, setEnteredBusdSwap] = useState('');
  const [enteredBustSwap, setEnteredBustSwap] = useState('');

  const [selectedToken, setSelectedToken] = useState('');

  const [amountOut, setAmountOut] = useState('');
  const [amountIn, setAmountIn] = useState('');

  const [currentNav, setCurrentNav] = useState('');

  // const [toggle, setToggle] = useState(false);

  const { active } = useWeb3React();

  // const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');

  // const toggleHandler = () => {
  //   setToggle(!toggle);
  // };

  const getBustAmount = async (e: string) => {
    setEnteredBusd(e);

    const busd_bust_reserve = await pairContract.methods.getReserves().call();
    const reserveA = await busd_bust_reserve._reserve0; // busd
    const reserveB = await busd_bust_reserve._reserve1; //bust

    if (e.length !== 0) {
      const inputInWei = web3.utils.toWei(e, 'ether');

      const amountA = await routerContract.methods
        .quote(inputInWei, reserveA, reserveB)
        .call();
      const amountAinWei = web3.utils.fromWei(amountA, 'ether');

      setEnteredBusd(e);
      setEnteredBust(Number(amountAinWei).toFixed(5));
    } else {
      setEnteredBust('');
      setEnteredBusd('');
    }
  };

  const getBusdAmount = async (e: string) => {
    setEnteredBust(e);

    const busd_bust_reserve = await pairContract.methods.getReserves().call();
    const reserveA = await busd_bust_reserve._reserve0;
    const reserveB = await busd_bust_reserve._reserve1;

    if (e.length !== 0) {
      const inputInWei = web3.utils.toWei(e, 'ether');

      const amountB = await routerContract.methods
        .quote(inputInWei, reserveB, reserveA)
        .call();
      const amountBinWei = web3.utils.fromWei(amountB, 'ether');

      setEnteredBust(e);
      setEnteredBusd(Number(amountBinWei).toFixed(5));
    } else {
      setEnteredBusd('');
      setEnteredBust('');
    }
  };

  //busd approve func

  const approveBusdHandler = async (amount: string) => {
    try {
      const busdAmountInWei = web3.utils.toWei(amount, 'ether');

      await busdContract.methods
        .approve(
          RouterAddress, //spenderAdd
          busdAmountInWei
        )
        .send({ from: checkSummedAddress });

      // setApproveBusd(approveBusd);
    } catch (error) {
      console.log(error, 'busd approve');
    }

    // return approveBusd;
  };

  //bust approve func

  const approveBustHandler = async (amount: string) => {
    //create separate state for getting busd and bust amount

    try {
      const bustAmountInWei = web3.utils.toWei(amount, 'ether');

      await bustContract.methods
        .approve(
          RouterAddress, //spenderAdd
          bustAmountInWei
        )
        .send({ from: checkSummedAddress });

      // setApproveBust(approveBust);
    } catch (error) {
      console.log(error, 'bust approve');
    }

    // return approveBust;
  };

  const amountFromWei = (amount: string) => {
    return web3.utils.fromWei(amount, 'ether');
  };

  // useEffect(() => {
  //   approveBusdHandler();
  //   approveBustHandler();
  // }, []);

  //add Liq Func

  const addLiquidityHandler = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    try {
      await approveBusdHandler(enteredBusd);
      await approveBustHandler(enteredBust);

      let tokenA_address = '0x637F61C18Cd7259f7c5EA50591C7Befe6A2E0BfE';
      let tokenB_address = '0x6e03884333a30eE91AFda92E429fF4FD95Dc2850';

      let amountAdes = web3.utils.toWei(enteredBusd, 'ether');
      let amountBdes = web3.utils.toWei(enteredBust, 'ether');

      ///////////slippage amount/////////

      // let slippage = '0.5%';

      // n - (n * (p/100));

      let slippageAmountA = +amountAdes - +amountAdes * (0.5 / 100);

      let slippageAmountB = +amountBdes - +amountBdes * (0.5 / 100);

      /////////////////amount A min/////

      let amountAmin = +amountAdes - slippageAmountA;
      // let amountBmin = eval('amountBdes - slippageAmountB.toString()');

      let amountBmin = +amountBdes - slippageAmountB;

      let userAdd = checkSummedAddress;

      let deadline = Math.floor(new Date().getTime() / 1000) + 900; // 15min => 900sec

      await routerContract.methods
        .addLiquidity(
          tokenA_address,
          tokenB_address,
          amountAdes,
          amountBdes,
          amountAmin.toString(),
          amountBmin.toString(),
          userAdd,
          deadline
        )
        .send({ from: userAdd });
    } catch (error) {
      console.log(error, 'add liq err');
    }

    setEnteredBusd('');
    setEnteredBust('');
  };

  useEffect(() => {
    setCurrentNav('add');

    const checkLiquidity = async () => {
      const busd_bust_reserve = await pairContract.methods.getReserves().call();
      const reserveA = await busd_bust_reserve._reserve0; //reserve of busd
      const reserveB = await busd_bust_reserve._reserve1; // reserve of bust

      let liquidity = await pairContract.methods
        .balanceOf(checkSummedAddress)
        .call();

      let totalSupply = await pairContract.methods.totalSupply().call(); //105351868104395562131488

      const liquidityProvidedForTokenA = (reserveA / totalSupply) * liquidity;
      const liquidityProvidedForTokenB = (reserveB / totalSupply) * liquidity; // 274517642114993860

      const liquidityTokenAinWei = web3.utils.fromWei(
        liquidityProvidedForTokenA.toString(),
        'ether'
      );

      const liquidityTokenBinWei = web3.utils.fromWei(
        liquidityProvidedForTokenB.toString(),
        'ether'
      );

      setPooledBusd(liquidityTokenAinWei); // 110000000000000000
      setPooledBust(liquidityTokenBinWei);

      const poolTokenInWei = web3.utils.fromWei(liquidity, 'ether');

      // const poolTokenInNumber = Number(poolTokenInWei);

      setPoolToken(poolTokenInWei);
    };
    checkLiquidity();
  }, []);

  /////////////////

  const percentageHandler = (num: any) => {
    const lpToken = (+poolToken * num) / 100;

    const busdToken = (+pooledBusd * num) / 100;
    const bustToken = (+pooledBust * num) / 100;

    const lpTokenInWei = web3.utils.toWei(lpToken.toString(), 'ether');
    const busdTokenInWei = web3.utils.toWei(busdToken.toString(), 'ether');
    const bustTokenInWei = web3.utils.toWei(bustToken.toString(), 'ether');

    // const convertedLpvalue = lpToken.toFixed(5);
    // const convertedBusdvalue = busdToken.toFixed(5);
    // const convertedBustvalue = bustToken.toFixed(5);

    // setCalculatedLpToken(lpToken.toString());
    setCalculatedLpToken(lpTokenInWei);
    // setCalculatedBusdToken(busdToken.toString());
    setCalculatedBusdToken(busdTokenInWei);
    // setCalculatedBustToken(bustToken.toString());
    setCalculatedBustToken(bustTokenInWei);

    // calculate 25% of lp token // store in lptoken state
    // calculate 25% of busd token
    // calculate 25% of bust token
  };

  const approveLpforRemoveLiquidity = async () => {
    try {
      const lpAmountInWei = web3.utils.toWei(calculatedLpToken, 'ether');
      await pairContract.methods
        .approve(RouterAddress, lpAmountInWei)
        .send({ from: checkSummedAddress });
    } catch (error) {}
  };

  const removeLiquidityHandler = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    // await approveBusdforRemoveLiquidity();
    // await approveBustforRemoveLiquidity();

    try {
      await approveLpforRemoveLiquidity();
      // const busd_bust_reserve = await pairContract.methods.getReserves().call();
      // const reserveA = await busd_bust_reserve._reserve0; //reserve of busd
      // const reserveB = await busd_bust_reserve._reserve1; // reserve of bust

      let tokenA_address = BUSD_ADDRESS;
      let tokenB_address = BUST_ADDRESS;

      // let liquidity = await pairContract.methods // 173772669406467145
      //   .balanceOf(checkSummedAddress)
      //   .call();

      // let totalSupply = await pairContract.methods.totalSupply().call(); //105351868104395562131488

      // const liquidityProvidedForTokenA = (reserveA / totalSupply) * liquidity;
      // const liquidityProvidedForTokenB = (reserveB / totalSupply) * liquidity; // 274517642114993860

      // 10 - 0.5%(10)

      let slippageAmountA = +calculatedBusdToken * (0.5 / 100);
      let amountAmin = +calculatedBusdToken - slippageAmountA;

      let slippageAmountB = +calculatedBusdtToken * (0.5 / 100);
      let amountBmin = +calculatedBusdtToken - slippageAmountB;

      // const amountAmin = web3.utils.toWei(amountA.toString(), 'ether');
      // const amountBmin = web3.utils.toWei(amountB.toString(), 'ether');

      // const amountAmin = +liquidityAinWei - +liquidityBinWei * (0.5 / 100); // 109450000000000000
      // const amountBmin =
      //   +liquidityProvidedForTokenB - +liquidityProvidedForTokenB * (0.5 / 100); // 273145053904418880

      // const amountAminInWei = web3.utils.fromWei(amountAmin.toString(), 'ether'); // 0.10945 to show on ui
      // const amountBminInWei = web3.utils.fromWei(amountBmin.toString(), 'ether'); // 0.27314

      const userAdd = checkSummedAddress;

      let deadline = Math.floor(new Date().getTime() / 1000) + 900;

      await routerContract.methods
        .removeLiquidity(
          tokenA_address,
          tokenB_address,
          calculatedLpToken.toString(),
          amountAmin.toString(), // amountAmin
          amountBmin.toString(), // amountBmin
          userAdd,
          deadline
        )
        .send({ from: userAdd });
    } catch (error) {
      console.log(error, 'remove liq error');
    }
  };

  const showLpToken = web3.utils.fromWei(calculatedLpToken, 'ether');
  const showBusdToken = web3.utils.fromWei(calculatedBusdToken, 'ether');
  const showBustToken = web3.utils.fromWei(calculatedBusdtToken, 'ether');

  /////////////////////SWAP///////////////////////////

  const navigationHandler = (nav: string) => {
    setCurrentNav(nav);
  };

  /////////////swap/////////////////////////

  // for BUSD INPUT => IN

  const getAmountBustSwap = async (e: string) => {
    setSelectedToken('busd');

    setEnteredBusdSwap(e);

    if (e.length !== 0) {
      const inputInWei = web3.utils.toWei(e, 'ether');
      const pathAddress = [
        '0x637F61C18Cd7259f7c5EA50591C7Befe6A2E0BfE',
        '0x6e03884333a30eE91AFda92E429fF4FD95Dc2850',
      ];

      const amountBusdSwap = await routerContract.methods
        .getAmountsOut(inputInWei, pathAddress)
        .call({ from: checkSummedAddress });

      const amountBusdSwapinWei = web3.utils.fromWei(
        amountBusdSwap[1].toString(),
        'ether'
      );
      setAmountIn(amountBusdSwapinWei);

      setEnteredBusdSwap(e);
      setEnteredBustSwap(amountBusdSwapinWei);
    } else {
      setEnteredBustSwap('');
      setEnteredBusdSwap('');
    }
  };

  //fro BUST INPUT => Out

  const getAmountBusdSwap = async (e: string) => {
    setSelectedToken('bust');

    setEnteredBustSwap(e);

    if (e.length !== 0) {
      const inputInWei = web3.utils.toWei(e, 'ether');
      const pathAddress = [
        '0x637F61C18Cd7259f7c5EA50591C7Befe6A2E0BfE',
        '0x6e03884333a30eE91AFda92E429fF4FD95Dc2850',
      ];

      const amountBustSwap = await routerContract.methods
        .getAmountsIn(inputInWei, pathAddress)
        .call({ from: checkSummedAddress });

      const amountBustSwapinWei = web3.utils.fromWei(
        amountBustSwap[0].toString(),
        'ether'
      );
      setAmountOut(amountBustSwapinWei);

      setEnteredBustSwap(e);
      setEnteredBusdSwap(amountBustSwapinWei);
    } else {
      setEnteredBustSwap('');
      setEnteredBusdSwap('');
    }
  };

  const swapHandler = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (selectedToken === 'busd') {
      // swapExactTokens for Tokens

      try {
        await approveBusdHandler(enteredBusdSwap);

        // await approveBusdHandler(enteredBustSwap);

        await routerContract.methods
          .swapExactTokensForTokens(
            amountInWei(enteredBusdSwap),
            amountInWei(enteredBustSwap),
            pathAddress,
            checkSummedAddress,
            deadline
          )
          .send({ from: checkSummedAddress });
      } catch (error) {
        console.log(error, 'swapExactTokensForTokens error');
      }
    } else {
      try {
        await approveBusdHandler(amountOut);

        await approveBustHandler(enteredBustSwap);

        await routerContract.methods
          .swapTokensForExactTokens(
            amountInWei(enteredBustSwap),
            amountInWei(amountOut),
            pathAddress,
            checkSummedAddress,
            deadline
          )
          .send({ from: checkSummedAddress, gas: '2000000' });
      } catch (error) {
        console.log(error, 'swapTokensForExactTokens error');
      }
    }
  };

  return (
    <>
      <NavHeader>
        <TabButton
          onClick={() => navigationHandler('add')}
          activeTab={currentNav === 'add'}>
          Add
        </TabButton>
        <TabButton
          onClick={() => navigationHandler('remove')}
          activeTab={currentNav === 'remove'}>
          Remove
        </TabButton>
        <TabButton
          onClick={() => navigationHandler('swap')}
          activeTab={currentNav === 'swap'}>
          Swap
        </TabButton>
      </NavHeader>
      <Container>
        {currentNav === 'add' && (
          <AddLiquidityWrap>
            <form onSubmit={addLiquidityHandler}>
              <h3>Add Liquidity</h3>
              <label>
                BUSD :
                <input
                  type='text'
                  placeholder='enter BUSD'
                  onChange={(e) => {
                    getBustAmount(e.target.value);
                  }} //on entering busd amount we should get the bust amount
                  value={enteredBusd}
                />
              </label>
              <label>
                BUST :
                <input
                  type='text'
                  placeholder='enter BUST'
                  onChange={(e) => {
                    getBusdAmount(e.target.value);
                  }} //on entering bust we should get the busd amount
                  value={enteredBust}
                />
              </label>
              <div className='para-div'>
                <p>Slippage tolerance: 0.5%</p>
                <p>Transaction deadline: 15 min</p>
                {active && <p>Pool token : {Number(poolToken).toFixed(5)}</p>}
              </div>
              <Button width='300px' type='submit'>
                Add Liquidity
              </Button>
            </form>
          </AddLiquidityWrap>
        )}
        {currentNav === 'remove' && (
          <RemoveLiquidityWrap>
            <form onSubmit={removeLiquidityHandler}>
              <h3>Remove Liquidity</h3>
              <div className='percentage-section'>
                <div
                  className='percentage'
                  onClick={() => percentageHandler(25)}>
                  25%
                </div>
                <div
                  className='percentage'
                  onClick={() => percentageHandler(50)}>
                  50%
                </div>
                <div
                  className='percentage'
                  onClick={() => percentageHandler(75)}>
                  75%
                </div>
                <div
                  className='percentage'
                  onClick={() => percentageHandler(100)}>
                  100%
                </div>
              </div>
              <div className='pool-section'>
                <p>Pooled Token</p>
                <div className='pool-data'>
                  <p>LP TOKEN : </p>
                  <p>{Number(poolToken).toFixed(5)}</p>
                </div>
                <div className='pool-data'>
                  <p>BUSD POOLED : </p>
                  <p>{Number(pooledBusd).toFixed(5)}</p>
                </div>
                <div className='pool-data'>
                  <p>BUST POOLED : </p>
                  <p>{Number(pooledBust).toFixed(5)}</p>
                </div>
              </div>
              <div className='pool-section'>
                <p>Selected Pooled Token</p>
                <div className='pool-data'>
                  <p>LP TOKEN : </p>
                  <p>{Number(showLpToken).toFixed(5)}</p>
                </div>
                <div className='pool-data'>
                  <p>BUSD POOLED : </p>
                  <p>{Number(showBusdToken).toFixed(5)}</p>
                </div>
                <div className='pool-data'>
                  <p>BUST POOLED : </p>
                  <p>{Number(showBustToken).toFixed(5)}</p>
                </div>
              </div>

              <div className='price-section'>
                <p>Price:</p>
                <div className=''>
                  <p>1BUSD = 2.495614 BUST</p>
                  <p>1BUST = 0.400702 BUSD</p>
                </div>
              </div>
              <Button width='300px' margin_top='25px' type='submit'>
                Remove Liquidity
              </Button>
            </form>
          </RemoveLiquidityWrap>
        )}

        {currentNav === 'swap' && (
          <SwapWrap>
            <form onSubmit={swapHandler}>
              <h3>Swap</h3>
              <label>
                BUSD :
                <input
                  type='text'
                  name='busd'
                  placeholder='enter BUSD'
                  onChange={(e) => {
                    getAmountBustSwap(e.target.value);
                  }} //on entering busd amount we should get the bust amount
                  value={enteredBusdSwap}
                />
              </label>
              <label>
                BUST :
                <input
                  type='text'
                  name='bust'
                  placeholder='enter BUST'
                  onChange={(e) => {
                    getAmountBusdSwap(e.target.value);
                  }} //on entering bust we should get the busd amount
                  value={enteredBustSwap}
                />
              </label>
              <div className='para-div'>
                <p>Slippage tolerance: 0.5%</p>
                <p>Transaction deadline: 15 min</p>
                {active && <p>Pool token : {Number(poolToken).toFixed(5)}</p>}
              </div>
              <Button width='300px' type='submit'>
                Swap
              </Button>
            </form>
          </SwapWrap>
        )}
      </Container>
    </>
  );
};

export default LiquidityPool;
