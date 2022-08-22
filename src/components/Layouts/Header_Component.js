import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import { Avatar } from "@mui/material";
const pages = ["Employee", "Benefit", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [navMenu, setNavMenu] = React.useState("");
  const [settings_nav, setSettings] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleDirectNavMenu = (event) => {
    setNavMenu(event.target.value);
  };
  if (navMenu === "Employee") {
    window.location.href = "/employee";
  }
  if (navMenu === "Benefit") {
    window.location.href = "/benefit";
  } else if (navMenu === "Pricing") {
    window.location.href = "/Pricing";
  } else if (navMenu === "Blog") {
    window.location.href = "/Blog";
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSelectItem = (event) => {
    setSettings(event.target.innerText);
  };

  if (settings_nav === "Logout") {
    window.location.href = "/";
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            BAN XAVI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                value={page}
                onClick={handleDirectNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
  
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: "100px",
              marginRight: "20px",
              cursor: 'pointer',
  
            }}
          >

          <IconButton>
            <PeopleIcon />
            <p style={{position: 'initial', top: '17px', right: '115px', backgroundColor: 'red', width: '15px', height: '15px', borderRadius: '50%', textAlign: 'center', fontSize: 'x-small'}}>3</p>
            </IconButton>
            <IconButton>
            <MessageIcon />
            <p style={{position: 'initial', top: '17px', right: '80px', backgroundColor: 'red', width: '15px', height: '15px', borderRadius: '50%', textAlign: 'center', fontSize: 'x-small'}}>4</p>
            </IconButton>
            </div>
          <IconButton>
            <NotificationsIcon />
            <p style={{position: 'initial', top: '17px', right: '55px', backgroundColor: 'red', width: '15px', height: '15px', borderRadius: '50%', textAlign: 'center', fontSize: 'x-small'}}>5</p>
            </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsIcon />
              </IconButton>
              </Tooltip>

              <IconButton >
              <Avatar style={{right: '1500px'}} alt="Remy Sharp" src="https://kenh14cdn.com/thumb_w/660/2020/4/14/rose-1586871279171887574344.jpg" />
            </IconButton>
           
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  value={setting}
                  onClick={handleSelectItem}
                >
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
  // {
  //  b = document.getElementById('abc');
  //  b = b[0];
  //   c = document.getElementsByTagName('p');
  //   d =document.getElementById('name');
  //   g = document.querySelector('p');
  //   h = document.querySelectorAll('#p');

  //   g.
  //   //0.7s;

  // }
};
export default ResponsiveAppBar;
