import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #22d3ee;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: #0f172a;
  border: 1px solid #22d3ee40;
  border-radius: 8px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
`;

const MetricLabel = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MetricValue = styled.div`
  color: #22d3ee;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <Title>RepliCons Dashboard</Title>
      <MetricsGrid>
        <MetricCard>
          <MetricLabel>Identity Stability</MetricLabel>
          <MetricValue>--</MetricValue>
        </MetricCard>
        <MetricCard>
          <MetricLabel>Memory Density</MetricLabel>
          <MetricValue>--</MetricValue>
        </MetricCard>
        <MetricCard>
          <MetricLabel>Emotional Diversity</MetricLabel>
          <MetricValue>--</MetricValue>
        </MetricCard>
        <MetricCard>
          <MetricLabel>Behavioral Consistency</MetricLabel>
          <MetricValue>--</MetricValue>
        </MetricCard>
        <MetricCard>
          <MetricLabel>Narrative Coherence</MetricLabel>
          <MetricValue>--</MetricValue>
        </MetricCard>
      </MetricsGrid>
    </DashboardContainer>
  );
}

export default Dashboard;
