import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

import { Avatar, Button, Divider, FormGroup, ListItem, Rating, Stack, TextField, Typography } from "@mui/material";




export default function ComReviews() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState(0);
    const [date, setDate] = useState(0);

    const [sorting, setSorting] = useState("location")





    useEffect(() => {
        async function fetchData() {
            onSnapshot(collection(db, "community-reviews"), data => {
                const docs = [];
                data.forEach((doc) => {
                    docs.push({ id: doc.id, ...doc.data() });
                });
                console.log("useEffect");

                docs.sort(function (a, b) {
                    if (a[sorting] < b[sorting]) {
                        return 1;
                    }
                    if (a[sorting] > b[sorting]) {
                        return -1;
                    }
                    return 0;
                });

                setData(docs);

            });
        }
        fetchData();

    }, [sorting]);


    async function addReview(e) {
        e.preventDefault(); //forhindrer reload af siden

        const newReview = {
            user: user, //variablen til højre er det som brugeren har indtastet
            title: title,
            description: description,
            location: location,
            rating: rating,
            date: date, //TODO: tilføje noget dato et eller andet sted?????
        }

        try { //laver opdatering TODO: pop up beskeder i stedet for console log
            
            
            const ratingRef = await addDoc(collection(db, "community-reviews"), newReview);//når bruger opretter ny vare, oprettes nyt dokument i firebase shoppingliste collection


            console.log("A review has neen added with ID: ", ratingRef.id);
        } catch (e) {
            console.error("ERROR – Could not add review: ", e)
        }
    }



    // De følgende to funktioner skifter sorteringsfelt.
    function sortByRating() {
        setSorting("rating");
    }

    function sortByLocation() {
        setSorting("location");
    }

    return (
        <>

            <Stack direction="column" textAlign="center" spacing={4}>
                <Typography variant="h4">Reviews –– TODO SO I DONT FORGET, omrokering på reviews efter feedback</Typography>

                <div className="sorting">
                    <Button onClick={sortByRating}>Sort by rating</Button>
                    <Button onClick={sortByLocation}>Sort by location</Button>
                </div>


                <Stack spacing={4}>
                    {data.map((item) => (
                        <ListItem key={item.id}>
                            <div className="rev">
                                <Typography variant="h5">{item.title}</Typography>
                                
                                <Typography variant="h6"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar alt="" src="/static/images/avatar/2.jpg" sx={{ width: 32, height: 32, m: "0 4% 2% 0" }} /> {item.user}
                                </Typography>

                                <Typography variant="body1"><b>Location:</b> {item.location}</Typography>
                                <Typography variant="body2">{item.description}</Typography>
                                <Rating
                                    value={item.rating}
                                />


                            </div>


                        </ListItem>

                    ))}



                </Stack>

            </Stack>

            <Divider variant="middle" sx={{ m: "16%" }} />

            <FormGroup
                required
                sx={{
                    '& .MuiTextField-root': { m: 1, width: "35ch" },
                    display: "flex",
                    textAlign: "center"
                }}
                autoComplete="off"

            >
                <Typography variant="h4">Review a city, place or any location!</Typography>
                <div>
                    <TextField
                        required
                        id="outline-required"
                        label="Name"
                        placeholder="How others see you."

                        value={user}
                        onChange={e => setUser(e.target.value)} 
                    />

                    <TextField
                        required
                        id="outline-required"
                        label="Title"
                        placeholder="Write a fetching title!"

                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextField
                        required
                        id="outline-required"
                        label="Location"
                        placeholder="Which place are you reviewing?"

                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />

                    <TextField
                        required
                        id="outline-textarea"
                        label="Description"
                        placeholder="Write your review here!"
                        multiline
                        rows={3}

                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <div>
                        <Typography variant="h6" component="legend">Your rating!</Typography>
                        <Rating
                            name="half-rating"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            defaultValue={0}
                            precision={0.5}
                            size="large"
                            
                            sx={{color: customTheme => customTheme.palette.secondary.accent}}
                        />
                    </div>

                    <Button onClick={addReview}
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: customTheme => customTheme.palette.secondary.main, width: "85%" }}
                    >Submit</Button>

                </div>
            </FormGroup>


        </>
    );
}

//SLET KNAP
/*
 
    async function deleteReview(e) { //TODO: prøv at finde ud af at gøre sådan at man kun kan slette sine egne reviews.......
const ratingId = e.currentTarget.getAttribute("data-id");

try {
const ratingRef = doc(db, "community-reviews", ratingId);
await deleteDoc(ratingRef);
console.log("The review was deleted");
} catch (e) {
console.error("ERROR – the review could not be deleted: ", e);
}
}
 
 
 
<Button>
                    <Tooltip title="Delete" data-id={item.id} onClick={deleteReview}>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Button> */