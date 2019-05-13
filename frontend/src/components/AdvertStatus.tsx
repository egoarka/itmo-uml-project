import React from 'react';
import { Box, Text } from 'grommet';

const AdvertStatus: React.FC<any> = ({ status }) => (
  <Box
    round="small"
    pad={{ left: 'small', right: 'small' }}
    background={{ color: 'light-2', opacity: 'strong' }}
    margin={{ left: 'auto', right: 'small' }}
    alignSelf="center"
  >
    <Text size="16px">{status}</Text>
  </Box>
);

export { AdvertStatus };
