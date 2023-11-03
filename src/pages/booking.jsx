//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Importér nødvendige moduler og komponenter
import hamburg from "../assets/pictures/hamburg.jpg"
import kyoto from "../assets/pictures/kyoto.jpg"
import london from "../assets/pictures/london.jpg"
import santorini from "../assets/pictures/santorini.jpg";
import iceland from "../assets/pictures/iceland.jpg";
import bhutan from "../assets/pictures/bhutan.jpg";
import salvador from "../assets/pictures/salvador.jpg";
import lapland from "../assets/pictures/lapland.jpg";
import azores from "../assets/pictures/azores.jpg";

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

import BackBtn from "../components/backbtn";
<<<<<<< Updated upstream
import TravelFilter from "../components/imgfilter";
=======
//import ComplexCardRating from "../components/cardrating";
>>>>>>> Stashed changes

export default function Booking() {
    // Hent det aktuelle tema ved hjælp af useTheme hook
    const outerTheme = useTheme();
     // Definér nogle variabler med data, der skal bruges senere

     const images = [
        {
          src: {azores},
          title: 'Image 1',
          subheader: 'Description 1',
        },
        {
          src: {azores},
          title: 'Image 2',
          subheader: 'Description 2',
        },
      ];//objekter som skal bruges til filter funktionen

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
                        <BackBtn/>
            <Stack spacing={4} m={"2em 0 4em"}>
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

            <Stack direction="row" spacing={2} p="0 4% 16%"
          
                    sx={{
                    overflow: "auto",
                
        
                    }}
            >
                {/* ComplexCard er importeret som en komponent og bliver indsat ved at kalde den her
                    Cards har vi defineret som funktionelle komponenter som tager props indunder sig som dets parameter
                    I vores card komponenter skriver vi f.eks. {props.title} så når vi skal bruge vores cards kan vi tilføje dem med de specifikke info der er på pagen.
                */ }
              <ComplexCard
                image={santorini}
                title={"Escape to Santorini's Paradise"}
                subheader={"Relax on Aegean Islands"}
                label={"GRC"}
                body={"Indulge in a dreamy retreat to Santorini, Greece's island gem. Enjoy breathtaking sunsets in Oia, explore ancient ruins in Akrotiri, and unwind on the unique black sand beaches of Kamari. Savor traditional Greek cuisine and immerse yourself in the local culture. With its stunning landscapes and charming villages, Santorini is a true paradise waiting to be discovered. Book your getaway now and experience the magic of the Aegean Islands!"}
                />

                <ComplexCard
                image={iceland}
                title={"Iceland's Natural Wonders"}
                subheader={"Chase Northern Lights & Geysers"}
                label={"ISL"}
                body={"Embark on an adventure to Iceland, a land of unparalleled natural beauty. Witness the mesmerizing Northern Lights dance across the Arctic sky, bathe in the Blue Lagoon's geothermal waters, and hike to see geysers erupt in the Golden Circle. Discover the unique Icelandic culture, try the famous hot dogs, and explore the vibrant Reykjavik. Iceland's diverse landscapes will leave you in awe. Book your journey now and experience the wonders of the North!"}
                />

                <ComplexCard
                image={bhutan}
                title={"Bhutan's Hidden Beauty"}
                subheader={"Explore the Land of the Thunder Dragon"}
                label={"BTN"}
                body={"Venture to Bhutan, the hidden gem of the Himalayas. Visit ancient monasteries like Paro Taktsang (Tiger's Nest), hike through lush valleys, and immerse yourself in the peaceful Buddhist culture. Discover the beauty of Bhutan's unique architecture and try delicious dishes like Ema Datshi. With its untouched natural beauty, Bhutan offers a serene escape from the ordinary. Book your journey now and explore the Land of the Thunder Dragon!"}
                />

                <ComplexCard
                image={salvador}
                title={"Salvador's Vibrant Culture"}
                subheader={"Experience Bahian Traditions"}
                label={"BRA"}
                body={"Immerse yourself in the vibrant culture of Salvador, Brazil. Explore the historic Pelourinho district, witness colorful Carnaval celebrations, and savor delicious Bahian cuisine. Dance to the rhythms of Samba and Capoeira, and relax on the beautiful beaches of Itapuã. Salvador's rich history and lively atmosphere promise an unforgettable cultural journey. Book your trip now and experience the rhythms of Bahia!"}
                />

                <ComplexCard
                image={lapland}
                title={"Lapland's Winter"}
                subheader={"Meet Santa & Northern Lights"}
                label={"FIN"}
                body={"Embark on a magical winter adventure to Lapland, Finland. Meet Santa Claus in his hometown of Rovaniemi, go husky sledding through snowy forests, and witness the enchanting Northern Lights. Stay in cozy glass igloos and experience the thrill of ice fishing. Lapland's snowy landscapes and unique experiences make it a perfect winter getaway. Book your journey now and embrace the winter wonderland of Lapland!"}
                />

                <ComplexCard
                image={azores}
                title={"Azores: Nature's Paradise"}
                subheader={"Explore the Volcanic Islands"}
                label={"PRT"}
                body={"Discover the natural beauty of the Azores, Portugal's hidden gem in the Atlantic Ocean. Hike to volcanic craters, relax in thermal pools, and whale watch in the crystal-clear waters. Enjoy the local cuisine with fresh seafood and cheeses, and explore the charming towns of São Miguel and Terceira. The Azores offer a unique blend of adventure and tranquility. Book your trip now and experience nature's paradise!"}
                />


                <ComplexCard 
                image={hamburg}
                title={ "Two day trip to Hamburg"}
                subheader={"Special tickets to the Elbphilharmonie"}
                label={"GER"}
                body={"Go to to Hamburg for a quick getaway! Explore historic landmarks like the stunning Elbphilharmonie, stroll along the scenic Alster Lake, and savor mouthwatering local cuisine at the famous Fischmarkt. With its vibrant arts scene and rich maritime history, Hamburg promises a memorable adventure in just a few days. Book your short trip now and immerse yourself in the charm of this captivating German city!"}
                />

                <ComplexCard 
                image={kyoto}
                title={"The Beauty of Kyoto"}
                subheader={"Experience Japanese Culture"}
                label={"JPN"}
                body={"Embark on a journey to Kyoto and immerse yourself in the rich traditions of Japan. Visit historic temples and shrines, such as Kinkaku-ji (the Golden Pavilion) and Fushimi Inari Taisha, known for its thousands of vibrant red torii gates. Explore the enchanting Arashiyama Bamboo Grove and savor delicious Japanese cuisine, from sushi to ramen. Kyoto offers a unique blend of ancient and modern, making it a captivating travel destination. Book your adventure now and create lasting memories in the heart of Japan!"}
                 />


                <ComplexCard 
                image={london}
                title={"Discover the Magic of London"}
                subheader={"Explore Iconic Landmarks"}
                label={"UK"}
                body={"Escape to the enchanting city of London and uncover its rich history and vibrant culture. Visit world-famous landmarks like the Tower of London, Buckingham Palace, and the British Museum. Take a leisurely stroll along the River Thames, enjoy a traditional afternoon tea, and explore the trendy neighborhoods of Shoreditch and Notting Hill. London's diverse attractions and culinary scene promise an unforgettable journey. Book your trip now and experience the magic of this iconic city!"}
                /> {/* 
                // Her gentages lignende blokke for andre rejsemål (Kyoto og London) med forskellige oplysninger
                // ComplexCard komponenten bruges til at vise oplysningerne om hvert rejsemål Offers  */}
            </Stack>
<<<<<<< Updated upstream
            <Typography variant="h3" m="0 3% " color="text.secondary.accent" >
=======

            <Typography variant="h3" m="0 3%" color="text.secondary.accent" >
>>>>>>> Stashed changes
               Exclusive Offers!            
            </Typography>



            <Stack direction="row" spacing={1} m="0 0 3%" 
                        sx={{
                            overflow: "auto",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly"

                        }}
                    >
                        <ScrollCards name="New adventure " image={azores} /> 
                        <ScrollCards name="vacation for you?" image={bhutan} />
                        <ScrollCards name="booking!" image={hamburg} />
                        <ScrollCards name="Incredible" image={london} />
                        <ScrollCards name="Want a coupon?" image={kyoto} />
                        </Stack>
                        <Typography variant="h3" m="0 3%">
                            Popular searches
                        </Typography>


                        <TravelFilter></TravelFilter>


                
                        <Typography variant="h3" m="0 3%" color="text.secondary.accent" >
               Hot Deals!            
            </Typography>

            <Stack direction="row" spacing={1}  m="0 0 3%"
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