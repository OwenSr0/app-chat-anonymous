import React from "react";
import { Container }from '@mui/material';
import StartButton from "../../componets/Buttons/StartButton";
import FirstExplainText from "../../componets/Text/FirstExplainText";
import SubExplainText from "../../componets/Text/SubExplainText";

const stackStyle = {
    background: 'whitesmoke',
    width: {xs:"90vw", md: "40vw"},
    height: {xs:"100%", md: "105vh", lg:"45em"},
    borderRadius: '16px',
    display: {xs:"block", md:"flex"},
    paddingBottom: {xs:"1rem", sm: "3rem", lg:"0"},
    flexDirection: 'column',
  }

const Home = () => {
    return (
        <Container sx={stackStyle}>
            <FirstExplainText/>
            <SubExplainText/>
            <StartButton/>
        </Container>
    )
}

export default Home;