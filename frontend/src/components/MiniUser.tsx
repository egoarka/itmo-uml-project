import { Box, Text } from 'grommet';
import React from 'react';
import { User } from '../shared/data';

const MiniUser: React.FC<User> = ({ name }) => (
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
      {name}
    </Text>
  </Box>
);
export { MiniUser };
