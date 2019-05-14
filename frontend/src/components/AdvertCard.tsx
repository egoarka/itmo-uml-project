import { Box, Text } from 'grommet';
import React from 'react';
import { Advert, defaultState } from '../shared/data';
import { AdvertResponses } from './AdvertResponses';
import { AdvertStatus } from './AdvertStatus';
import { RoutedButton } from './RoutedButton';

export { AdvertStatus };
export { AdvertCard };

const AdvertCard: React.FC<Advert> = ({
  id,
  name,
  description,
  status,
  author,
  responses,
}) => {
  const actualAuthor = defaultState.users.find(u => u.id === author)!;

  return (
    <Box
      pad={'medium'}
      background="white"
      margin={{
        bottom: 'small',
      }}
      round="16px"
    >
      <Box direction="row">
        <RoutedButton path={`/advert/${id}`}>
          <Text color="#030f09" size="24px">
            {name}
          </Text>
        </RoutedButton>
        <Box
          margin={{
            left: 'auto',
          }}
        />
        <AdvertResponses count={responses.length} />
        <AdvertStatus status={status} />
      </Box>
      <Box
        direction="row"
        pad={{
          bottom: 'small',
        }}
        align="center"
      >
        <Box
          round="full"
          height="24px"
          width="24px"
          background="#e6e6e6"
          margin={{
            right: 'small',
          }}
        />
        <Text color="#030f09" size="16px">
          {actualAuthor.name}
        </Text>
      </Box>
      <Text>{description}</Text>
    </Box>
  );
};
