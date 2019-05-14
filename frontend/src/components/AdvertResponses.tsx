import { Box, Text } from 'grommet';
import React from 'react';

const AdvertResponses = ({ count }) => (
  <Box direction="row" align="center">
    <Box
      round="small"
      pad={{ left: 'small', right: 'small' }}
      background={{ color: 'light-2', opacity: 'strong' }}
      margin={{ right: 'small' }}
      alignSelf="center"
    >
      <Text size="16px">
        <Text weight="bold">{count}</Text>
      </Text>
    </Box>
    <Text> responses </Text>
  </Box>
);

export { AdvertResponses };
