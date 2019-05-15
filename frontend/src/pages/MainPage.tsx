import {
  Box,
  Button,
  Grid,
  Grommet,
  Heading,
  Layer,
  Select,
  TextArea,
  TextInput,
} from 'grommet';
import {
  Add,
  DocumentImage,
  DocumentPdf,
  DocumentTxt,
  DocumentWord,
  Send,
} from 'grommet-icons';
import React, { Component, useContext, useState } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { AdvertCard } from '../components/AdvertCard';
import { RoutedButton } from '../components/RoutedButton';
import { Register } from '../components/Sidebar/Register';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { UserInfo } from '../components/Sidebar/UserInfo';
import { UserList } from '../components/Sidebar/UserList';
import { AdvertsContext, UserSessionContext } from '../shared/state';
import { blueButton } from '../shared/theme';

class SelectJobType extends Component {
  state = {
    options: ['Hourly', 'Fixed price'],
    value: '',
  };

  render() {
    const { options, value } = this.state;
    return (
      <Select
        placeholder="Select job type"
        value={value}
        options={options}
        onChange={({ option }) => this.setState({ value: option })}
      />
    );
  }
}

const LeaveAdvert = ({ logOut }) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <Box>
      <Box>
        <Grommet theme={blueButton}>
          <Box height={'15px'} />
          <Button
            primary
            icon={<Add />}
            label="Add advert"
            fill={true}
            onClick={() => setOpen(!open)}
          />
          <Box height={'15px'} />
          <Button primary label="Logout" fill={true} onClick={logOut} />
        </Grommet>
      </Box>
      {open && (
        <Layer modal position="center" onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="large">
            <Heading level={4} margin="none" alignSelf="center">
              Add advert
            </Heading>
            <TextInput placeholder="Title" />

            <SelectJobType />

            <Box height="medium">
              <TextArea
                resize={false}
                placeholder="Technical specification"
                fill
              />
            </Box>
            <Box direction="row" gap="medium" margin={{ left: '10px' }}>
              <DocumentImage />
              <DocumentTxt />
              <DocumentWord />
              <DocumentPdf />
            </Box>
            <Grommet theme={blueButton}>
              <Button icon={<Send />} primary label="Send" fill={true} />
            </Grommet>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

const AuthMethod = () => (
  <Grommet theme={blueButton}>
    <Box direction="row" align="center" justify="around">
      <RoutedButton path="/login">
        <Button label="LogIn" />
      </RoutedButton>
      <RoutedButton path="/register">
        <Button label="Register" />
      </RoutedButton>
    </Box>
  </Grommet>
);

const MainPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { adverts } = useContext(AdvertsContext);

  const session = useContext(UserSessionContext);
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
          {match.path === '/' && !session.user && <AuthMethod />}
          <Route
            exact
            path={`/login`}
            render={() => {
              return !session.user && <UserList />;
            }}
          />
          <Route
            exact
            path={`/register`}
            render={() => {
              return !session.user && <Register />;
            }}
          />

          {session.user && <UserInfo {...session.user!} />}
          {session.user && <LeaveAdvert logOut={session.logOut} />}
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
