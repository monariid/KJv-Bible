import {
  Burger,
  Center,
  ColorScheme,
  Flex,
  Group,
  Header,
  Image,
  MediaQuery,
  Switch,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { SearchControl } from "./SearchControl";

const MyHeader = ({
  colorScheme,
  toggleColorScheme,
  opened,
  setOpened,
  open,
}: {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  opened: boolean;
  setOpened: (opened: boolean) => void;
  open: () => void;
}) => {
  const theme = useMantineTheme();
  return (
    <Header height={56}>
      <Center
        h={56}
        px={10}
        mx="auto"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Flex sx={{ justifyContent: "start", alignItems: "center" }}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xs"
            />
          </MediaQuery>

          <Title
            order={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "row"
            }}
          >
            <Image
              height={30}
              width="auto"
              fit="contain"
              radius="md"
              src="./bible.png"
              alt="Logo"
            />{" "}
            <span style={{
              paddingLeft: "2px",
              paddingRight: "2px",
            }} />
            King James Version (KJV)
          </Title>
        </Flex>

        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <SearchControl onClick={open} />
        </MediaQuery>

        <Group position="center" my={30}>
          <Switch
            checked={colorScheme === "dark"}
            onChange={toggleColorScheme}
            size="sm"
            onLabel={
              <IconSun color={theme.white} size="1.0rem" stroke={1.5} />
            }
            offLabel={
              <IconMoonStars
                color={theme.colors.gray[6]}
                size="1.0rem"
                stroke={1.5}
              />
            }
          />
        </Group>
      </Center>
    </Header>
  );
};

export default MyHeader;
