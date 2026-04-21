import styled from '@emotion/styled';
import React from 'react';

import { QueueType } from '@/typings/typings';

const QUEUE_COLOR: Record<QueueType, string> = {
  Later: '#94a3b8',
  Shortlist: '#f59e0b',
  Archive: '#6b7280',
};

const Badge = styled.span<{ queue: QueueType }>`
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${({ queue }) => QUEUE_COLOR[queue]}22;
  color: ${({ queue }) => QUEUE_COLOR[queue]};
  border: 0.1rem solid ${({ queue }) => QUEUE_COLOR[queue]}55;
`;

function QueueBadge({ queue }: { queue: QueueType }) {
  return <Badge queue={queue}>{queue}</Badge>;
}

export default QueueBadge;
