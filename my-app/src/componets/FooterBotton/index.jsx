import React from "react";
import { Container }from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const stackStyleText = {
    display: {xs:"flex", md:"flex"},
    width: {xs:"25em", md: "25em"},
    margin: {xs:"1em", md: "1em", lg:"1em"},
  }

const stackStyleCon = {
  display: {xs:"flex", md:"flex"},
  alignItems: "center",
  justifyContent: "center",
}

  

const FooterBotton = () => {
    return(
        <Container sx={stackStyleCon}>
            <TextField sx={stackStyleText}></TextField>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Container>
        
    )
}
export default FooterBotton;