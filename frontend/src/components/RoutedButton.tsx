import { Anchor } from 'grommet';
import React from 'react';
import { matchPath, withRouter } from 'react-router';

class RButton extends React.Component<any, any> {
  onClick = event => {
    const { history, path } = this.props;
    event.preventDefault();
    history.push(path);
  };

  render() {
    const {
      active,
      exact,
      match,
      location,
      history,
      path,
      strict,
      ...rest
    } = this.props;
    const pathMatch = matchPath(location.pathname, { exact, path, strict });
    return <Anchor {...rest} onClick={this.onClick} />;
  }
}

const RoutedButton = withRouter(RButton);
export { RoutedButton };
