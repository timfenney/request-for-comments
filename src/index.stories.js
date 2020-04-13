import React from 'react';
import CommentCard from './CommentCard';
import {
  array,
  date,
  number,
  radios,
  text,
  withKnobs,
} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import moment from 'moment';

export default {
  title: "CommentCard",
  decorators: [withKnobs]
};

export const withDynamicVariables = () => {
  const commenter = text('Commenter', 'Brad');
  const tags = array('Tags', ['author']);
  const numReplies = number('Number of Replies', 21);
  const numUpvotes = number('Number of Upvotes', 144);
  const numDownvotes = number('Number of Downvotes', 4);
  const createdAtDefault = new Date();
  const createdAt = date('Created At', createdAtDefault);
  const currentTimeDefault = new Date();
  const currentTime = date('Current Time', currentTimeDefault);
  const reply = action('reply');
  const upvote = action('upvote');
  const downvote = action('downvote');
  const voteOptions = {
    Upvote: 'UP',
    Downvote: 'DOWN',
    None: null,
  };
  const userVote = radios('User Vote', voteOptions, null);
  const body = text('Body', 'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.');
  const avatarUrl = text('Avatar', 'http://www.fillmurray.com/129/129');

  return (
    <CommentCard
      avatarUrl={avatarUrl}
      body={body}
      commenter={commenter}
      createdAt={createdAt}
      downvote={downvote}
      now={currentTime}
      tags={tags}
      reply={reply}
      numReplies={numReplies}
      numUpvotes={numUpvotes}
      numDownvotes={numDownvotes}
      upvote={upvote}
      userVote={userVote}
    />
  );
};

export const anOrdinaryComment = () => {
  const commenter = 'Brad';
  const tags = ['moderator'];
  const numReplies = 21;
  const numUpvotes = 144;
  const numDownvotes = 4;
  const createdAt = new Date();
  const currentTime = new Date();
  const reply = action('reply');
  const upvote = action('upvote');
  const downvote = action('downvote');
  const userVote = 'UP';
  const body = 'Hmmf. Figures.';
  const avatarUrl = 'http://www.fillmurray.com/128/128';

  return (
    <CommentCard
      avatarUrl={avatarUrl}
      body={body}
      commenter={commenter}
      createdAt={createdAt}
      downvote={downvote}
      now={currentTime}
      tags={tags}
      reply={reply}
      numReplies={numReplies}
      numUpvotes={numUpvotes}
      numDownvotes={numDownvotes}
      upvote={upvote}
      userVote={userVote}
    />
  );
};

export const aCommentWithMultipleTags = () => {
  const commenter = 'Brad';
  const tags = ['moar', 'tags'];
  const numReplies = 21;
  const numUpvotes = 144;
  const numDownvotes = 4;
  const createdAt = new Date();
  const currentTime = new Date();
  const reply = action('reply');
  const upvote = action('upvote');
  const downvote = action('downvote');
  const userVote = 'UP';
  const body = 'Hmmf. Figures.';
  const avatarUrl = 'http://www.fillmurray.com/128/128';

  return (
    <CommentCard
      avatarUrl={avatarUrl}
      body={body}
      commenter={commenter}
      createdAt={createdAt}
      downvote={downvote}
      now={currentTime}
      tags={tags}
      reply={reply}
      numReplies={numReplies}
      numUpvotes={numUpvotes}
      numDownvotes={numDownvotes}
      upvote={upvote}
      userVote={userVote}
    />
  );
};

export const threeComments = () => {
  const now = new Date();
  const comments = [
    {
      key: 1,
      avatarUrl: 'http://placekitten.com/128/128',
      commenter: 'Mel',
      tags: ['moderator'],
      numReplies: 3,
      numUpvotes: 7,
      numDownvotes: 0,
      createdAt: moment(now).subtract(10, 'seconds').toDate(),
      now,
      reply: action('reply-1'),
      upvote: action('upvote-1'),
      downvote: action('downvote-1'),
      userVote: 'UP',
      body: 'Hmmf. Figures.',
    },
    {
      key: 2,
      avatarUrl: 'http://placekitten.com/129/129',
      commenter: 'Brad',
      tags: ['author'],
      numReplies: 21,
      numUpvotes: 144,
      numDownvotes: 4,
      createdAt: moment(now).subtract(2, 'months').toDate(),
      now,
      reply: action('reply-2'),
      upvote: action('upvote-2'),
      downvote: action('downvote-2'),
      userVote: null,
      body: '🤣',
    },
    {
      key: 3,
      avatarUrl: 'http://placekitten.com/130/130',
      commenter: 'Brad',
      tags: [],
      numReplies: 21,
      numUpvotes: 144,
      numDownvotes: 4,
      createdAt: moment(now).subtract(3, 'weeks').toDate(),
      now,
      reply: action('reply-3'),
      upvote: action('upvote-3'),
      downvote: action('downvote-3'),
      userVote: 'DOWN',
      body: 'Totally awesome article!',
    },
  ];

  return comments.map(
    comment => {
      return (
        <CommentCard
          {...comment}
        />
      );
    }
  );
};