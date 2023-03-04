import React, { useState } from "react";
import LangChangerButton from "../../components/LengChangerButton/LengChangerButton";
import { useTranslation } from "react-i18next";
import BgImg from "../../assets/img/img.png";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Logo from "../../assets/img/Logo.svg";
import Tooltip from "@mui/material/Tooltip";
import Logo2 from "../../assets/img/Logo2.svg";

import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import Navbg from "../../assets/img/Nav fon.png"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import G1 from "../../assets/img/g1.png"
import G2 from "../../assets/img/g2.png"
import G3 from "../../assets/img/g3.png"
import G4 from "../../assets/img/g4.png"
import G5 from "../../assets/img/g5.png"
import G6 from "../../assets/img/g6.png"
import G7 from "../../assets/img/g7.png"
import G8 from "../../assets/img/g8.png"
import G9 from "../../assets/img/g9.png"
import G10 from "../../assets/img/g10.png"
import G11 from "../../assets/img/g11.png"
import G12 from "../../assets/img/g12.png"
import G13 from "../../assets/img/g13.png"
import G14 from "../../assets/img/g14.png"
import G15 from "../../assets/img/g15.png"
import G16 from "../../assets/img/g16.png"
import G17 from "../../assets/img/g17.png"
import G18 from "../../assets/img/g18.png"
import G19 from "../../assets/img/g19.png"
import G20 from "../../assets/img/g20.png"

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
</style>;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500&display=swap');
</style>;
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default ()=> {
    const myStyle = {
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
      const { t, i18n } = useTranslation();
   
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
      const data=[
        {
            img:G1
        },{
            img:G2
        },{
            img:G3
        },{
            img:G4
        },{
            img:G5
        },{
            img:G6
        },{
            img:G7
        },{
            img:G8
        },{
            img:G9
        },{
            img:G10
        },{
            img:G11
        },{
            img:G12
        },{
            img:G13
        },{
            img:G14
        },{
            img:G15
        },{
            img:G16
        },{
            img:G17
        },{
            img:G18
        },{
            img:G19
        },{
            img:G20
        },
      ]
  return (
    <div>

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
                    href={"/"}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "70%",
                    }}
                  >
                    {t('home')}
                  </a>
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
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <a href={"/galary"}>Galary</a>
                    </Typography>
                  </MenuItem>
                </Menu>
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
                <Typography textAlign="center" sx={{ textDecoration: "none" }}>
                  <a
                    href={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {t('home')}
                  </a>
                </Typography>
                <Grid container justifyContent="center">
                  <Grid item>

                <Typography
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex",md:"" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  textAlign:"center"
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
   
   
    </Container>

  </div>
  <Container sx={{marginTop:"10%"}}>
  <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }} justifyContent="center" >
  {data.map((val, index) => (
    <Grid item xs={12} sm={6} md={3.5} key={index}>
     <img src={val.img} alt="" />
    </Grid>
  ))}
</Grid>
      </Container>
    </div>


  )
}
