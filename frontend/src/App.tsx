import { Box, Grommet } from 'grommet';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AdvertPage } from './pages/AdvertPage';
import { MainPage } from './pages/MainPage';
import { Header } from './shared/Header';
import { theme } from './shared/theme';

const AppRouter = () => {
  return (
    <Router>
      <Grommet
        theme={theme}
        style={{ flex: '0 0 auto', background: '#f7f8fa' }}
      >
        <Header />
        <Box align={'center'}>
          <Box width="1024px" margin="50px 80px">
            <div>
              <Route path="/" exact component={MainPage} />
              <Route path="/advert/:id" component={AdvertPage} />
            </div>
          </Box>
        </Box>
      </Grommet>
    </Router>
  );
};

export default AppRouter;
