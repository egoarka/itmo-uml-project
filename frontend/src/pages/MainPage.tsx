import {
  Box,
  Button,
  Grid,
  Grommet,
  Heading,
  Layer,
  Select,
  Text,
  TextArea,
  TextInput,
} from 'grommet';
import {
  Add,
  DocumentImage,
  DocumentPdf,
  DocumentTxt,
  DocumentWord,
  FormSearch,
  Send,
} from 'grommet-icons';
import nanoid from 'nanoid';
import React, { Component, useContext, useState } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { AdvertCard } from '../components/AdvertCard';
import { Counter } from '../components/Counter';
import { RoutedButton } from '../components/RoutedButton';
import { Register } from '../components/Sidebar/Register';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { UserInfo } from '../components/Sidebar/UserInfo';
import { UserList } from '../components/Sidebar/UserList';
import { User } from '../shared/data';
import {
  AdvertsContext,
  UsersContext,
  UserSessionContext,
} from '../shared/state';
import { blueButton, blueButtonIcon } from '../shared/theme';

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

const AddAdvert = ({}) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const { addAdvert } = useContext(AdvertsContext);
  const { user } = useContext(UserSessionContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Box
      margin={{
        top: '15px',
      }}
    >
      <Box>
        <Grommet theme={blueButton}>
          <Button
            primary
            icon={<Add />}
            label="Add advert"
            fill={true}
            onClick={() => setOpen(!open)}
          />
        </Grommet>
      </Box>
      {open && (
        <Layer modal position="center" onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="large">
            <Heading level={4} margin="none" alignSelf="center">
              Add advert
            </Heading>
            <TextInput
              placeholder="Title"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <SelectJobType />

            <Box height="medium">
              <TextArea
                resize={false}
                placeholder="Technical specification"
                fill
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Box>
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
                onClick={() =>
                  addAdvert({
                    createdAt: new Date(),
                    author: user!.id,
                    description,
                    name,

                    id: nanoid(),
                    responses: [],
                    status: 'hunt freelancer',
                  })
                }
              />
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
  const { users } = useContext(UsersContext);

  const customers = users.filter(u => u.role === 'customer');
  const session = useContext(UserSessionContext);

  const [customer, setCustomer] = useState<User | undefined>();
  const [occurence, setOccurence] = useState('');

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
          {session.user && (
            <Box>
              {<UserInfo {...session.user!} />}
              {session.user.role === 'customer' && <AddAdvert />}
              <Box height={'15px'} />
              <Grommet theme={blueButton}>
                <Button
                  primary
                  label="Logout"
                  fill={true}
                  onClick={session.logOut}
                />
              </Grommet>
            </Box>
          )}
        </Sidebar>
      </Box>
      <Box gridArea="main" round="8px">
        <Box direction="row" align="center">
          <Counter count={adverts.length} label="adverts" />

          <Box
            background="white"
            margin={{
              left: 'auto',
            }}
          >
            <TextInput
              placeholder="occurrence in title"
              size="small"
              value={occurence}
              onChange={e => setOccurence(e.target.value)}
            />
          </Box>
          <Box
            background="white"
            margin={{
              left: '20px',
            }}
          >
            <Select
              placeholder="Select customer"
              size="small"
              value={customer ? customer.name : undefined}
              valueKey={(customer: User) => customer.name}
              onChange={s => setCustomer(s.value)}
              options={customers}
            >
              {(customer: User) => <Box pad={'10px'}>{customer.name}</Box>}
            </Select>
          </Box>

          <Box
            margin={{
              left: '20px',
            }}
          >
            <Grommet theme={blueButtonIcon}>
              <Button
                primary
                fill={true}
                label={
                  <Text>
                    <Box width="40px" height="40px" pad={'5px'}>
                      <FormSearch color="white" size={'30px'} />
                    </Box>
                  </Text>
                }
              />
            </Grommet>
          </Box>
        </Box>
        <Box height="15px" />
        {adverts.map(advert => (
          <AdvertCard {...advert} key={advert.id} />
        ))}
      </Box>
    </Grid>
  );
};

export { MainPage };
