import { hp } from 'grommet-theme-hp';
import { deepMerge } from 'grommet/utils';
const theme = deepMerge(hp, {
  global: {
    colors: {
      text: {
        light: '#606060',
      },
    },
  },
});

const blueButton = {
  global: {
    focus: {
      border: {
        color: 'rgb(25, 124, 247)',
      },
    },
  },
  button: {
    border: {
      radius: '6px',
      color: 'rgb(25, 124, 247)',
    },

    primary: {
      color: 'rgb(25, 124, 247)',
    },
  },
};

const blueButtonIcon = {
  global: {
    focus: {
      border: {
        color: 'rgb(25, 124, 247)',
      },
    },
  },
  button: {
    border: {
      radius: '6px',
      color: 'rgb(25, 124, 247)',
    },
    padding: {
      horizontal: '0px',
      vertical: '0px',
    },
    primary: {
      color: 'rgb(25, 124, 247)',
    },
  },
};

export { theme, blueButton, blueButtonIcon };
