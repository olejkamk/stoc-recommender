import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Listing from './components/Listing/Listing';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className='App'>
        <CssBaseline />
        <Container maxWidth='lg'>
            <Header />
            <Form />
            <Listing />
        </Container>
    </div>
  );
}

export default App;
