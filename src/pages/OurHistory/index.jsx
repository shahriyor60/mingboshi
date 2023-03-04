import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Img from "../../assets/img/KMM_8309.JPG";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
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
        {t("our history")}
      </Typography>
      <Box sx={{ marginTop: "3%" }}>
        <Grid container justifyContent="center"  alignItems="center">
          <Grid item xs={12} md={7} sm={12} >
            <img src={Img} alt="" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={0} md={5}  sm={12}>
           
               
            <Box
              sx={{
                backgroundColor: "#4E83B8",
                color: "white",
                padding:"5% 5% 10% 5%",
              }}
            >
              <Container>
                <Typography
                  sx={{
                    fontFamily: "Saira",
                    fontSize: "200%",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  “Mingboshi Ceramic”
                </Typography>
                     <Typography
                  sx={{
                    fontFamily: "Saira",
                    fontSize: "150%",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {t('our history t2')}
                </Typography>
                <Typography sx={{ marginTop: "30px" ,fontSize:"100%",fontWeight:500}}>
                  {t("our history text")}
                </Typography>
    
              </Container>
            </Box>
             
          
          </Grid>
         
        </Grid>
      </Box>
    </div>
  );
};
