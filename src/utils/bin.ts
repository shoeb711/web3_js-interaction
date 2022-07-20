import React from 'react';
// const getReserveHandler = async () => {
//   const busd_bust_reserve = await pairContract.methods.getReserves().call();
//   // console.log(busd_bust_reserve);
//   const reserveA = await busd_bust_reserve._reserve0; //reserve of busd
//   const reserveB = await busd_bust_reserve._reserve1; // reserve of bust

//   console.log('reserve of tokenA(busd) :', reserveA);
//   console.log('reserve of tokenB(bust) :', reserveB);

//   //

//   const amountA = await routerContract.methods
//     .quote('1000000000000000000', reserveA, reserveB)
//     .call();
//   const amountAinWei = web3.utils.fromWei(amountA, 'ether'); //Converts any wei value into a ether value.
//   console.log('amount A => ', amountAinWei);

//   //

//   const amountB = await routerContract.methods
//     .quote('1000000000000000000', reserveB, reserveA)
//     .call();
//   const amountBinWei = web3.utils.fromWei(amountB, 'ether'); //Converts any wei value into a ether value.

//   console.log('amount B => ', amountBinWei);
// };

// useEffect(() => {
//   getReserveHandler();
//   // getBustAmount()
// }, []);

// const enteredBusdInWei = web3.utils.toWei(enteredBusd, 'ether'); //Converts any ether value value into wei.
// const enteredBustInWei = web3.utils.toWei(enteredBust, 'ether');

// const busdInputValue = e.currentTarget.value;
// console.log(e);
//logic
//1 busd = 2.495727..
//for eg => calculatedBustAmount = userInput(e) * amountInWei
// const calculatedBustAmount = eval('e * amountAinWei');
// const calculatedBustAmount = +e * +amountAinWei;
// let amountInDecimal = calculatedBustAmount.toFixed(6);
// console.log(num);
// console.log(calculatedBustAmount);

// const amountB = await routerContract.methods
//   .quote('1000000000000000000', reserveB, reserveA)
//   .call();
// const amountBinWei = web3.utils.fromWei(amountB, 'ether');
// // const busdInputValue = e.currentTarget.value;
// // console.log(e);
// setEnteredBust(e);
// //logic
// //1 bust =  0.400684
// //for eg => calculatedBusdAmount = userInput(e) * amountInWei
// // const calculatedBusdAmount = eval('e * amountBinWei');
// const calculatedBusdAmount = +e * +amountBinWei;
// let amountInDecimal = calculatedBusdAmount.toFixed(6);
// // console.log(calculatedBusdAmount);
// setEnteredBusd(amountInDecimal);
// setEnteredBusd(e)

// const approveBusdforRemoveLiquidity = async () => {
//   try {
//     const busdAmountInWei = web3.utils.toWei(pooledBusd, 'ether');
//     await pairContract.methods
//       .approve(RouterAddress, busdAmountInWei)
//       .send({ from: checkSummedAddress });
//   } catch (error) {}
// };
// const approveBustforRemoveLiquidity = async () => {
//   try {
//     const bustAmountInWei = web3.utils.toWei(pooledBust, 'ether');
//     await pairContract.methods
//       .approve(RouterAddress, bustAmountInWei)
//       .send({ from: checkSummedAddress });
//   } catch (error) {}
// };

//
// eslint-disable-next-line no-lone-blocks
{
  /* <div className='right-arrow-svg' onClick={toggleHandler}>
              {toggle ? (
                <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z' />
                </svg>
              ) : (
                <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
                </svg>
              )}
            </div> */
}
//
