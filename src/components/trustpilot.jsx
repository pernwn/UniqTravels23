//{Kodet af: Victoria}

import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

import { Avatar, ListItem, Rating, Stack, Typography } from "@mui/material";

import '../styles/vic.css'


export default function Trustpilot() {
    const [data, setData] = useState([]);



    useEffect(() => {
        async function fetchData() {
            onSnapshot(collection(db, "trustpilot"), data => {
                const docs = [];
                data.forEach((doc) => {
                    docs.push({ id: doc.id, ...doc.data() });
                });
                console.log("useEffect");

                setData(docs);

            });
        }
        fetchData();

    }, []);


    return (
        <>

            <Stack direction="column" textAlign="center" spacing={4}>
                

                <Stack spacing={2}>
                    {data.map((item) => (
                        <ListItem key={item.id}>
                            <div className="trustP">
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

                                
                                <Typography variant="body2">{item.description}</Typography>
                                <Rating
                                    sx={{color:"#00b67a"}}

                                    value={item.rating}
                                />


                            </div>


                        </ListItem>

                    ))}

                </Stack>

            </Stack>


        </>
    );
}