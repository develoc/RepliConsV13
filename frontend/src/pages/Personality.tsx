import React from 'react';
import styled from 'styled-components';

const PersonalityContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #22d3ee;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

function Personality() {
  return (
    <PersonalityContainer>
      <Title>Personality Analysis</Title>
      <p>Personality analysis - To be implemented</p>
    </PersonalityContainer>
  );
}

export default Personality;
