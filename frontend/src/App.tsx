import { Box, Grommet } from 'grommet';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AdvertPage } from './pages/AdvertPage';
import { MainPage } from './pages/MainPage';
import { Header } from './shared/Header';
import { AppState } from './shared/state';
import { theme } from './shared/theme';

const AppRouter = () => {
  return (
    <Router>
      <AppState>
        <Grommet
          theme={theme}
          style={{ flex: '0 0 auto', background: '#f7f8fa' }}
        >
          <Header />
          <Box align={'center'}>
            <Box width="1024px" margin="50px 80px">
              <div>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login" component={MainPage} />
                <Route exact path="/register" component={MainPage} />
                <Route path="/advert/:id" component={AdvertPage} />
              </div>
            </Box>
          </Box>
        </Grommet>
      </AppState>
    </Router>
  );
};

export default AppRouter;
