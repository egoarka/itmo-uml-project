import { Box, Text } from 'grommet';
import React from 'react';

const Counter = ({ count, label }) => (
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
    <Text>{label}</Text>
  </Box>
);

export { Counter };
