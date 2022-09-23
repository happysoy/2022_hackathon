import { Container, Box, Drawer, Toolbar } from "@mui/material";
import React from "react";
import ChannelMenu from "../components/Menu/ChannelMenu";
import Chat from "../components/Chat/Chat";
import Header from "../components/Header";
import ThemeMenu from "../components/Menu/ThemeMenu";
import { useSelector } from "react-redux";
import Page from "../components/Page";
import UserCard from "../sections/user/UserCard";
import { _userCards } from "../_mock";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Container maxWidth={"lg"}>
      <Link to="/ta-info" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {_userCards.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      </Link>
    </Container>
  );

  // const { theme } = useSelector((state) => state);
  // return <Box sx={{ display: "flex", backgroundColor: theme.subTheme }}>

  // </Box>;
}

export default Main;
