import React from 'react';
import PropTypes from 'prop-types';
import Link, { withPrefix } from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Talk from './Talk';
import colors from '../../util/colors';
import mediaQueries from '../../util/mediaQueries';
import Person from '../Icons/Person';

const StyledTalkSpeakerImage = styled.img`
  height: 60px;
  border-radius: 50%;
`;

const personIconStyle = css`
  width: 60px;
  height: 60px;
`;

const talkSpeakerNameStyle = css`
  font-size: 0.8rem;
  display: block;
  font-weight: bold;
  color: black;

  &:hover,
  &:focus {
    color: black;
  }
`;

const StyledTalkSpeakerImageContainer = styled.span`
  display: inline-block;
`;

const TalkSpeaker = ({ speaker, numberOfSpeakers, talkId }) => {
  return (
    <div>
      <StyledTalkSpeakerImageContainer>
        {speaker.pic ? (
          <StyledTalkSpeakerImage
            src={withPrefix(`/static/pics/${speaker.pic}`)}
          />
        ) : (
          <Person css={personIconStyle} />
        )}
      </StyledTalkSpeakerImageContainer>
      <Link css={talkSpeakerNameStyle} to={`/speakers#${talkId}`}>
        {numberOfSpeakers > 1 ? `${speaker.name} med flere` : speaker.name}
      </Link>
    </div>
  );
};

TalkSpeaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  numberOfSpeakers: PropTypes.number.isRequired,
  talkId: PropTypes.string.isRequired,
};

export default TalkSpeaker;
