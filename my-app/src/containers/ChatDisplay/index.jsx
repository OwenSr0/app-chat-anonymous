import React from "react";
import { Container }from '@mui/material'
import FooterBotton from '../../componets/textField+botton/index'
import TextRead from '../TextRead/index';

const stackStyle = {
    background: 'whitesmoke',
    width: {xs:"90vw", md: "80vw"},
    height: {xs:"100%", md: "105vh", lg:"40em"},
    borderRadius: '16px',
    display: {xs:"block", md:"none"},
    paddingBottom: {xs:"1rem", sm: "3rem", lg:"0"},
    flexDirection: 'column',
  }

const ChatDisplay = () => {
    return (
        <Container sx={stackStyle}>
            <TextRead/>
            <FooterBotton/>
        </Container>
    )
}
export default ChatDisplay;