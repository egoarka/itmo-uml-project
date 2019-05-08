import {
  Anchor,
  Box,
  Button,
  Grid,
  Heading,
  Layer,
  Text,
  TextArea,
} from 'grommet';
import {
  Add,
  DocumentImage,
  DocumentPdf,
  DocumentTxt,
  DocumentWord,
  Send,
} from 'grommet-icons';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { UserInfo } from '../components/Sidebar/UserInfo';
import { Advert, defaultState, Response } from '../shared/data';

const HR = () => <Box width="100%" height="1px" background="#e6e6e6" />;

const ResponseCard: React.FC<Response> = ({ body }) => (
  <Box pad={{ top: 'small', bottom: 'small' }}>
    <Box direction="row" align="center">
      <Box round="full" height="35px" width="35px" background="#e6e6e6" />
      <Anchor>
        <Text
          weight="bold"
          color="#030f09"
          alignSelf="center"
          margin={{ left: 'xsmall' }}
        >
          User name
        </Text>
      </Anchor>

      <Text
        color="status-unknown"
        size="15px"
        margin={{
          left: 'small',
        }}
      >
        06 мая 2019, 21:47
      </Text>
    </Box>

    <Text color="#030f09" margin={{ left: '5px', top: 'small' }}>
      {body}
    </Text>
  </Box>
);

class LeaveResponse extends Component {
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
          <Button primary icon={<Add />} label="Leave response" />
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
                Leave response
              </Heading>
              <TextArea resize={false} placeholder="Some text..." />
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

const FullAdvert: React.FC<Advert> = ({
  name,
  description,
  responses,
  author,
}) => {
  // const actualAuthor = defaultState.users.find(u => u.id === author)
  const actualResponses = defaultState.responses.filter(r =>
    responses.includes(r.id),
  );

  // TODO: handle actual data

  return (
    <Box
      pad={'medium'}
      background="white"
      margin={{
        bottom: 'small',
      }}
      round="16px"
    >
      <Heading
        color="#030f09"
        level="3"
        margin={{ bottom: 'xsmall', top: 'none' }}
      >
        {name}
      </Heading>
      <Box>
        <Text color="status-unknown" size="15px">
          Contractual price • cashless payment <br />
          05/10/2019 21:47 • 3 responses
        </Text>

        <Text
          color="#030f09"
          margin={{ top: 'small', bottom: 'small' }}
          size="medium"
        >
          {description}
        </Text>
      </Box>

      <LeaveResponse />

      <HR />
      {actualResponses.map(response => (
        <ResponseCard {...response} key={response.id} />
      ))}
    </Box>
  );
};
const AdvertPage: React.FC<RouteComponentProps<{ id }>> = ({ match }) => {
  const {
    params: { id },
  } = match;

  const advert = defaultState.adverts.find(a => a.id === id);

  if (!advert) {
    return (
      <Box fill align="center" justify="center">
        <Heading>No advert found with id {id}.</Heading>
      </Box>
    );
  }
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
        <FullAdvert {...advert} />
      </Box>
    </Grid>
  );
};

export { AdvertPage };
