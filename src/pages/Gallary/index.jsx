import React from 'react'
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Img1 from "../../assets/img/1.png"
import Img2 from "../../assets/img/2.png"
import Img3 from "../../assets/img/3.png"
import Img4 from "../../assets/img/4.png"
import Img5 from "../../assets/img/5.png"
import Img6 from "../../assets/img/6.png"
import Img7 from "../../assets/img/7.png"
import Img8 from "../../assets/img/8.png"
import Img9 from "../../assets/img/9.png"
import Img10 from "../../assets/img/10.png"
import Img11 from "../../assets/img/11.png"
import Img12 from "../../assets/img/12.png"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500&display=swap');
</style>;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white ',
  border: '2px solid #5e5e5e',
  boxShadow: 24,
  p: 4,
};
export default ()=> {
    const { t, i18n } = useTranslation();
  const data =[
    {
      img:Img1
    },
    {
      img:Img2
    },{
      img:Img3
    },{
      img:Img4
    },{
      img:Img5
    },{
      img:Img6
    },{
      img:Img7
    },{
      img:Img8
    },{
      img:Img9
    },{
      img:Img10
    },{
      img:Img11
    },{
      img:Img12
    }
  ]
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        {t("galary")}
      </Typography>
      <Container>
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }} justifycontent="center"  sx={{marginTop:"5%"}}>
  {data.map((val, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} sx={{textAlign:"center"}}>
      <img src={val.img} alt="" />

    </Grid>
  ))}
  
</Grid>
      </Container>
    </div>
  )
}
