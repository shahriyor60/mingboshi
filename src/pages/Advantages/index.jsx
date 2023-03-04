import React from 'react'
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Img1 from "../../assets/img/Vector.png"
import Img2 from "../../assets/img/b-icon.png"
import Img3 from "../../assets/img/d-icon.png"

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
        {t("adventages")}
      </Typography>
     <Box sx={{width:"100%",backgroundColor:"#4E83B8",color:"white" ,padding:"0% 0% 5% 0%",marginTop:"5%"}}> 
          <Container>
          <Grid container justifyContent="center" alignItems="center"> 
            <Grid item md={4} sm={6} xs={12} sx={{textAlign:"center",marginTop:"5%"}}>
            <img src={Img1} alt="" />
            <Typography sx={{marginTop:"5%",fontSize:"150%"}}>
              {t('adventages text 1')}
            </Typography>
            <Typography sx={{marginTop:"5%"}}>
              {t('adventages text 1 text')}
            </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12} sx={{textAlign:"center",marginTop:"5%"}}>
            <img src={Img2} alt="" />
            <Typography sx={{marginTop:"5%",fontSize:"150%"}}>
              {t('adventages text 2')}
            </Typography>
            <Typography sx={{marginTop:"5%"}}>
              {t('adventages text 2 text')}
            </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12} sx={{textAlign:"center",marginTop:"5%"}}>
            <img src={Img3} alt="" />
            <Typography sx={{marginTop:"5%",fontSize:"150%"}}>
              {t('adventages text 3')}
            </Typography>
            <Typography sx={{marginTop:"5%"}}>
              {t('adventages text 3 text')}
            </Typography>
            </Grid>
           </Grid>
          </Container>
     </Box>
    </div>
  )
}
