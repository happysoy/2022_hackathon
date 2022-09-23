import { capitalCase } from "change-case";
import { useState } from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Tab, Box, Card, Tabs, Container, Button } from "@mui/material";
// routes
// import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
// import useAuth from '../../../hooks/useAuth';
import useTabs from "../hooks/useTabs";
// _mock_
import {
  _userCards,
  _userAbout,
  _userFeeds,
  _userFriends,
  _userGallery,
  _userFollowers,
} from "../_mock";
// layouts
// components
import Page from "../components/Page";
import Iconify from "../components/Iconify";
// sections
import {
  Profile,
  ProfileCover,
  ProfileFriends,
  ProfileGallery,
  ProfileFollowers,
  ChatSection,
} from "../sections/teaching-assistant/profile";

// ----------------------------------------------------------------------

const TabsWrapperStyle = styled("div")(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: "100%",
  display: "flex",
  position: "absolute",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    paddingRight: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function TAInfo() {
  const { currentTab, onChangeTab } = useTabs("profile");

  const [findFriends, setFindFriends] = useState("");

  const handleFindFriends = (value) => {
    setFindFriends(value);
  };

  const PROFILE_TABS = [
    {
      value: "profile",
      icon: <Iconify icon={"ic:round-account-box"} width={20} height={20} />,
      component: <Profile myProfile={_userCards[0]} posts={_userFeeds} />,
    },

    {
      value: "질문하기",
      icon: <Iconify icon={"eva:people-fill"} width={20} height={20} />,
      component: (
        <ChatSection />
        // <ProfileFriends
        //   friends={_userFriends}
        //   findFriends={findFriends}
        //   onFindFriends={handleFindFriends}
        // />
      ),
    },
    // {
    //   value: 'gallery',
    //   icon: <Iconify icon={'ic:round-perm-media'} width={20} height={20} />,
    //   component: <ProfileGallery gallery={_userGallery} />,
    // },
  ];

  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          mb: 3,
          height: 280,
          position: "relative",
        }}
      >
        <ProfileCover myProfile={_userAbout} userCard={_userCards} />

        <TabsWrapperStyle>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={currentTab}
            onChange={onChangeTab}
          >
            {PROFILE_TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                value={tab.value}
                icon={tab.icon}
                label={capitalCase(tab.value)}
              />
            ))}
          </Tabs>
        </TabsWrapperStyle>
      </Card>

      {PROFILE_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
      {/* <Profile myProfile={_userCards[0]} posts={_userFeeds} /> */}
    </Container>
  );
}
