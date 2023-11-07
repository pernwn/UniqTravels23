//{Kodet af: Victoria}



//import billeder
import beach from "../assets/pictures/beachy.jpeg"
import trust from "../assets/trustpilot.png"

import beach1 from "../assets/vacation_places_gallery/beach1.jpg"
import beach2 from "../assets/vacation_places_gallery/beach2.jpg"
import beach3 from "../assets/vacation_places_gallery/beach3.jpg"
import beach4 from "../assets/vacation_places_gallery/beach4.jpg"
import beach5 from "../assets/vacation_places_gallery/beach5.jpg"
import beach6 from "../assets/vacation_places_gallery/beach6.jpg"
import beach7 from "../assets/vacation_places_gallery/beach7.jpg"
import beach8 from "../assets/vacation_places_gallery/beach8.jpg"
import beach9 from "../assets/vacation_places_gallery/beach9.jpg"
import beach10 from "../assets/vacation_places_gallery/beach10.jpg"


import building1 from "../assets/vacation_places_gallery/building1.jpg"
import building2 from "../assets/vacation_places_gallery/building2.jpg"
import building4 from "../assets/vacation_places_gallery/building4.jpg"
import building5 from "../assets/vacation_places_gallery/building5.jpg"
import building7 from "../assets/vacation_places_gallery/building7.jpg"
import building8 from "../assets/vacation_places_gallery/building8.jpg"
import building11 from "../assets/vacation_places_gallery/building11.jpg"
import building13 from "../assets/vacation_places_gallery/building13.jpg"
import building15 from "../assets/vacation_places_gallery/building15.jpg"
import building10 from "../assets/vacation_places_gallery/building10.jpg"

import hike1 from "../assets/vacation_places_gallery/hike1.jpg"
import hike2 from "../assets/vacation_places_gallery/hike2.jpg"
import hike3 from "../assets/vacation_places_gallery/hike3.jpg"
import hike4 from "../assets/vacation_places_gallery/hike4.jpg"
import hike5 from "../assets/vacation_places_gallery/hike5.jpg"
import hike6 from "../assets/vacation_places_gallery/hike6.jpg"
import hike7 from "../assets/vacation_places_gallery/hike7.jpg"
import hike8 from "../assets/vacation_places_gallery/hike8.jpg"
import hike9 from "../assets/vacation_places_gallery/hike9.jpg"
import hike11 from "../assets/vacation_places_gallery/hike11.jpg"





//import andre komponenter
import { QuickTools, ScrollCards, AutoScroll, SecndBtn } from '../components/cards';
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


//import af separat theme file
import { customTheme } from '../themes/themes'
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'



