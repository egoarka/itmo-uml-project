import { Box, Text } from 'grommet';
import React from 'react';
import { User } from '../../shared/data';
import { HR } from '../HR';

const UserInfo = (user: User) => (
  <Box>
    <Box
      direction="row"
      flex={true}
      pad={{
        bottom: '20px',
      }}
      alignContent="center"
    >
      <Box round="full" height="45px" width="45px" background="#e6e6e6" />
      <Box pad={{ left: '15px' }}>
        <Text weight="bold" color="#030f09">
          {user.name}
        </Text>
        <Text>{user.role}</Text>
      </Box>
    </Box>
    <HR />
    <Box
      pad={{
        top: '15px',
      }}
      direction="row"
    >
      <Box>
        <Text weight="bold" color="#030f09">
          20
        </Text>
        <Text>ads</Text>
      </Box>
    </Box>
  </Box>
);

export { UserInfo };
