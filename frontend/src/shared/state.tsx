import React, { createContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Advert, defaultState, Response, User } from './data';

const AdvertsContext = createContext({
  addResponse: (advertId: string, response: Response) => {},
  addAdvert: (advert: Advert) => {},
  adverts: defaultState.adverts,
});

const ResponsesContext = createContext({
  responses: defaultState.responses,
});

const UsersContext = createContext({
  users: defaultState.users,
  register: (user: User) => {},
});

const UserSessionContext = createContext<{
  logIn: (user: User) => void;
  logOut: () => void;
  user: User | null;
}>({
  logIn: (user: User) => {},
  logOut: () => {},
  user: null,
});

class AppState$ extends React.Component<
  {
    children: React.ReactNode;
  } & RouteComponentProps<any>,
  {
    responses: Response[];
    adverts: Advert[];
    user: User | null;
    users: User[];
  }
> {
  state = {
    responses: defaultState.responses,
    adverts: defaultState.adverts,
    users: defaultState.users,
    user: null,
  };

  addResponse = (advertId: string, response: Response) => {
    const advert = this.state.adverts.find(a => a.id === advertId)!;
    const newAdvert = {
      ...advert,
      responses: [response.id, ...advert.responses],
    } as Advert;
    const newAdverts = this.state.adverts.map(advert =>
      advert.id === advertId ? newAdvert : advert,
    );

    this.setState({
      responses: [response, ...this.state.responses],
      adverts: newAdverts,
    });
  };

  logIn = (user: User) => {
    this.setState({
      user,
    });
    this.props.history.push('/');
  };

  logOut = () => {
    this.setState({
      user: null,
    });
    this.props.history.push('/');
  };

  register = (user: User) => {
    this.setState(() => ({
      users: [...this.state.users, user],
    }));
    this.props.history.push('/login');
  };
  addAdvert = (advert: Advert) => {
    /// todo
  };

  render() {
    const { responses, user, users, adverts } = this.state;
    const { children } = this.props;
    return (
      <UsersContext.Provider
        value={{
          register: this.register,
          users,
        }}
      >
        <UserSessionContext.Provider
          value={{
            logIn: this.logIn,
            logOut: this.logOut,
            user,
          }}
        >
          <AdvertsContext.Provider
            value={{
              addAdvert: this.addAdvert,
              addResponse: this.addResponse,
              adverts,
            }}
          >
            <ResponsesContext.Provider
              value={{
                responses,
              }}
            >
              {children}
            </ResponsesContext.Provider>
          </AdvertsContext.Provider>
        </UserSessionContext.Provider>
      </UsersContext.Provider>
    );
  }
}

const AppState = withRouter<any>(AppState$);

export {
  AppState,
  ResponsesContext,
  UserSessionContext,
  AdvertsContext,
  UsersContext,
};
