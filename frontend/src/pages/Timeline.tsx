import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #22d3ee;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

function Timeline() {
  return (
    <TimelineContainer>
      <Title>Life Timeline</Title>
      <p>Timeline visualization - To be implemented</p>
    </TimelineContainer>
  );
}

export default Timeline;
