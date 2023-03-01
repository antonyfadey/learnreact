import React from 'react';
import '../styles/MainPage.css'
import { Button, Grid, Link } from '@mui/material';
import { BrowserRouter as Router, Link as RouterLink, Route, Routes } from 'react-router-dom';
// import FormPage from './FormPage.tsx';

const MainPage = () => {
    return (
        <div className='main-page'>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Button href='form' variant='contained'>
                        Form
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button href='table' variant='contained'>
                        Table
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default MainPage;
