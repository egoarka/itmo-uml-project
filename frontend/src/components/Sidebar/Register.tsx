import { Box, Button, Grommet, Select, TextInput } from 'grommet';
import nanoid from 'nanoid';
import React, { useContext, useState } from 'react';
import { TUserRole } from '../../shared/data';
import { UsersContext } from '../../shared/state';
import { blueButton } from '../../shared/theme';

const Register = ({}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState<TUserRole>('freelancer');
  const { register } = useContext(UsersContext);

  console.log({
    firstName,
    lastName,
  });
  return (
    <Box>
      <TextInput
        placeholder="First name"
        size="medium"
        onChange={e => setFirstName(e.target.value)}
      />
      <Box height={'15px'} />
      <TextInput
        placeholder="Last name"
        size="medium"
        onChange={e => setLastName(e.target.value)}
      />
      <Box height={'15px'} />
      <Select
        placeholder="Select your role"
        value={role}
        size="medium"
        options={['freelancer', 'customer']}
        onChange={({ option }) => setRole(option)}
      />
      <Box height={'15px'} />
      <Grommet theme={blueButton}>
        <Button
          primary
          label="Register"
          onClick={() => {
            register({
              id: nanoid(),
              name: firstName + ' ' + lastName,
              role,
            });
          }}
        />
      </Grommet>
    </Box>
  );
};

export { Register };
