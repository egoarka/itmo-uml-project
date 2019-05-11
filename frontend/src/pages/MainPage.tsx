import {
  Box,
  Grid,
  Button,
  Layer,
  Heading,
  TextArea,
  TextInput,
  Select,
} from 'grommet';
import React, { Component } from 'react';
import { AdvertCard } from '../components/AdvertCard';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { UserInfo } from '../components/Sidebar/UserInfo';
import { defaultState } from '../shared/data';
import {
  Add,
  DocumentImage,
  DocumentWord,
  DocumentPdf,
  DocumentTxt,
  Send,
} from 'grommet-icons';

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
          <Button primary icon={<Add />} label="Leave advert" />
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

              <Button icon={<Send />} primary label="Send" />
            </Box>
          </Layer>
        )}
      </Box>
    );
  }
}

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
          <LeaveAdvert />
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
