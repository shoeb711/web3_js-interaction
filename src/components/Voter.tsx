import { useWeb3React } from '@web3-react/core';
import React, { useEffect } from 'react';
import { VoterContainer, VoterDiv } from '../styles/Voter.styles';
import { voterContract } from '../utils/instances';

const Voter = () => {
  const [candidateCount, setCandidateCount] = React.useState({
    candidateOne: 0,
    candidateTwo: 0,
  });

  const [voted, setVoted] = React.useState<boolean>(false);
  const { account, active } = useWeb3React();

  const candidateOnehandler = async () => {
    try {
      if (account && active && !voted) {
        const res = await voterContract.methods.vote(1).send({ from: account });
        return res;
      } else {
        alert('Please connect to Metamask');
      }
    } catch (error) {
      console.log(error, 'candidate One err');
    }
  };
  const candidateTwohandler = async () => {
    try {
      if (account && active) {
        const res = await voterContract.methods.vote(2).send({ from: account });
        return res;
      } else {
        alert('Please connect to Metamask');
      }
    } catch (error) {
      console.log(error, 'candidate Two err');
    }
  };

  useEffect(() => {
    const getCandidateCount = async () => {
      const candidateOneCount = await voterContract.methods
        .candidates(1)
        .call();
      const candidateTwoCount = await voterContract.methods
        .candidates(2)
        .call();

      setCandidateCount({
        ...candidateCount,
        candidateOne: candidateOneCount.voteCount,
        candidateTwo: candidateTwoCount.voteCount,
      });
    };

    getCandidateCount();
  }, []);

  useEffect(() => {
    const checkIfVoted = async () => {
      try {
        const tx = await voterContract.methods.voters(account).call();
        setVoted(tx);
        return;
      } catch (error) {
        console.error('getVoters error', error);
      }
    };
    checkIfVoted();
  }, [account]);

  return (
    <VoterContainer>
      <VoterDiv>
        <p>Candidate One</p>
        <div>Total Vote : {candidateCount?.candidateOne}</div>
        {voted && <div style={{ color: 'red' }}>You have already voted</div>}
        <button onClick={candidateOnehandler} disabled={voted}>
          Vote
        </button>
      </VoterDiv>
      <div>VS</div>
      <VoterDiv>
        <p>Candidate Two</p>
        <div>Total Vote : {candidateCount?.candidateTwo}</div>
        {voted && <div style={{ color: 'red' }}>You have already voted</div>}
        <button onClick={candidateTwohandler} disabled={voted}>
          Vote
        </button>
      </VoterDiv>
    </VoterContainer>
  );
};

export default Voter;
