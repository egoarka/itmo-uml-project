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

// class App extends Component {
//   state = {
//     baseSize: 24,
//     checkBox: true,
//     radioButton: 'RadioButton 1',
//     rangeSelector: [1, 2],
//     themeName: 'grommet',
//     background: '',
//     tabIndex: 0,
//   };

//   render() {
//     const {
//       background,
//       baseSize,
//       checkBox,
//       radioButton,
//       rangeSelector,
//       tabIndex,
//       themeName,
//     } = this.state;
//     const theme = deepMerge(generate(baseSize), themes[themeName]);

//     const content = [
//       <Box key="type" align="start">
//         <Heading margin={{ top: 'none' }}>Heading</Heading>
//         <Paragraph>Paragraph</Paragraph>
//         <Box margin="small" width="large">
//           <Text>
//            will
//           weell

//           </Text>
//         </Box>
//         <Anchor href="">Anchor</Anchor>
//         <Menu
//           label="Menu"
//           items={[{ label: 'One', onClick: () => {} }, { label: 'Two' }]}
//         />
//         <Button label="Button" onClick={() => {}} />
//       </Box>,
//       <Box key="input" gap="small">
//         <Select
//           placeholder="Select"
//           options={['One', 'Two']}
//           onChange={() => {}}
//         />
//         <CheckBox
//           name="check"
//           checked={checkBox}
//           label="CheckBox"
//           onChange={event => this.setState({ checkBox: event.target.checked })}
//         />
//         <CheckBox
//           name="toggle"
//           toggle
//           checked={checkBox}
//           label="CheckBox toggle"
//           onChange={event => this.setState({ checkBox: event.target.checked })}
//         />
//         <RadioButtonGroup
//           name="radio"
//           options={['RadioButton 1', 'RadioButton 2']}
//           value={radioButton}
//           onChange={event => this.setState({ radioButton: event.target.value })}
//         />
//         <TextInput placeholder="TextInput" />
//         <TextArea placeholder="TextArea" />
//         <RangeInput value={24} onChange={() => {}} />
//         <Stack>
//           <Box direction="row" justify="between">
//             {[0, 1, 2, 3].map(value => (
//               <Box key={value} pad="small">
//                 <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
//               </Box>
//             ))}
//           </Box>
//           <RangeSelector
//             direction="horizontal"
//             invert={false}
//             min={0}
//             max={3}
//             size="full"
//             round="small"
//             values={rangeSelector}
//             onChange={values => this.setState({ rangeSelector: values })}
//           />
//         </Stack>
//         <FormField label="FormField">
//           <TextInput placeholder="TextInput" />
//         </FormField>
//       </Box>,
//       <Box key="time" gap="medium">
//         <Calendar size="small" />
//         <Clock type="digital" />
//         <Clock />
//       </Box>,
//       <Box key="measure" gap="medium">
//         <Chart
//           type="bar"
//           round
//           size="small"
//           values={[
//             { value: [10, 20] },
//             { value: [20, 30] },
//             { value: [30, 15] },
//           ]}
//         />
//         <Meter type="bar" round size="small" background="light-3" />
//       </Box>,
//       <Box key="visualize" gap="small">
//         {/* <Distribution
//           basis="small"
//           values={[
//             { value: 50, color: 'light-3' },
//             { value: 30, color: 'accent-1' },
//             { value: 20, color: 'light-4' },
//             { value: 10, color: 'light-3' },
//             { value: 5, color: 'light-4' },
//           ]}
//         >
//           {value => (
//             <Box pad="xsmall" background={value.color} fill>
//               <Text size="large">{value.value}</Text>
//             </Box>
//           )}
//         </Distribution> */}
//         <Stack>
//           <Box>
//             <Box direction="row">
//               {[1, 2].map(id => (
//                 <Node key={id} id={id} />
//               ))}
//             </Box>
//             <Box direction="row">
//               {[3, 4].map(id => (
//                 <Node key={id} id={id} />
//               ))}
//             </Box>
//           </Box>
//           {/* <Diagram connections={[connection('1', '4')]} /> */}
//         </Stack>
//       </Box>,
//       <Box key="dataTable" alignSelf="start">
//         <DataTable
//           columns={[
//             { property: 'name', header: 'Name' },
//             { property: 'color', header: 'Color' },
//           ]}
//           data={[
//             { name: 'Alan', color: 'blue' },
//             { name: 'Chris', color: 'purple' },
//             { name: 'Eric', color: 'orange' },
//           ]}
//           sortable
//         />
//       </Box>,
//       <Box key="accordion">
//         <Accordion>
//           <AccordionPanel label="Accordion Panel 1">
//             <Box pad="small">
//               <Text>Accordion panel 1 content</Text>
//             </Box>
//           </AccordionPanel>
//           <AccordionPanel label="Accordion Panel 2">
//             <Box pad="small">
//               <Text>Accordion panel 2 content</Text>
//             </Box>
//           </AccordionPanel>
//         </Accordion>
//       </Box>,
//       <Box key="tabs">
//         <Tabs
//           activeIndex={tabIndex}
//           onActive={index => this.setState({ tabIndex: index })}
//         >
//           <Tab title="Tab 1">
//             <Box pad="small">
//               <Text>Tab 1 content</Text>
//             </Box>
//           </Tab>
//           <Tab title="Tab 2">
//             <Box pad="small">
//               <Text>Tab 2 content</Text>
//             </Box>
//           </Tab>
//         </Tabs>
//       </Box>,
//       <Box key="video" alignSelf="start">
//         <Video>
//           <source
//             src="http://techslides.com/demos/sample-videos/small.webm"
//             type="video/webm"
//           />
//           <source
//             src="http://techslides.com/demos/sample-videos/small.ogv"
//             type="video/ogg"
//           />
//           <source
//             src="http://techslides.com/demos/sample-videos/small.mp4"
//             type="video/mp4"
//           />
//           <source
//             src="http://techslides.com/demos/sample-videos/small.3gp"
//             type="video/3gp"
//           />
//         </Video>
//       </Box>,
//     ];

//     return (
//       <div
//         style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
//       >
//         <Grommet theme={grommet} style={{ flex: '0 0 auto' }}>
//           <Box
//             direction="row-responsive"
//             gap="medium"
//             justify="end"
//             align="center"
//             margin="small"
//           >
//             <Box basis="small">
//               <Select
//                 plain
//                 size="small"
//                 options={['grommet', 'dark', 'hpe', 'aruba', 'hp', 'dxc', 'v1']}
//                 value={themeName}
//                 onChange={event => this.setState({ themeName: event.option })}
//               />
//             </Box>
//             <Box basis="small">
//               <Select
//                 plain
//                 placeholder="background"
//                 size="small"
//                 options={['default', 'dark-1', 'light-1']}
//                 value={background}
//                 onChange={event => this.setState({ background: event.option })}
//               />
//             </Box>
//             <Box basis="small">
//               <RangeInput
//                 min={16}
//                 max={36}
//                 step={2}
//                 value={baseSize}
//                 onChange={event =>
//                   this.setState({ baseSize: parseInt(event.target.value, 10) })
//                 }
//               />
//             </Box>
//             <Text size="small">{`${baseSize}px base spacing`}</Text>
//           </Box>
//         </Grommet>
//         <Grommet theme={theme} style={{ flex: '1 1' }}>
//           <Box
//             fill
//             pad="medium"
//             background={background || theme.global.colors.background}
//             overflow="auto"
//           >
//             <Box direction="row" wrap align="start" gap="large">
//               {content}
//             </Box>
//           </Box>
//         </Grommet>
//       </div>
//     );
//   }
// }

// export default App;
