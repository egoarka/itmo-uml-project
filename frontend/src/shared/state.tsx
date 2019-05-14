import React, { createContext } from 'react';
import { defaultState, Response, User } from './data';

const ResponsesContext = createContext({
  addResponse: (response: Response) => {},
  responses: defaultState.responses,
});

const UserSessionContext = createContext<{
  logIn: (user: User) => void;
  user: User | null;
}>({
  logIn: (user: User) => {},
  user: null,
});

class AppState extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    responses: Response[];
    user: User | null;
  }
> {
  state = {
    responses: defaultState.responses,
    user: null,
  };

  addResponse = (response: Response) => {
    this.setState({
      responses: [...this.state.responses, response],
    });
  };

  logIn = (user: User) => {
    this.setState({
      user,
    });
  };

  render() {
    const { responses, user } = this.state;
    const { children } = this.props;

    return (
      <UserSessionContext.Provider
        value={{
          logIn: this.logIn,
          user,
        }}
      >
        <ResponsesContext.Provider
          value={{
            addResponse: this.addResponse,
            responses,
          }}
        >
          {children}
        </ResponsesContext.Provider>
      </UserSessionContext.Provider>
    );
  }
}

export { AppState, ResponsesContext, UserSessionContext };
