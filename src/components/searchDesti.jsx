import { /*addDoc,*/ collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

import { /*Avatar, Button, Divider, FormGroup,*/ ListItem, /*Rating,*/ Stack, /*TextField,*/ Typography } from "@mui/material";




export default function Desti() {
    const [data] = useState([]);
    //const [Country, setCountry] = useState("");
    //const [City, setCity] = useState("");



    //const [sorting, setSorting] = useState("City")



    useEffect(() => {
        async function fetchData() {
            onSnapshot(collection(db, "destinations"), data => {
                const docs = [];
                data.forEach((doc) => {
                    docs.push({ id: doc.id, ...doc.data() });
                });
                console.log("useEffect");


            });
        }
        fetchData();

    }, []);





    return (
        <>

            <Stack direction="column" textAlign="center" spacing={4}>
                <Typography variant="h4">Destinations</Typography>

                <Stack spacing={4}>
                    {data.map((item) => (
                        <ListItem key={item.id}>
                            <div className="rev">
                                <Typography variant="h5">{item.country}</Typography>

                                <Typography variant="h6">{item.city}</Typography>



                            </div>


                        </ListItem>

                    ))}

                </Stack>

            </Stack>


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
                    <Tooltip City="Delete" data-id={item.id} onClick={deleteReview}>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Button> */