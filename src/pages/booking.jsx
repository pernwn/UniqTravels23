//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Importér nødvendige moduler og komponenter
import hamburg from "../assets/pictures/hamburg.jpg"
import kyoto from "../assets/pictures/kyoto.jpg"
import london from "../assets/pictures/london.jpg"

import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { Box, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import SearchBar from '../components/search';
import { QuickTools, ScrollCards } from '../components/cards';
import ComplexCard from '../components/compcard';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import "../styles/rin.css"


export default function Booking() {
    // Hent det aktuelle tema ved hjælp af useTheme hook
    const outerTheme = useTheme();
     // Definér nogle variabler med data, der skal bruges senere

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <section className='hPic'>{/* Denne section er stylet magen til den på Homepage for at der er sammenhæng i siden*/}
            <section className='search'>
                    <Box 
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                            position: 'absolute',
                            top: 80
                        }}
                    >
                        <Typography variant="h2" sx={{ color: customTheme => customTheme.palette.background.paper, lineHeight: .8, marginBottom: 4 }}>Where would you like to go?</Typography>
                        <SearchBar />{/* Searchbar er importeret som en komponent og bliver indsat ved at kalde den her*/ }
                    </Box>

                </section>
            </section>

{/* sx tilpasser stil for stack så det er horisontalt og tilføjer en rullebjælke så man kan scrolle over komponenterne*/}
            <section className='quickTools'>
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
                    <QuickTools name="Explore options" icon={<TravelExploreOutlinedIcon sx={{ fontSize: 40, marginBottom: "16%" }} />} />
                </Box>
                </Stack>
            </section>
            <Typography variant="h2" m="0 3%">Flights</Typography>

            <Stack direction="row" spacing={2}
                    sx={{
                        flexDirection: "row",
                        overflow:"auto",

                    }}
            >
                {/* ComplexCard er importeret som en komponent og bliver indsat ved at kalde den her
                    Cards har vi defineret som funktionelle komponenter som tager props indunder sig som dets parameter
                    I vores card komponenter skriver vi f.eks. {props.title} så når vi skal bruge vores cards kan vi tilføje dem med de specifikke info der er på pagen.
                */ }
                <ComplexCard className="compcard"
                image={"../src/assets/pictures/hamburg.jpg"}
                title={ "Two day trip to Hamburg"}
                subheader={"Special tickets to the Elbphilharmonie"}
                label={"GER"}
                body={"Go to to Hamburg for a quick getaway! Explore historic landmarks like the stunning Elbphilharmonie, stroll along the scenic Alster Lake, and savor mouthwatering local cuisine at the famous Fischmarkt. With its vibrant arts scene and rich maritime history, Hamburg promises a memorable adventure in just a few days. Book your short trip now and immerse yourself in the charm of this captivating German city!"}
                />

                <ComplexCard className="compcard"
                image={"../src/assets/pictures/kyoto.jpg"}
                title={"Discover the Beauty of Kyoto"}
                subheader={"Experience Japanese Culture"}
                label={"JPN"}
                body={"Embark on a journey to Kyoto and immerse yourself in the rich traditions of Japan. Visit historic temples and shrines, such as Kinkaku-ji (the Golden Pavilion) and Fushimi Inari Taisha, known for its thousands of vibrant red torii gates. Explore the enchanting Arashiyama Bamboo Grove and savor delicious Japanese cuisine, from sushi to ramen. Kyoto offers a unique blend of ancient and modern, making it a captivating travel destination. Book your adventure now and create lasting memories in the heart of Japan!"}
                 />

                <ComplexCard className="compcard"
                image={"../src/assets/pictures/kyoto.jpg"}
                title={"Discover the Beauty of Kyoto"}
                subheader={"Experience Japanese Culture"}
                label={"JPN"}
                body={"Embark on a journey to Kyoto and immerse yourself in the rich traditions of Japan. Visit historic temples and shrines, such as Kinkaku-ji (the Golden Pavilion) and Fushimi Inari Taisha, known for its thousands of vibrant red torii gates. Explore the enchanting Arashiyama Bamboo Grove and savor delicious Japanese cuisine, from sushi to ramen. Kyoto offers a unique blend of ancient and modern, making it a captivating travel destination. Book your adventure now and create lasting memories in the heart of Japan!"}
                 />

                <ComplexCard className="compcard"
                image={"../src/assets/pictures/london.jpg"}
                title={"Discover the Magic of London"}
                subheader={"Explore Iconic Landmarks"}
                label={"UK"}
                body={"Escape to the enchanting city of London and uncover its rich history and vibrant culture. Visit world-famous landmarks like the Tower of London, Buckingham Palace, and the British Museum. Take a leisurely stroll along the River Thames, enjoy a traditional afternoon tea, and explore the trendy neighborhoods of Shoreditch and Notting Hill. London's diverse attractions and culinary scene promise an unforgettable journey. Book your trip now and experience the magic of this iconic city!"}
                /> {/* 
                // Her gentages lignende blokke for andre rejsemål (Kyoto og London) med forskellige oplysninger
                // ComplexCard komponenten bruges til at vise oplysningerne om hvert rejsemål Offers  */}
            </Stack>
            <Typography variant="h3" m="0 3%">
               Exclusive Offers!            
            </Typography>



            <Stack direction="row" spacing={1}  
                        sx={{
                            overflow: "auto",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly"

                        }}
                    >
                        <ScrollCards name="New " image={london} /> 
                        <ScrollCards name="vacation?" image={kyoto} />
                        <ScrollCards name="booking!" image={hamburg} />
                        <ScrollCards name="Incredible" image={london} />
                        <ScrollCards name="coupon?" image={kyoto} />
                        </Stack>




        </ThemeProvider>   

    );
}