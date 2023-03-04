import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../assets/img/Logo2.png";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import Facebook from "../../assets/img/facebook.png"
import Telegram from "../../assets/img/Telegram.png"
export default () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        paddingTop: "3%",
        paddingBottom: "3%  ",
        backgroundColor: "#2E557C",
      }}
    >
      <Container>
        <Grid container alignContent="center" justifyContent="center">
          <Grid item md={2} xs={12} sx={{textAlign:"center"}}>
            <img src={Logo} alt="" />
          </Grid>
          <Grid item md={10} xs={12}>
            <Grid container sx={{color:"white"}} justifyContent="center" spacing={1} alignItems="center">
            <Grid item md={1} xs={12} >
              <Typography sx={{textAlign:"center"}}>
              {t("home")}
              </Typography>
              </Grid>
              <Grid item md={2} xs={12} sx={{textAlign:"center"}}>{t("navbar burger-menus history")}</Grid>
              <Grid item md={2} xs={12} sx={{textAlign:"center"}}>{t("navbar burger-menus whatisthe musim")}</Grid>
              <Grid item md={2} xs={12} sx={{textAlign:"center"}}>{t("navbar burger-menus our advantages")}</Grid>
              <Grid item md={1} xs={12} sx={{textAlign:"center"}}>{t("navbar burger-menus gallery")}</Grid>
              <Grid item md={1} xs={12} sx={{textAlign:"center"}}>{t("navbar burger-menus contacts")}</Grid>
              <Grid item md={1} xs={12} sx={{textAlign:"center"}}>
                <Grid container spacing={4} justifyContent="center">
                  <Grid item md={6}> <a href="https://www.facebook.com/profile.php?id=100088837771760"> <img src={Facebook} alt="" /></a></Grid>
                  <Grid item md={6}> <img src={Telegram} alt="" /></Grid>

                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
