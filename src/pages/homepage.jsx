//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

//{Kodet af: Victoria}

//import billeder
//import logoplaceholder from '../assets/pictures/logoplaceholder.png'
import beach from "../assets/pictures/beachy.jpeg"
//import video from "../assets/NFP2.mp4"
import trust from "../assets/trustpilot.png"

//import andre komponenter
import { QuickTools, ScrollCards } from '../components/cards';
import SearchBar from '../components/search';
import "../styles/vic.css"
import { /*SplashAnimation, GuyAnimation,*/ TravelAnimation } from "../components/splash";

import Desti from "../components/searchDesti";

//import fra MUI
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
//import af ikoner fra MUI
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import CarRentalIcon from '@mui/icons-material/CarRental';
import Trustpilot from "../components/trustpilot";

//import ComReviews from "../components/reviews";



//import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';




export default function HomePage() {


    // TODO: ???????????????????????? const greet = newUser ? "Welcome, new traveler!" : "Welcome back, traveler!"
    return (
        <>
            <section className='hPic'>
                <section className='search'>
                    <Box /* Bruger box komponenten fra MUI i stedet for div/section etc, for at være i stand til at style med CSS fra MUI systemet*/
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                            position: 'absolute',
                            top: 80
                        }}
                    >
                        <Typography variant="h2" sx={{ color: customTheme => customTheme.palette.background.paper, lineHeight: .8, marginBottom: 4 }}>Welcome Traveler!</Typography>
                        <SearchBar />
                    </Box>

                </section>
            </section>

            <Desti />

                        
            <Stack spacing={8} m={"2em 0 12em"}>
                <Box className='quickTools'
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",

                    }}
                > {/* Her anvendes componenten "cards" hvor vi har lavet flere funktioner så man kan bruge props, så vi kan genbruge koden */}
                    <QuickTools name="Travel options" icon={<FmdGoodOutlinedIcon sx={{ fontSize: 40, marginBottom: "16%" }} />} />
                    <QuickTools name="Housing options" icon={<MapsHomeWorkOutlinedIcon sx={{ fontSize: 40, marginBottom: "16%" }} />} />
                    <QuickTools name="Transport options" icon={<CarRentalIcon sx={{ fontSize: 40, marginBottom: "16%" }} />} />
                </Box>



                <Box
                    sx={{ color: customTheme => customTheme.palette.secondary.main }}
                >
                    <Typography variant='h4' m="0 3%">Hot deals! &#10024;</Typography>
                    <Stack direction="row" spacing={2}  /*Stack komponenten fra MUI er brugt her for at sætte elementerne horisontalt – opdagede denne måde, efter jeg havde brugt flex og flexdirection andre steder */
                        sx={{
                            p: "0 3% 3%",
                            overflow: "auto",
                        }}
                    >
                        <ScrollCards name="New offers" image={beach} />
                        <ScrollCards name="Your next vacation?" image={beach} />
                        <ScrollCards name="Get 20% off on next booking!" image={beach} />
                        <ScrollCards name="Got a coupon?" image={beach} />


                    </Stack>
                </Box>


                <Stack direction="column">
                    <Typography variant="h4" lineHeight="1" textAlign="center" gutterBottom>Plan your next vacation with us!</Typography>

                    <TravelAnimation />

                    <Stack direction="row" spacing={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            my: "2em",

                            color: customTheme => customTheme.palette.secondary.main

                        }}
                    >
                        <Typography variant="h5">Simple!</Typography>
                        <hr className="dash" />

                        <Typography variant="h5">Fast!</Typography>
                        <hr className="dash" />

                        <Typography variant="h5">Easy!</Typography>


                    </Stack>

                    {/* Her vil være en masse billeder der auto scroller, billeder af byer, landskab, strande, ferie steder etc */ }
                    <Typography variant="h5" lineHeight="1" textAlign="center" gutterBottom>Get inspired</Typography>
                    <Stack direction="row" spacing={2}
                        sx={{
                            p: "0 3% 3%",
                            overflow: "auto",
                
                        }}
                    >

                        <QuickTools />
                        <QuickTools/>
                        <QuickTools/>
                        <QuickTools/>
                        <QuickTools/>
                        <QuickTools/>
                        <QuickTools/>
                        <QuickTools/>
                        <QuickTools/>
                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                        <div><img src="" alt="" /></div>

                    </Stack>

                </Stack>

                <Box
                    sx={{
                        backgroundColor: customTheme => customTheme.palette.background.paper,
                        p:4
                    }}
                >

                    <div className="trust">
                        <img src={trust} alt="Trust us! :D" width="200" />
                    </div>

                    <Trustpilot />
                    {/*<ComReviews />*/}
                </Box>




            </Stack>

        </>
    );
}

/*                            

                    <video src={video} width="100%" height="auto" controls preload="none" /*TODO: udskift video />

<Typography variant="h4">
                                <Divider textAlign="center">Simple!</Divider>
                                <Divider textAlign="center">Fast!</Divider>
                                <Divider textAlign="center">Easy!</Divider>
                            </Typography>
 */