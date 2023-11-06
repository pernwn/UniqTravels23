//{HEADER / USERHEAD er kodet af: Victoria}

//{Kodet af: Rina}


// Med NavLink gør vi, at produktet bliver en 1 pager
import { NavLink } from "react-router-dom";


import logoplaceholder from '../assets/pictures/logoplaceholder.png'
import userp from '../assets/pictures/userp.png'


//import af separat theme fil
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { Box, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';

import UserHead from "../components/userhead";
import '../styles/vic.css'
import BackBtn from "../components/backbtn";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';

import { QuickTools } from "../components/cards";

export default function User() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />

            <div className="header">
                <BackBtn/>
                <Typography variant="subtitle1" className="h_txt">Traveler Profile</Typography>
                <SettingsOutlinedIcon
                            sx={{
                                position:"fixed",
                                top:20,
                                right:20,

                                color: customTheme => customTheme.palette.secondary.main,
                                borderRadius:"10px",
                                fontSize:"25pt",
                                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)"
                                
                            }}
                />
            </div>

            <section className="body">
                <section className="b_head">


                    <div className="user">
                        <div className="u_img"><img src={userp} alt="User Profilpicture" /></div>
                    </div>

                    <UserHead />
                    <img src={logoplaceholder} alt="placeholder" style={{ width: "5em" }} />
                    <NavLink to='/login'>login</NavLink>
                </section>

            </section>

            <Box
                    sx={{ color: customTheme => customTheme.palette.secondary.main }}
                >
                    <Typography variant='h4' m="0 3%"> My Pages &#10024;</Typography>
                    <Stack direction="row" spacing={2}  /*Stack komponenten fra MUI er brugt her for at sætte elementerne horisontalt – opdagede denne måde, efter jeg havde brugt flex og flexdirection andre steder */
                        sx={{
                            p: "0 3% 3%",
                            overflow: "auto",
                        }}
                    >

                        
                    <QuickTools name="Documents" icon={<ArticleOutlinedIcon sx={{ fontSize: 40 }} />} />
                    <QuickTools name="Tickets" icon={<AirplaneTicketOutlinedIcon sx={{ fontSize: 40 }} />} />
                    <QuickTools name="Passport" icon={<PhotoCameraFrontOutlinedIcon sx={{ fontSize: 40 }} />} />




                    </Stack>
                </Box>




        </ThemeProvider>
    );
}