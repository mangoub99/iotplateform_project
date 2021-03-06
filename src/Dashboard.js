import * as React from "react";
import { useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import { mainListItems, secondaryListItems } from "./ListItems";
import Chart from "./Chart";
import Deposits from "./Deposits";

// Generate random number between two given values
// function randomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

//function to return the average value of an array of numbers
const average = (arr) => {
  return Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 1e2) / 1e2;
};

//defining our Data arrays
let tempData = [];
let humData = [];
let avrTemp = [];
let avrHum = [];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="#">
        IOT Weather Station
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

/* const mdTheme = createTheme(); */
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // recieve humidity data from our Firebase Database and assign it to the array prop
    const getDataH = async (data) => {
      const res = await axios.get(
        "https://esp-32-36270-default-rtdb.europe-west1.firebasedatabase.app/test/humidity.json"
      );

      var j = 0;
      Object.values(res.data)
        .filter(
          (element) =>
            element.Humidity !== "--" && parseFloat(element.Humidity) > 34
        )
        .map((element) => {
          avrHum.push(parseFloat(element.Humidity) - 100);

          data.push(createData(`${j}:0`, parseFloat(element.Humidity) - 100));
          j = (j + 1) % 24;
        });
      console.log();
    };

    // recieve temperature data from our Firebase Database and assign it to the array prop
    const getDataT = async (data) => {
      const res = await axios.get(
        "https://esp-32-36270-default-rtdb.europe-west1.firebasedatabase.app/test/temperature.json"
      );
      console.log(res.data);
      var j = 0;
      console.log(Object.values(res.data));
      Object.values(res.data)
        .filter(
          (element) =>
            element.Temperature !== "--" && parseFloat(element.Temperature) > 0
        )
        .map((element) => {
          avrTemp.push(parseFloat(element.Temperature));
          data.push(createData(`${j}:0`, parseFloat(element.Temperature)));
          j = (j + 1) % 24;
        });
    };

    getDataT(tempData);
    getDataH(humData);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Link to="/">
              <IconButton color="inherit">
                <Badge color="secondary">
                  <HomeIcon />
                </Badge>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart
                    data={tempData}
                    title="Temperature surveillance (??C)"
                  />
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart data={humData} title="Humidity surveillance (%)" />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits av={average(avrTemp)} title="Temperature" />
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits av={average(avrHum)} title="Humidity" />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
