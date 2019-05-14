import { Box, Text } from 'grommet';
import React from 'react';
import { TAdvertStatus } from '../shared/data';

const AdvertStatus: React.FC<{ status: TAdvertStatus }> = ({ status }) => (
  <Box
    round="small"
    pad={{ left: 'small', right: 'small' }}
    background={'rgba(54, 144, 255, 0.8)'}
    margin={{ left: 'small', right: 'small' }}
    alignSelf="center"
  >
    <Text size="16px" color={'white'}>
      {status}
    </Text>
  </Box>
);

export { AdvertStatus };
