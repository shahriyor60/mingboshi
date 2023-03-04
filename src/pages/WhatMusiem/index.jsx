import React from 'react'
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Usta from "../../assets/img/usta 1.png";
import Img2 from "../../assets/img/065A9755 2.png"
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500&display=swap');
</style>;
export default ()=> {
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
        {t("what musiem")}
      </Typography>
      <Container>
        <Grid container sx={{marginTop:"50px"}} justifyContent="center">
            <Grid item md={5}  sx={{textAlign:"center"}} xs={12} sm={6}>
                <img src={Usta} alt="" style={{width:"100%",fontFamily:"Saira",fontSize:"20px",fontWeight:"400",
            }}/>
            </Grid>
            <Grid item md={7} xs={12} sm={6}>
                <Grid container>
                <Grid item>

                <Box >
                  <Container>
                    <Typography sx={{fontSize:"100%"}}>
                    {t('what musiem text')}
                    </Typography>
                  </Container>
                </Box>
                </Grid>
                <Grid item>

                <Container>
                <Box>
                    <img src={Img2} alt="" style={{width:"100%",marginTop:"7%"}}/>
                </Box>
                </Container>
                </Grid>
                </Grid>

            </Grid>
        </Grid>
      </Container>
    </div>
  )
}
