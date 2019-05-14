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
import React, { Component, useContext } from 'react';
import { AdvertCard } from '../components/AdvertCard';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { UserInfo } from '../components/Sidebar/UserInfo';
import { UserList } from '../components/Sidebar/UserList';
import { defaultState } from '../shared/data';
import { UserSessionContext } from '../shared/state';
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

class LeaveAdvert extends Component {
  state = {
    open: false,
  };

  onClose = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <Box>
        <Box
          width="235px"
          margin="10px 0px 20px 0px"
          onClick={() => this.setState({ open: !open })}
        >
          <Grommet theme={blueButton}>
            <Button primary icon={<Add />} label="Leave advert" />
          </Grommet>
        </Box>
        {open && (
          <Layer
            modal
            position="center"
            onClickOutside={this.onClose}
            onEsc={this.onClose}
          >
            <Box pad="medium" gap="small" width="large">
              <Heading level={4} margin="none" alignSelf="center">
                Leave advert
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
  }
}

const MainPage = () => {
  const adverts = defaultState.adverts;

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
          {!session.user && <UserList />}
          {session.user && <UserInfo {...session.user!} />}
          {session.user && <LeaveAdvert />}
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
