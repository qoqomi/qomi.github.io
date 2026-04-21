import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

import { ArchiveItem as ArchiveItemType } from '@/typings/typings';
import QueueBadge from './QueueBadge';

const ItemWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1.2rem;
  border: 0.1rem solid ${props => props.theme.colors.darkgray_100};
  background-color: ${props => props.theme.colors.surface};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${props => props.theme.colors.primary_1000};
    box-shadow: 0 4px 12px ${props => props.theme.colors.black_200};
  }
`;

const ItemTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ItemType = styled.span`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.darkgray_800};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ItemTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 140%;
  word-break: keep-all;
  color: ${props => props.theme.colors.text_1000};
`;

const ItemSummary = styled.p`
  font-size: 1.4rem;
  line-height: 160%;
  color: ${props => props.theme.colors.darkgray_800};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Tag = styled.span`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary_1000};
`;

const ItemDate = styled.span`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.darkgray_800};
`;

function ArchiveItem({ item }: { item: ArchiveItemType }) {
  return (
    <ItemWrap href={`/archive/${item.id}`}>
      <ItemTop>
        <QueueBadge queue={item.queue} />
        <ItemType>{item.type}</ItemType>
      </ItemTop>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemSummary>{item.summary}</ItemSummary>
      <TagList>
        {item.tags.map(tag => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </TagList>
      <ItemDate>
        {new Date(item.created_at).toLocaleDateString('ko-KR')}
      </ItemDate>
    </ItemWrap>
  );
}

export default ArchiveItem;
