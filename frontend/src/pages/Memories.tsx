import React from 'react';
import styled from 'styled-components';

const MemoriesContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #22d3ee;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

function Memories() {
  return (
    <MemoriesContainer>
      <Title>Memories</Title>
      <p>Memories management - To be implemented</p>
    </MemoriesContainer>
  );
}

export default Memories;
