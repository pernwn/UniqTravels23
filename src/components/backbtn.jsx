
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
//import { customTheme } from "../themes/themes";

//import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';


export default function BackBtn() {
    const navigate = useNavigate();
    
    return(
        <Box
            sx={{
                position:"fixed",
                top:16,
                left:8,
                
            }}
        >
            <Button onClick={() => navigate(-1) && window.scrollTo(0,0)}

            >
                <ArrowBackIosOutlinedIcon
                    sx={{
                        color: customTheme => customTheme.palette.secondary.main,
                        borderRadius:"10px",
                        fontSize:"25pt",
                        p:"8%",
                        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)"
                    }}
                />
            </Button>
        </Box>
    )
}