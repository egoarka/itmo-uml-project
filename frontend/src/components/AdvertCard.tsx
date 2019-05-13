import { Box, Text } from 'grommet';
import React from 'react';
import { Advert } from '../shared/data';
import { RoutedButton } from './RoutedButton';
import { AdvertStatus } from './AdvertStatus';

const AdvertCard: React.FC<Advert> = ({ id, name, description, status }) => (
  <Box
    pad={'medium'}
    background="white"
    margin={{
      bottom: 'small',
    }}
    round="16px"
  >
    <Box direction="row" pad="small">
      <Box
        round="full"
        height="32px"
        width="32px"
        background="#e6e6e6"
        margin={{
          right: 'small',
        }}
      />
      <Text color="#030f09" size="16px">
        Your full name
      </Text>
    </Box>
    <Box direction="row">
      <RoutedButton path={`/advert/${id}`}>
        <Text color="#030f09" size="24px">
          {name}
        </Text>
      </RoutedButton>
      <AdvertStatus status={status} />
    </Box>
    <Text>{description}</Text>
  </Box>
);

export { AdvertCard };
