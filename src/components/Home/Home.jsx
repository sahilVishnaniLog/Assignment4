import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  Stack,
  IconButton,
  Tabs,
  Tab,
  Divider,
  Box,
} from "@mui/material";
import {
  Group as GroupIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";

import {
  Board,
  Forms,
  List,
  Pages,
  Summary,
  Timeline,
} from "../Pages/index.js";

const TabsArray = ["Board", "Forms", "List", "Pages", "Summary", "Timeline"];

const routeMap = {
  Board: "/board",
  Forms: "/forms",
  List: "/list",
  Pages: "/pages",
  Summary: "/summary",
  Timeline: "/timeline",
};

const IconButtonStyle = {
  bgcolor: "white",
  border: "2px grey solid ",
  borderRadius: "20%",
  color: "black",
  height: "40px",
  width: "40px",
  "&:hover": { bgColor: "white" },
  "&:active": { bgColor: "white" },
  "&:focus": { bgColor: "white" },
};

export default function Home() {
  const [valueTab, setValueTab] = useState("Board");

  // to make the conent to be MPA
  const location = useLocation(); // tells what URL you are on
  const navigate = useNavigate(); // changes the current URL ( tells the app to go to a different page)

  //Derive current tab from URL
  const currentTab =
    Object.keys(routeMap).find((key) => routeMap[key] === location.pathname) ||
    "Board";

  // Redirect  root -> board
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/board", { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleChange = (event, newValue) => {
    navigate(routeMap[newValue]);
  };
  return (
    <Container
      sx={{
        bgcolor: "grey",
        height: "100%",
        width: "100%",
        maxWidth: { sm: 700, md: 900, lg: 1500, xl: 2400 },
        padding: { sm: 1, md: 2, lg: 3, xl: 4 },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "30px", color: "white" }}>
          {" "}
          Teams{" "}
        </Typography>
        <IconButton sx={IconButtonStyle}>
          {" "}
          <GroupIcon />{" "}
        </IconButton>
        <IconButton sx={IconButtonStyle}>
          {" "}
          <MoreHorizIcon />{" "}
        </IconButton>
      </Stack>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        {TabsArray.map((item, index) => {
          return <Tab key={index} label={item} value={item} />;
        })}
      </Tabs>
      <Divider sx={{ borderBottomWidth: 3, bgcolor: "white" }} />
      <Box
        sx={{
          bgcolor: "white",
          minHeight: "80vh",

          p: { sm: 1, md: 2, lg: 3, xl: 4 },
        }}
      >
        {valueTab === "Board" && <Board />}
        {valueTab === "Forms" && <Forms />}
        {valueTab === "List" && <List />}
        {valueTab === "Pages" && <Pages />}
        {valueTab === "Summary" && <Summary />}
        {valueTab === "Timeline" && <Timeline />}
      </Box>
    </Container>
  );
}
