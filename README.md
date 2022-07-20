tokenA = '0x637F61C18Cd7259f7c5EA50591C7Befe6A2E0BfE'; //busd
tokenB = '0x6e03884333a30eE91AFda92E429fF4FD95Dc2850'; // bust
bsc testnet url = 'https://data-seed-prebsc-1-s1.binance.org:8545/'

spender add = '0xBEDa4Ea077766b43092397B0AE7D53bC999561eB' (router add)
bust-busd pairAddress = '0x3CeDdD8906A01B493C21a5c0B3Ed884eaCCb74D4'

we get approve method from pair contract
add/remove liquidity from spender contract

amounAmin = desiredamount -slippage
to(address) = our metamask add

busd approve = routerAdd, busd input amount

///////////////////for adding liquidity//////////////////////////

first create a func to approve token
get the token add and abi respectively for both the tokens

// it'll return us bool => wheather it is approved ot not
func approveBusdToken(){
contract.approve(routerAdd,inputAmountInBusd)
}
func approveBustToken(){} //same as above

If approve is true then call the addLiquidityFunc
addLiq(){

    }

///////////////////////remove/////////////////////

approve liq func from pair contract
liq param = lp token in wei
amountAmin => actual amount - (actual amount \* slippage%)

////////////////swap//////////////////

from routerContract => read method

getAmountsIn(amountOut,path[0,1]) address order is important
inputBUSD **\_**?**\_**
inputBUST **\_**1**\_\_** => amountOut in Wei
//
getAmountOut(amountOut,path[0,1])
inputBUSD **\_**1**\_** => amoutIn in Wei
inputBUST **\_**?**\_\_**

run npm install to get of : Uncaught ReferenceError: process is not defined
at Object.4043 (<anonymous>:2:13168)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
