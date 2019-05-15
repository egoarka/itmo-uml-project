import { Box, Button, Grommet, Text } from 'grommet';
import { Login } from 'grommet-icons';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { User } from '../../shared/data';
import { UsersContext, UserSessionContext } from '../../shared/state';
import { blueButtonIcon } from '../../shared/theme';

const Div = styled(Box)`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const UserCard = ({
  user,
  logIn,
}: {
  user: User;
  logIn: (user: User) => void;
}) => (
  <Div direction="row" flex={true} align="center">
    <Box round="full" height="45px" width="45px" background="#e6e6e6" />
    <Box pad={{ left: '15px' }}>
      <Text weight="bold" color="#030f09">
        {user.name}
      </Text>
      <Text>{user.role}</Text>
    </Box>
    <Box margin={{ left: 'auto' }} fill={false}>
      <Grommet theme={blueButtonIcon}>
        <Button
          primary
          fill={true}
          label={
            <Text>
              <Box width="30px" height="30px" pad={'5px'}>
                <Login color="white" size={'20px'} />
              </Box>
            </Text>
          }
          onClick={() => logIn(user)}
        />
      </Grommet>
    </Box>
  </Div>
);

const UserList = () => {
  const session = useContext(UserSessionContext);
  const { users } = useContext(UsersContext);

  return (
    <Box>
      {users.map(user => (
        <UserCard key={user.id} user={user} logIn={session.logIn} />
      ))}
    </Box>
  );
};

export { UserList };
