import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500&display=swap');
</style>;
export default () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Saira",
          fontSize: "200%",
          fontWeight: 500,
        }}
      >
        {t("contacts 1")}
      </Typography>
      <Container>
        <Box sx={{ width: "100%", backgroundColor: "#4E83B8", color: "white" }}>
          <Grid container>
            <Grid item md={5} sm={5} xs={12}sx={{paddingBottom:"20%"}}>
              <Container maxWidth="md">
              <Grid
                  container
                  direction="row"
                 justifyContent="center"
                  alignItems="center"
                  sx={{marginTop:"15%"}}

                >
                  <Grid item md={2}>
                    <PlaceIcon />
                  </Grid>
                  <Grid item md={7}>
                    <Typography
                      sx={{ display: "inline-block", fontSize: "120%" }}
                    >
                      {t("contacts text")}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{marginTop:"10%"}}
                >
                  <Grid item md={2}>
                    <PhoneIcon />
                  </Grid>
                  <Grid item md={7}>
                    <Typography
                      sx={{ display: "inline-block", fontSize: "120%",fontWeight:"700" }}
                    >
                      +998 (98) 535-33-32
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{marginTop:"5%"}}

                >
                  <Grid item md={2}>
                    <MailIcon />
                  </Grid>
                  <Grid item md={7}>
                    <Typography
                      sx={{ display: "inline-block", fontSize: "120%",fontWeight:"700" }}
                    >
                      xasanovshahriyor60@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
            <Grid item md={7} sm={7} xs={12}>
 
                   <iframe style={{width:"100%",height:"100%"}}  id="gmap_canvas" src="https://maps.google.com/maps?q=Rishtan Mingboshi&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
                   </Grid> 
                   </Grid> 
        </Box>
      </Container>
    </div>
  );
};
