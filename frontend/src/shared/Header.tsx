import { Box, Text } from 'grommet';
import React from 'react';
import { RoutedButton } from '../components/RoutedButton';

const Header = () => (
  <Box background="white" align="center" width="100%">
    <Box width="1024px">
      <Box direction="row" align="center" pad="30px 24px 26px" height={'80px'}>
        <RoutedButton path="/">
          <Text size={'24px'} weight="bold" color="#363837">
            {'freelance platform'}
          </Text>
        </RoutedButton>

        <Text margin={{ left: 'small' }}>{'UML project'}</Text>
      </Box>
    </Box>
  </Box>
);

export { Header };
