import { Box, Text } from 'grommet';
import React, { useContext } from 'react';
import { Advert } from '../shared/data';
import { UsersContext } from '../shared/state';
import { AdvertStatus } from './AdvertStatus';
import { Counter } from './Counter';
import { MiniUser } from './MiniUser';
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
  const { users } = useContext(UsersContext);
  const actualAuthor = users.find(user => user.id === author)!;

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
        <Counter count={responses.length} label=" responses " />
        <AdvertStatus status={status} />
      </Box>
      <MiniUser {...actualAuthor} />
      <Text>{description}</Text>
    </Box>
  );
};
