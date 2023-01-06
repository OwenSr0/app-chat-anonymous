import React from "react";
import { Container }from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const FooterBotton = () => {
    return(
        <Container>
            <TextField></TextField>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Container>
        
    )
}
export default FooterBotton;