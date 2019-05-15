import { distanceInWords } from 'date-fns';
import {
  Anchor,
  Box,
  Button,
  Grid,
  Grommet,
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
import nanoid from 'nanoid';
import React, { Component, useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { AdvertStatus } from '../components/AdvertStatus';
import { Counter } from '../components/Counter';
import { MiniUser } from '../components/MiniUser';
import { Advert, Response } from '../shared/data';
import {
  AdvertsContext,
  ResponsesContext,
  UsersContext,
  UserSessionContext,
} from '../shared/state';
import { blueButton } from '../shared/theme';

const HR = () => <Box width="100%" height="1px" background="#e6e6e6" />;

const ResponseCard: React.FC<Response> = ({ body, author, createdAt }) => {
  const { users } = useContext(UsersContext);
  const actualAuthor = users.find(user => user.id === author)!;

  return (
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
            {actualAuthor.name}
          </Text>
        </Anchor>

        <Text
          color="status-unknown"
          size="15px"
          margin={{
            left: 'small',
          }}
        >
          {distanceInWords(createdAt, new Date(), {
            includeSeconds: true,
          })}
        </Text>
        <Box margin={{ left: 'auto' }} />
        <Grommet theme={blueButton}>
          <Button label="Accept" margin={{ right: 'small' }} />
        </Grommet>
      </Box>

      <Text color="#030f09" margin={{ left: '5px', top: 'small' }}>
        {body}
      </Text>
    </Box>
  );
};

class LeaveResponse extends Component<
  { addResponse: (response: Response) => void; session },
  { open; body }
> {
  state = {
    open: false,
    body: '',
  };

  onClose = () => this.setState({ open: false });
  onChangeBody = e => this.setState({ body: e.target.value });

  render() {
    const { open, body } = this.state;
    const { addResponse, session } = this.props;

    return (
      <Box>
        <Box onClick={() => this.setState({ open: !open })}>
          <Grommet theme={blueButton}>
            <Button primary icon={<Add />} label="Leave response" />
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
                Leave response
              </Heading>
              <TextArea
                resize={false}
                placeholder="Some text..."
                onChange={this.onChangeBody}
              />
              <Box direction="row" gap="medium" margin={{ left: '10px' }}>
                <DocumentImage />
                <DocumentTxt />
                <DocumentWord />
                <DocumentPdf />
              </Box>
              <Grommet theme={blueButton}>
                <Button
                  icon={<Send />}
                  primary
                  label="Send"
                  fill={true}
                  onClick={() => {
                    addResponse({
                      body,
                      id: nanoid(),
                      author: session.user!.id,
                      createdAt: new Date(),
                    });
                  }}
                />
              </Grommet>
            </Box>
          </Layer>
        )}
      </Box>
    );
  }
}

const FullAdvert: React.FC<Advert> = ({
  id,
  name,
  description,
  responses,
  author,
  status,
  createdAt,
}) => {
  const { users } = useContext(UsersContext);
  const actualAuthor = users.find(user => user.id === author)!;

  const responsesContext = useContext(ResponsesContext);
  const { addResponse } = useContext(AdvertsContext);
  const session = useContext(UserSessionContext);

  const actualResponses = responsesContext.responses.filter(r =>
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
      <Box direction="row">
        <Heading
          color="#030f09"
          level="3"
          margin={{ bottom: 'xsmall', top: 'none' }}
        >
          {name}
        </Heading>
        <Box margin={{ left: 'auto' }}>
          <AdvertStatus status={status} />
        </Box>
      </Box>
      <Box>
        <Text color="status-unknown" size="15px">
          <MiniUser {...actualAuthor} />
          {/* Contractual price • cashless payment <br /> */}
          {distanceInWords(createdAt, new Date(), {
            includeSeconds: true,
          })}
        </Text>

        <Text
          color="#030f09"
          margin={{ top: 'small', bottom: 'small' }}
          size="medium"
        >
          {description}
        </Text>
      </Box>

      <HR />
      <Box
        pad={{ top: 'small', bottom: 'small' }}
        direction="row"
        align="center"
      >
        <Counter count={responses.length} label=" responses " />
        <Box
          margin={{
            left: 'auto',
          }}
        />
        <LeaveResponse
          addResponse={response => addResponse(id, response)}
          session={session}
        />
      </Box>
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

  const { adverts } = useContext(AdvertsContext);
  const advert = adverts.find(a => a.id === id);

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
      <Box gridArea="nav">{/* <Sidebar></Sidebar> */}</Box>
      <Box gridArea="main" round="8px">
        <FullAdvert {...advert} />
      </Box>
    </Grid>
  );
};

export { AdvertPage };
