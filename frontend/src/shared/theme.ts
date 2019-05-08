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
export { theme };
