import './App.css';
import * as React from 'react';
import { Container } from '@mui/material'
import ChatDisplay from './containers/ChatDisplay/index'
import Home from './containers/Home';

const stackStyleCon ={
  background: '#282c34',
  maxWidth: {x: '100vw', m:'100vw', lg: '100vw'},
  height: '100vh',
  paddingLeft: {x:'0',m:'0',lg:'0'},
  paddingRight: {x:'0',m:'0',lg:'0'}
}

function App() {
  return (
    <Container sx={stackStyleCon}>
      <header className="App-header">
      </header>
      <Home/>





      <ChatDisplay/>
    </Container>
  ); 
}

export default App;
