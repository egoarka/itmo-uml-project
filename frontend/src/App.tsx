import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Calendar,
  Chart,
  CheckBox,
  Clock,
  DataTable,
  FormField,
  Grommet,
  Heading,
  Menu,
  Meter,
  Paragraph,
  RadioButtonGroup,
  RangeInput,
  RangeSelector,
  Select,
  Stack,
  Tab,
  Tabs,
  Text,
  TextArea,
  TextInput,
  Video,
  Grid
} from "grommet";
import { hp } from "grommet-theme-hp";
import { grommet } from "grommet/themes";
import { generate } from "grommet/themes/base";
import { deepMerge } from "grommet/utils";
import { base } from "grommet/themes";

import React, { Component } from "react";

const Node = ({ id, ...rest }) => (
  <Box
    id={id}
    basis="xxsmall"
    margin="small"
    pad="medium"
    round="small"
    background="light-4"
    {...rest}
  />
);

// eslint-disable-next-line
const connection = (fromTarget, toTarget, { color = "", ...rest } = {}) => ({
  fromTarget,
  toTarget,
  color: color || "accent-1",
  thickness: "xsmall",
  round: true,
  type: "rectilinear",
  ...rest
});

const themes = {
  hp
};

const HR = () => <Box width="100%" height="1px" background="#e6e6e6" />;

const User = () => (
  <Box width="304px" round="8px" background="white" pad="25px">
    <Box
      direction="row"
      flex={true}
      pad={{
        bottom: "20px"
      }}
      alignContent="center"
    >
      <Box round="full" height="70px" width="70px" background="#e6e6e6" />
      <Box pad={{ left: "15px" }}>
        <Text weight="bold" color="#030f09">
          Your full name
        </Text>
        <Text>customer</Text>
      </Box>
    </Box>
    <HR />
    <Box
      pad={{
        top: "15px"
      }}
      direction="row"
    >
      <Box>
        <Text weight="bold" color="#030f09">
          20
        </Text>
        <Text>ads</Text>
      </Box>
    </Box>
  </Box>
);

const Header = () => (
  <Box background="#f7f8fa">
    <Box
      direction="row"
      align="center"
      pad="30px 107px 26px"
      height={"80px"}
      background="white"
    >
      <Text color="#363837">{"UML"}</Text>

      {/* <Text color="brand">{active ? "-" : "+"}</Text> */}
    </Box>
  </Box>
);

const Advert = () => (
  <Box
    pad={"medium"}
    background="white"
    margin={{
      bottom: "small"
    }}
    round="16px"
  >
    <Box direction="row">
      <Box
        round="full"
        height="32px"
        width="32px"
        background="#e6e6e6"
        margin={{
          right: "small"
        }}
      />
      <Text color="#030f09" size="16px">
        Your full name
      </Text>
    </Box>
    <Anchor>
      <Text color="#030f09" size="24px">
        Make C# server
      </Text>
    </Anchor>
    <Text>
      I thought this salad was exceptionally delicious and healthy. I recommend
      pressing the entire tofu block for at least 20 minutes before to remove
      excess water in the ...
    </Text>
  </Box>
);

const App = () => {
  const theme = deepMerge(
    {
      global: {
        colors: {
          text: {
            light: "#606060"
          }
        }
      }
    },
    themes["hp"]
  );

  return (
    <Grommet theme={theme} style={{ flex: "0 0 auto", background: "#f7f8fa" }}>
      <Header />
      <Box pad="50px 80px">
        <Grid
          fill
          areas={[
            { name: "nav", start: [0, 0], end: [0, 0] },
            { name: "main", start: [1, 0], end: [1, 0] }
          ]}
          columns={["auto", "flex"]}
          rows={["flex"]}
          gap="medium"
        >
          <Box gridArea="nav">
            <User />
          </Box>
          <Box gridArea="main" round="8px">
            <Advert />
            <Advert />
            <Advert />
          </Box>
        </Grid>
      </Box>
    </Grommet>
  );
};

export default App;
