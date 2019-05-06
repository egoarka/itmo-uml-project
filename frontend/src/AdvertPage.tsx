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
      Та изи ща сделаю Та изи ща сделаю Та изи ща сделаю
      <br /> Та изи ща сделаю Та изи ща сделаю Та изи ща сделаю <br />
      Та изи ща сделаю Та изи ща сделаю Та изи ща сделаю
    </Text>
    <Text color="status-unknown" size="15px">
      06 мая 2019, 21:47
    </Text>
  </Box>
);

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
      Миграция на AWS SES + настройка DNS/DMARC
    </Heading>
    <Box margin={{ left: "small" }}>
      <Text color="status-unknown" size="15px">
        Цена договорная • безналичный расчёт <br />
        06 мая 2019, 21:47 • 3 отклика • 16 просмотров
      </Text>

      <Text
        color="#030f09"
        margin={{ top: "small", bottom: "small" }}
        size="medium"
      >
        Необходимо настроить отправку транзакционных email-ов (триггеров) на
        нашем сервере с использованием Amazon Simple Email Service. Бэкэнд у нас
        на Руби, соответственно нужен человек со знанием языка не ниже мидла.
        Дополнительно нужно будет внести изменения в записи ДНС/ДМАРК и
        убедиться в доставляемости писем без ошибок. Ничего верстать не надо -
        только настроить имэйл сервер на рассылку готовых писем.
      </Text>
    </Box>

    <Box width="medium" margin="xsmall">
      <Button primary label="Оставить заявку" color="neutral-1" />
    </Box>

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
