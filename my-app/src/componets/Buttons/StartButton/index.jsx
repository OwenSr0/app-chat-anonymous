import React from "react";
import { Container }from '@mui/material'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const stackButton = {
    width: {xs:"10em", md: "10em"},
    height: {xs:"4em", md: "4em", lg:"4em"},
}

const stackIcon = {
    width: {xs:"2em", md: "2em"},
    height: {xs:"2em", md: "2em", lg:"2em"},
}

const StartButton = () => {
    return (
        <Container>
            <Button sx={stackButton} color="success" variant="contained"><PlayArrowIcon sx={stackIcon}/></Button>
        </Container>
    )
}

export default StartButton;