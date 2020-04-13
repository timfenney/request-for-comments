import React from 'react';
import styled from 'styled-components';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

const UP = 'UP';
const DOWN = 'DOWN';

const Votes = styled.span`
  text-transform: uppercase;
  font-weight: 400;
  whitespace: nowrap;
  font-size: 0.75rem;
  margin-left: 0.375rem;
  &:hover {
    cursor: pointer;
  }
`;

const UpIconOrig = styled(KeyboardArrowUpRoundedIcon)`
  transform: translateY(-28%);
  &:hover {
    cursor: pointer;
  }
`;

const UpIcon = () => (
  <UpIconOrig
    style={{
      stroke: 'white',
      fontSize: '2rem',
      margin: '0 -8px 0 12px',
    }}
  />
);

const DownIconOrig = styled(KeyboardArrowDownRoundedIcon)`
  transform: translateY(-30%);
  &:hover {
    cursor: pointer;
  }
`;

const DownIcon = () => (
  <DownIconOrig
    style={{
      stroke: 'white',
      fontSize: '2rem',
      margin: '0 -8px 0 12px',
    }}
  />
);

const DownIconDid = () => (
  <DownIconOrig
    style={{
      color: '#5070FF',
      stroke: 'white',
      fontSize: '2rem',
      margin: '0 -8px 0 12px',
    }}
  />
);

const UpIconDid = () => (
  <UpIconOrig
    style={{
      color: '#5070FF',
      stroke: 'white',
      fontSize: '2rem',
      margin: '0 -8px 0 12px',
    }}
  />
);

const ICONS_BY_DIRECTION_AND_DID = {
  [UP]: UpIcon,
  [DOWN]: DownIcon,
  [`${UP}-did`]: UpIconDid,
  [`${DOWN}-did`]: DownIconDid,
};

const Vote = ({didVote, direction, numVotes, vote}) => {
  const suffix = didVote ? '-did' : '';
  const prefix = direction === UP ? UP : DOWN;
  const key = `${prefix}${suffix}`;
  const Icon = ICONS_BY_DIRECTION_AND_DID[key];
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
      }}
      onClick={vote}
    >
      <Icon onClick={vote} />
      <Votes onClick={vote}>
        {numVotes}
      </Votes>
    </div>
  );
};

export const Upvote = (props) => (
  <Vote
    direction={UP}
    {...props}
  />
);

export const Downvote = (props) => (
  <Vote
    direction={DOWN}
    {...props}
  />
);