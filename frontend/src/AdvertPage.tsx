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
  Grid,
  Collapsible,
  Layer
} from "grommet";
import {
  Add,
  Send,
  DocumentImage,
  Image,
  DocumentWord,
  DocumentPdf,
  DocumentTxt
} from "grommet-icons";
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

const Customer = () => (
  <Box width="354px" round="8px" background="white" pad="25px">
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
          Customer name
        </Text>
        <Text>some info</Text>
      </Box>
    </Box>
    <HR />
    <Box
      pad={{
        top: "15px"
      }}
      direction="row"
    >
      <Box height="large">
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

const Responce = () => (
  <Box pad={{ top: "small", bottom: "small" }}>
    <Anchor>
      <Box direction="row">
        <Box round="full" height="35px" width="35px" background="#e6e6e6" />
        <Text
          weight="bold"
          color="#030f09"
          alignSelf="center"
          margin={{ left: "xsmall" }}
        >
          User name
        </Text>
      </Box>
    </Anchor>

    <Text color="#030f09" margin={{ left: "small", top: "small" }}>
      I ready to get this task
      <br /> I ready to get this task
      <br />I ready to get this task
    </Text>
    <Text color="status-unknown" size="15px">
      06 мая 2019, 21:47
    </Text>
  </Box>
);

class LeaveResponce extends Component {
  state = {
    open: false
  };

  onClose = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <Box>
        <Box
          width="235px"
          margin="xsmall"
          onClick={() => this.setState({ open: !open })}
        >
          <Button
            primary
            icon={<Add />}
            label="Leave responce"
            color="neutral-1"
          />
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
                Leave responce
              </Heading>
              <TextArea resize={false} placeholder="Some text..." />
              <Box direction="row" gap="medium" margin={{ left: "10px" }}>
                <DocumentImage />
                <DocumentTxt />
                <DocumentWord />
                <DocumentPdf />
              </Box>

              <Button icon={<Send />} primary label="Send" color="neutral-1" />
            </Box>
          </Layer>
        )}
      </Box>
    );
  }
}

const AdvertFullDescription = () => (
  <Box
    pad={"medium"}
    background="white"
    margin={{
      bottom: "small"
    }}
    round="16px"
  >
    <Heading
      color="#030f09"
      level="3"
      margin={{ bottom: "xsmall", top: "none" }}
    >
      Simple Fitness App For Beginner
    </Heading>
    <Box margin={{ left: "small" }}>
      <Text color="status-unknown" size="15px">
        Contractual price • cashless payment <br />
        05/10/2019 21:47 • 3 responce • 16 viewes
      </Text>

      <Text
        color="#030f09"
        margin={{ top: "small", bottom: "small" }}
        size="medium"
      >
        Hello I am looking to make an fitness app for my self. This are items I
        am looking to add on my app ( my app image is attached ): - My activity
        Button - walking steps + running steps tracker - number of calories
        burned tracker - miles ran/walked tracker - Find Gym Button - Fitness
        Center Nearest to Me (Google map ) - Data Button - Shows all the Data
        from My activity by date (Ex:455 Step|| Calories Burned: 300||
        05/10/2019) - Events Button - Is it possible to add google calendar ? -
        Diet Button (Optional) - Add 3-4 pdf files of food and nutrients list -
        SMS Button (Optional) - Send SMS via Bluetooth to nearest friend I am
        not looking for an official app, I am only requesting source code for my
        personal use. I'm new to java/android programming therefore I would be
        grateful if the code implementation aren't too complex. I will not
        publish this app, it is only for study purposes, it is only for personal
        use. I would much appreciated if you can give me an eta / pricing for
        the requirements for the source code. Thank you.
      </Text>
    </Box>

    <LeaveResponce />

    <HR />

    <Responce />
    <Responce />
    <Responce />
  </Box>
);

const AdvertPage = () => {
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
            <Customer />
          </Box>
          <Box gridArea="main" round="8px">
            <AdvertFullDescription />
          </Box>
        </Grid>
      </Box>
    </Grommet>
  );
};

export default AdvertPage;
