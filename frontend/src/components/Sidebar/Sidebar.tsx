import { Box } from 'grommet';
import React from 'react';

const Sidebar = ({ children }) => (
  <Box width="304px" round="8px" background="white" pad="25px">
    {children}
  </Box>
);

export { Sidebar };
