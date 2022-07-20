import { RouterAddress, RouterABI } from './ABI/routers';
import { PairAddress, PairABI } from './ABI/Pair';

import Web3 from 'web3';
import { BUSD_ABI, BUSD_ADDRESS } from './ABI/BUSD';
import { BUST_ABI, BUST_ADDRESS } from './ABI/BUST';
import { voterABI, voterAddress } from './ABI/voter';

export const web3 = new Web3(Web3.givenProvider);
// const web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545/');
// export const web3 = new Web3(
//   'https://ropsten.infura.io/v3/7101ce22b97a4283b23b5d020ae90cb4'
// );

const userAdd = '0x2af14574a34b08194e2Dd64bb9c234581D8b017D';

export const checkSummedAddress = web3.utils.toChecksumAddress(userAdd);

export const pairContract = new web3.eth.Contract(PairABI, PairAddress);
export const routerContract = new web3.eth.Contract(RouterABI, RouterAddress);

export const busdContract = new web3.eth.Contract(BUSD_ABI, BUSD_ADDRESS);
export const bustContract = new web3.eth.Contract(BUST_ABI, BUST_ADDRESS);

export const voterContract = new web3.eth.Contract(voterABI, voterAddress);

export const pathAddress = [
  '0x637F61C18Cd7259f7c5EA50591C7Befe6A2E0BfE',
  '0x6e03884333a30eE91AFda92E429fF4FD95Dc2850',
];

export const deadline = Math.floor(new Date().getTime() / 1000) + 900;
