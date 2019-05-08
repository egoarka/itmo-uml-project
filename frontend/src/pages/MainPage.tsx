import { Box, Grid } from 'grommet';
import React from 'react';
import { AdvertCard } from '../components/AdvertCard';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { UserInfo } from '../components/Sidebar/UserInfo';
import { defaultState } from '../shared/data';

const MainPage = () => {
  const adverts = defaultState.adverts;
  return (
    <Grid
      fill
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      columns={['auto', 'flex']}
      rows={['flex']}
      gap="medium"
    >
      <Box gridArea="nav">
        <Sidebar>
          <UserInfo />
        </Sidebar>
      </Box>
      <Box gridArea="main" round="8px">
        {adverts.map(advert => (
          <AdvertCard {...advert} key={advert.id} />
        ))}
      </Box>
    </Grid>
  );
};

export { MainPage };
