import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import {
  Box,
  Grid,
  Card,
  Link,
  Avatar,
  MenuItem,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
// components
import Iconify from "../../../components/Iconify";
import InputStyle from "../../../components/InputStyle";
import MenuPopover from "../../../components/MenuPopover";
import SocialsButton from "../../../components/SocialsButton";
import SearchNotFound from "../../../components/SearchNotFound";
import ChannelMenu from "../../../components/Menu/ChannelMenu";
import Chat from "../../../components/Chat/Chat";
// ----------------------------------------------------------------------

export default function ChatSection() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        질문하기
      </Typography>
      <Box sx={{ display: "flex" }}>
        <ChannelMenu />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Chat />
        </Box>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
