import './App.css';
import * as React from 'react';
import { Container }from '@mui/material'
import FooterBotton from './containers/textField+botton/index'
import TextRead from './containers/TextRead/index';

const stackStyle = {
  background: 'whitesmoke',
  width: {xs:"90vw", md: "80vw"},
  height: {xs:"100%", md: "105vh", lg:"25em"},
  borderRadius: '16px',
  marginTop: {xs:"15px", md: "30px", lg:"40px"},
  display: {xs:"block", md:"flex"},
  paddingBottom: {xs:"1rem", sm: "3rem", lg:"0"},
  flexDirection: 'column',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
        <Container sx={stackStyle}>
          <TextRead/>
          <FooterBotton/>
        </Container>
      </main>
    </div>
  ); 
}

export default App;
