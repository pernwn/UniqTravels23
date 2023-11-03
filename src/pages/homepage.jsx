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
import { SplashAnimation, GuyAnimation } from "../components/splash";



//import fra MUI
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
//import af ikoner fra MUI
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import CarRentalIcon from '@mui/icons-material/CarRental';

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



            <Stack spacing={4} m={"2em 0 8em"}>
                <Box className='quickTools'
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",

                    }}
                >
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
                        <ScrollCards name="New offers" image={beach} /> {/*Billeder virker ikke ordentligt med props, forsøger at fikse */}
                        <ScrollCards name="Your next vacation?" image={beach} />
                        <ScrollCards name="Get 20% off on next booking!" image={beach} />
                        <ScrollCards name="Incredible croissants" image={beach} />
                        <ScrollCards name="Got a coupon?" image={beach} />


                    </Stack>
                </Box>


                <Stack direction="column">
                    <Typography variant="h4" lineHeight="1" textAlign="center" gutterBottom>Plan your next vacation with us!</Typography>

                        <GuyAnimation/>

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

                </Stack>
    
                <Box
                    sx={{
                        backgroundColor: customTheme => customTheme.palette.background.paper,
                        p: 2
                    }}
                >
                    <SplashAnimation />
                    {/*<ComReviews />*/}
                </Box>

                <div className="trust">
                    <img src={trust} alt="Trust us! :D" width="100" />
                </div>


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