export default function HomePage() {
    const outerTheme = useTheme();

    // TODO: ???????????????????????? const greet = newUser ? "Welcome, new traveler!" : "Welcome back, traveler!"
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
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
                        <Typography variant="h2" sx={{ color: customTheme => customTheme.palette.background.default, lineHeight: .8, marginBottom: 4 }}>Welcome Traveler!</Typography>
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
                    <Typography variant='h4' m="0 4%">For you &#10024;</Typography>
                    <Stack direction="row" spacing={2}  /*Stack komponenten fra MUI er brugt her for at sætte elementerne horisontalt – opdagede denne måde, efter jeg havde brugt flex og flexdirection andre steder */
                        sx={{
                            p: "0 4% 8%",
                            overflow: "auto",
                            
                        }}
                    >
                        <ScrollCards name="15% discount on your next booking!" image={beach} />
                        <ScrollCards name="Flights to Paris are especially cheap right now" image={beach} />
                        <ScrollCards name="Earn points in our loyalty programme just by traveling!" image={beach} />
                        <ScrollCards name="Hurry! Get this Golden Ticket before another traveler!!" image={beach} />


                    </Stack>


                </Box>


                <Stack direction="column" alignItems="center">
                    <Typography variant="h4" lineHeight="1" textAlign="center" gutterBottom p="0 3% 3%" >We&apos;ll help plan your perfect dream adventure</Typography>

                    <TravelAnimation />

                    <Stack direction="row" spacing={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            my: "2em",

                            color: customTheme => customTheme.palette.secondary.main

                        }}
                    >
                        <Typography variant="h6">Simple!</Typography>
                        <hr className="dash" />

                        <Typography variant="h6">Fast!</Typography>
                        <hr className="dash" />

                        <Typography variant="h6">Easy!</Typography>


                    </Stack>



                    <SecndBtn name="Book now" page="/booking" />



                </Stack>

                <Stack
                    spacing={2}
                    sx={{ color: customTheme => customTheme.palette.text }}

                >

                    <Typography variant="h5" lineHeight="1" textAlign="center">Get inspired</Typography>
                    <Stack direction="row" spacing={2}
                        sx={{
                            p: "4% 6% 16%",
                            overflow: "auto",
                            
                        }}
                    > {/* TODO: BILLEDERNE SKAL ÆNDRES SÅ DET PASSER TIL TITLEN. TODO: TILFØJ FAV/SAVE FUNKTION. TODO: tilføj share, like, save, whatever ikoner*/}
                        
                      
                        <AutoScroll title="Scenic Landscape" description="A tapestry of nature's beauty unfurls before you. Each step is a dance with adventure, as you chase the mysteries lurking beyond the horizon. The golden sunlight bathes the land in a warm embrace, arising from the ashes of solitude, only to meet its demise in the tranquil waters." image={beach1} />
                        <AutoScroll title="Beach Paradise" description="The beach is a slice of heaven where the sand meets the sea. Crystal-clear waves whisper secrets to the shore, and the azure sky cradles your dreams. It's a place where seagulls write poems in the sands, and every footprint tells a story of the tides." image={beach2} />
                        <AutoScroll title="Coastal Wonderland" description="On this coastal journey, nature paints a masterpiece of adventure. The cliffs reach for the sky, and the waves crash in rhythmic applause. The sea breeze carries tales of distant lands, as you explore the hidden coves and embrace the thrill of discovery." image={beach3} />
                        <AutoScroll title="Beach Bliss" description="A world of serenity awaits on the beach, where the sands hold the warmth of the sun's embrace. It's a realm of quietude, where footprints mark moments in time, and the horizon beckons with promises of limitless wonder." image={beach4} />
                        <AutoScroll title="Lush Oasis" description="This lush oasis is a haven of green, where vibrant foliage dances with the breeze. The scent of blooming flowers fills the air, and the rivers murmur secrets to the trees. It's a place where nature's artistry is on full display, inviting you to explore its intricate beauty." image={beach5} />
    

                     
                        <AutoScroll title="Shoreline Symphony" description="The shoreline is a symphony of waves and wonder. As the tides serenade the sands, seashells reveal their treasures, and the lighthouse stands sentinel over the vast expanse. It's a place where the song of the sea never ceases, and every sunrise brings a new verse." image={beach6} />
                        <AutoScroll title="Secluded Paradise" description="This secluded paradise is a secret haven, where hidden beaches invite exploration. The emerald waters meet the golden sands in perfect harmony, and the cliffs hold untold stories of the sea. It's a place where solitude and beauty become your closest companions." image={beach7} />
                        <AutoScroll title="Beachfront Elegance" description="The beachfront exudes elegance and charm. The palm trees sway to an invisible melody, and the waves greet the shore with grace. It's a realm of sophistication where the sunsets are a nightly masterpiece, and the sands are a luxurious sanctuary for your wanderlust." image={beach8} />
                        <AutoScroll title="Mountain Retreat" description="The mountain retreat is a sanctuary of serenity. Towering peaks kiss the sky, and the lush valleys beckon with their embrace. It's a place where the air is pure, and the echoes of nature's secrets resound in every rustling leaf." image={beach9} />
                        <AutoScroll title="Island Paradise" description="In this island paradise, turquoise waters caress the shores, and swaying palms create a canopy of tranquility. The gentle waves invite you to explore their mysteries, and the sunsets cast a warm glow over the sands, painting a picture of serene bliss." image={beach10} />




                    </Stack>

                    <Typography variant="h5" lineHeight="1" textAlign="center">Explore unique cities</Typography>
                    <Stack direction="row" spacing={2}
                        sx={{
                            p: "4% 6% 16%",
                            overflow: "auto",
                            
                        }}
                    > {/* TODO: BILLEDERNE SKAL ÆNDRES SÅ DET PASSER TIL TITLEN. TODO: TILFØJ FAV/SAVE FUNKTION. TODO: tilføj share, like, save, whatever ikoner*/}
                        <AutoScroll title="Whispering Shadows" description="In a city where shadows gossip and secrets are traded like currency, you'll need more than just an umbrella to shield yourself from their chatter. Welcome to a realm where the dark alleys murmur your name, and you might just overhear your own thoughts in the laughter of the night." image={building1} />
                        <AutoScroll title="Cosmic Web" description="Welcome to a city that's not just on the map but also a celestial crossroads. The streets are constellations, and the buildings are galaxies, all connected by a web of stardust. Here, you're both the traveler and the astronaut of your cosmic journey." image={building2} />
                        <AutoScroll title="Urban Symphony" description="Here, the cacophony of city life orchestrates a symphony of chaos and charm. Be prepared to conduct your own movement, as traffic lights become batons, and street performers compose sonatas in the language of urban rhythm." image={building4} />
                        <AutoScroll title="Puzzle Aether" description="This city is a puzzle in the fabric of reality, where every alleyway and hidden square holds a piece of the cosmic jigsaw. As you navigate its winding streets, you'll find yourself entangled in a web of questions, each one a thread in the tapestry of existence." image={building5} />
                        <AutoScroll title="Whimsical City" description="In this peculiar realm, whimsy is the currency, and everyday life is an ongoing magic show. Expect the unexpected as you wander the streets filled with talking animals, floating teacups, and doorways to otherworldly adventures." image={building10} />
                        <AutoScroll title="Architectural Enigma" description="This city is a riddle written in stone and steel, where buildings tell tales, and each corner holds a clue to the grand puzzle. Can you decode the secrets of its architecture and unlock the enigma that lies within?" image={building11} />
                        <AutoScroll title="Chaos Carnival" description="Step right up to the greatest show in the city, where chaos reigns and mirth is the ringmaster. From roller coasters of spontaneity to cotton candy clouds of unpredictability, this carnival of commotion guarantees a wild ride." image={building13} />
                        <AutoScroll title="Silent Metropolis" description="In this seemingly quiet urban landscape, silence speaks louder than words. The city is a master of the mime, where empty streets tell tales, and the absence of noise forms a symphony of its own. Welcome to the land of whispers, where the calm is deafening." image={building8} />
                        <AutoScroll title="Echo Tapestry" description="The city is a loom weaving stories, where echoes become threads in a vibrant tapestry of tales. Your words are added to the fabric of its history, creating patterns of laughter, love, and legend." image={building7} />
                        <AutoScroll title="Inkblot Dreams" description="The city's streets are an artist's canvas, where inkblots of ideas and aspirations mix and mingle. Stroll through this gallery of dreams and discover the masterpieces within the city's alleys and avenues." image={building15} />


                    </Stack>

                    <Typography variant="h5" lineHeight="1" textAlign="center" gutterBottom>Experience extraordinary cultures</Typography>
                    <Stack direction="row" spacing={2}
                        sx={{
                            p: "4% 6% 16%",
                            overflow: "auto",
                            
                        }}
                    > {/* TODO: BILLEDERNE SKAL ÆNDRES SÅ DET PASSER TIL TITLEN. TODO: TILFØJ FAV/SAVE FUNKTION. TODO: tilføj share, like, save, whatever ikoner*/}
                        <AutoScroll title="Nomadic Tapestry" description="In this culture, traditions are woven like threads into a nomadic tapestry. Each step is a stitch in this grand design, and even the yurts have tales to share." image={hike1} />
                        <AutoScroll title="City of contradictions" description="In this culture, cities are kaleidoscopes of contrast, where ancient temples stand next to futuristic skyscrapers, and street vendors sell both traditional delicacies and high-tech gadgets. It's a place where history and the future share a cup of tea." image={hike2} />
                        <AutoScroll title="Frozen Fables" description="In this culture, the icy tundras are repositories of frozen fables, where the Northern Lights illuminate the pages of history. Even the glaciers have stories etched in their frozen hearts, waiting for a thaw to share their secrets." image={hike3} />
                        <AutoScroll title="Rainforest Riddles" description="Deep in the rainforest, the culture is a riddle wrapped in leaves, where monkeys exchange jokes and the frogs are stand-up comedians. Every leaf hides a punchline, and even the vines seem to tell tales." image={hike4} />
                        <AutoScroll title="Island Illusions" description="On the islands, the culture is a series of illusions, where palm trees hold magic shows, and the sea serenades the shore. It's a place where coconuts roll around like circus performers and the fish tell fishy tales." image={hike5}/>
                        <AutoScroll title="Enchanted Forest" description="This culture thrives in an enchanted forest, where the trees play chess, the mushrooms hold council meetings, and the fireflies are the evening's illuminating poets. You may enter as a traveler but leave as a character in one of the forest's many tales." image={hike6} />
                        <AutoScroll title="Labyrinth of Legends" description="In this culture, cities are labyrinths of legends, where history intertwines with myth, and the streets are paved with the stories of ancestors. It's a place where even the statues have tales to share, and you might just stumble upon a living myth." image={hike7} />
                        <AutoScroll title="Coastal Carnival" description="Along the coast, the culture is a year-round carnival where seagulls provide the soundtrack and the waves are the dancers. It's a realm where fishermen's tales grow bigger than the fish they catch, and every sunset is a fireworks display." image={hike8} />
                        <AutoScroll title="Mountain Monastery" description="High in the mountains, the culture is a peaceful monastery where the air is thin, and wisdom flows like mountain streams. The monks meditate with the eagles, and the clouds whisper ancient secrets." image={hike9} />
                        <AutoScroll title="Glowing Desert" description="In this culture, the desert is a glowing canvas where sand dunes paint pictures in starlight. The cacti are the sculptors of the arid landscape, and even the scorpions carry lanterns." image={hike11} />

                    </Stack>

                    <Typography variant="h5" lineHeight="1" textAlign="center" gutterBottom>Travel more for less</Typography>
                    <Stack direction="row" spacing={2}
                        sx={{
                            p: "4% 6% 16%",
                            overflow: "auto",
                            
                        }}
                    > {/* TODO: BILLEDERNE SKAL ÆNDRES SÅ DET PASSER TIL TITLEN. TODO: TILFØJ FAV/SAVE FUNKTION. TODO: tilføj share, like, save, whatever ikoner*/}
                        <AutoScroll title="Budget Explorer" description="Become a budget explorer and discover the world without breaking the bank. From hidden hostels to street food feasts, your journey is a testament to the art of frugal adventure." image={beach1} />
                        <AutoScroll title="Thrifty Globetrotter" description="As a thrifty globetrotter, you'll unravel the beauty of diverse lands without emptying your wallet. Your travel tales are a testament to the savvy secrets of seeing the world on a shoestring." image={beach} />
                        <AutoScroll title="Economical Wanderer" description="An economical wanderer, you master the art of stretching your travel budget. Your passport tells the story of resourceful journeys, where experiences are rich, and expenses are light." image={beach1} />
                        <AutoScroll title="Penny-Pinching Nomad" description="The penny-pinching nomad travels far and wide, uncovering the globe's wonders without burning a hole in the pocket. Your adventures are a testament to the power of smart spending on the road." image={beach} />
                        <AutoScroll title="Frugal Globetrotter" description="The frugal globetrotter proves that you can explore the planet without depleting your savings. Your travel philosophy is a testament to discovering the extraordinary without the extraordinary cost." image={beach} />
                        <AutoScroll title="Budget Travel Pro" description="Being a budget travel pro means embracing adventure without the financial strain. Your journeys are a testament to the art of prioritizing experiences over expenses." image={beach} />
                        <AutoScroll title="Cost-Conscious Voyager" description="The cost-conscious voyager knows how to travel smart. Your stories are a testament to exploring the world with financial mindfulness, where every penny counts towards an unforgettable adventure." image={beach1} />
                        <AutoScroll title="Savvy Roamer" description="The savvy roamer navigates the world's wonders without squandering savings. Your expeditions are a testament to resourceful travel, where experiences are priceless and costs are minimal." image={beach} />
                        <AutoScroll title="Thrifty Adventurer" description="Being a thrifty adventurer means discovering the extraordinary in the ordinary. Your travels are a testament to the joys of embracing the world without the burden of excess spending." image={beach1} />
                        <AutoScroll title="Wise Jetsetter" description="As a wise jetsetter, you make the most of your travel budget. Your tales are a testament to the journey's true value, where affordability never compromises the richness of exploration." image={beach} />

                    </Stack>

                </Stack>

                <Box
                    sx={{
                        backgroundColor: customTheme => customTheme.palette.background.paper,
                        p: 4
                    }}
                >

                    <div className="trust">
                        <img src={trust} alt="Trust us! :D" width="150" />
                    </div>

                    <Trustpilot />
                    {/*<ComReviews />*/}
                </Box>




            </Stack>

        </ThemeProvider>
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

/* <Typography variant="h5" lineHeight="1" textAlign="center" gutterBottom>Explore unique cities</Typography>
<Stack direction="row" spacing={4}
 
>
<AutoScroll image={beach} />
<AutoScroll image={beach} />
<AutoScroll image={beach} />
</Stack>

<Typography variant="h5" lineHeight="1" textAlign="center" gutterBottom>Experience extraordinary cultures</Typography>
<Stack direction="row" spacing={4}>

<AutoScroll image={beach} />
<AutoScroll image={beach} />
<AutoScroll image={beach} />
</Stack>

<Typography variant="h5" lineHeight="1" textAlign="center" gutterBottom>Travel more for less</Typography>
<Stack direction="row" spacing={4}>
<AutoScroll image={beach} />
<AutoScroll image={beach} />
<AutoScroll image={beach} />
</Stack> */