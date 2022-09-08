import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './container/Main'
import CatalogPage from './container/CatalogPage';
import Navbar from './components/Navbar'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ProductPage from './container/ProductPage';
import Payment from './container/Payment';
import LoginPage from './container/LoginPage';
import RegisterPage from './container/RegisterPage';
import axios from 'axios';

function Navs() {
    const catalog = JSON.parse(JSON.stringify(require('./catalog.json')))
    const theme = createTheme({
        palette: {
            primary: {
                main: "#FF674D"
            },
            secondary: {
                main: "#7776BC"
            },
            subtitle : "rgb(0, 0, 0, 31%)"
        },
        typography: {
            "fontFamily": `"Poppins", "Helvetica", "Arial", sans-serif`,
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500,
            button: {
                textTransform: 'none'
            }
        },
        shape: {
            borderRadius: 12,
        }, 
        breakpoints: {
            values: {
              mobile: 0,
              tablet: 640,
              laptop: 1024,
              desktop: 1200,
            },
        },
    
    })    
    axios.defaults.baseURL = "http://kekean.pusproset.site/";
    axios.defaults.headers.post['Accept'] = "application/json";
    axios.defaults.headers.post['Content-Type'] = "application/json";
    axios.defaults.withCredentials = true; 
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Main/>}/>
                    <Route path="/catalog" element={<CatalogPage/>}/>
                    <Route path='/products/:productId' element={<ProductPage/>}/>
                    <Route path='/payment' element={<Payment/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                </Routes>
            </Router>
    </ThemeProvider>
    );
}

export default Navs;

if (document.getElementById('app')) {
    ReactDOM.render(<Navs/>, document.getElementById('app'));
}
