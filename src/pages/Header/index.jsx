import React, { useState } from "react";
import LangChangerButton from "../../components/LengChangerButton/LengChangerButton";
import { useTranslation } from "react-i18next";
import BgImg from "../../assets/img/img.png";
import "./index.css";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Logo from "../../assets/img/Logo.svg";
import Logo2 from "../../assets/img/Logo2.svg";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
</style>;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500&display=swap');
</style>;
export default () => {
  const { t, i18n } = useTranslation();
  const myStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={myStyle}>
      <Container sx={{ padding: "3% 0% 4% 0%" }}>
        <AppBar
          position="static"
          sx={{ background: "none", boxShadow: "none", color: "black" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <a
                    href={"/galary"}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "70%",
                    }}
                  >
                    {t("navbar burger-menus gallery")}
                  </a>
                </IconButton>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={Logo2} alt="" />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Typography
                  sx={{ textDecoration: "none", alignItems: "center" }}
                >
                  <a
                    href={"/galary"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {t("navbar burger-menus gallery")}
                  </a>
                </Typography>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Typography
                      href=""
                      sx={{
                        mr: 2,
                        display: { xs: "flex", md: "" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        textAlign: "center",
                      }}
                    >
                      <img src={Logo} alt="" />
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <LangChangerButton />
            </Toolbar>
          </Container>
        </AppBar>
        <Grid container sx={{ marginTop: "5%" }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                fontSize: "10vmin",
                fontFamily: "Saira",
                fontWeight: "500",
                color: "#2C2D2E",
              }}
            >
              {t("header text")}
            </Box>
          </Grid>
          <Grid item xs={0} md={6}></Grid>
        </Grid>
        <Box sx={{ marginTop: "20%" }}>
          <Grid container alignItems={"center"} sx={{ width: "200px" }}>
            <Grid item xs={2}>
              <PhoneIcon sx={{ color: "#2C2D2E", fontSize: "25px" }} />
            </Grid>
            <Grid item xs={10} x={{ fontFamily: "Saira" }}>
              +998 (91) 200 00 00
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
