import React from 'react';
import styled from 'styled-components';
import formatEllapsedTime from './formatEllapsedTime';
import { Downvote, Upvote } from './Vote';
const UP = 'UP';
const DOWN = 'DOWN';

const Commenter = styled.span`
  font-weight: 500;
  bottom: 2px;
  margin-right: 0.375rem;
`;

const Label = styled.span`
  text-transform: uppercase;
  font-weight: 400;
  color: #dddddd;
  whitespace: nowrap;
  font-size: 0.75rem;
`;

const StyledChip = styled.div`
  height: 16px;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: black;
  align-items: center;
  display: inline-flex;
  flex-grow: 0;
  margin-right: 0.375rem;
  transform: translateY(5%);
`;

const Chip = ({children}) => (
  <StyledChip>
    <Label>{children}</Label>
  </StyledChip>
);

const EllapsedTimeIndicatorOuter = styled.div`
  height: 16px;
  align-items: center;
  display: inline-flex;
  flex-grow: 0;
  margin-right: 0.375rem;
  transform: translateY(5%);
  color: #cccccc;
`;

const EllapsedTimeIndicatorInner = styled.span`
  text-transform: uppercase;
  font-weight: 400;
  whitespace: nowrap;
  font-size: 0.75rem;
  margin-left: 0.375rem;
  color: #cccccc;
`;

const EllapsedTimeIndicator = ({start, end}) => (
  <EllapsedTimeIndicatorOuter>
    &middot;
    <EllapsedTimeIndicatorInner>
      {formatEllapsedTime({start, end})}
    </EllapsedTimeIndicatorInner>
  </EllapsedTimeIndicatorOuter>
);

const RepliesCopy = styled.span`
  text-transform: uppercase;
  font-weight: 400;
  whitespace: nowrap;
  font-size: 0.75rem;
  margin-right: 0.375rem;
`;

const ReplyAllStyles = styled.span`
  text-transform: uppercase;
  font-weight: 400;
  whitespace: nowrap;
  font-size: 0.75rem;
  margin-right: 0.375rem;
  &:hover {
    cursor: pointer;
  }
`;

const Reply = ({reply}) => <ReplyAllStyles onClick={reply}>reply</ReplyAllStyles>;

const NumReplies = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  whitespace: nowrap;
  font-size: 0.75rem;
  margin-right: 0.375rem;
  &:not(:first-child) {
    margin-left: 1.25rem;
  }
`;
const Replies = ({numReplies}) => (
  <>
    <NumReplies>
      {numReplies}
    </NumReplies>
    &nbsp;
    <RepliesCopy>
      replies
    </RepliesCopy>
  </>
);

const CardContainer = styled.div`
  border-top-color: #cccccc;
  border-top-style: solid;
  border-top-width: 1px;
  padding-top: 30px;
  padding-left: 11px;
  padding-right: 11px;
  display: flex;
  &:last-of-type {
    border-bottom-color: #cccccc;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const CommentContainer = styled.div`
  margin-left: 24px;
`;

const ResponseArea = styled.div`
  margin-top: 1rem;
  display: flex;
  opacity: 0.4;
  transition: 0.3s;
  ${CardContainer}:hover & {
    opacity: 0.8;
  }
`;

const Body = styled.p`
  margin-top: 1rem;
  line-height: 1.5;
  font-weight: 300;
`;

const Summary = styled.div`
  display: flex;
`;

const CommentCard = (props) => {
  const {
    avatarUrl,
    body,
    commenter,
    createdAt,
    downvote,
    now,
    numDownvotes,
    numReplies,
    numUpvotes,
    reply,
    tags,
    upvote,
    userVote,
  } = props;

  const didVoteUp = userVote === UP;
  const didVoteDown = userVote === DOWN;

  return (
    <CardContainer>
      <Image
        src={avatarUrl}
        alt={`${commenter}'s avatar image.`}
      />
      <CommentContainer>
        <Summary>
          <Commenter>{commenter}</Commenter>
          {tags.map(tag => <Chip key={tag}>{tag}</Chip>)}
          <EllapsedTimeIndicator start={createdAt} end={now} />
        </Summary>
        <Body>
          {body}
        </Body>
        <ResponseArea>
          <Reply reply={reply} />
          <Replies numReplies={numReplies} />
          <Upvote didVote={didVoteUp} numVotes={numUpvotes} vote={upvote} />
          <Downvote didVote={didVoteDown} numVotes={numDownvotes} vote={downvote} />
        </ResponseArea>
      </CommentContainer>
    </CardContainer>
  );
};

export default CommentCard;