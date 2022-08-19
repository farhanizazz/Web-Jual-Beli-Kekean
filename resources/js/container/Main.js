import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MobileNav from '../components/MobileNav'
import Backdrop from '../components/backdrop';
import Filter from '../components/Filter';
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Grid } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#FF674D"
        },
        secondary: {
            main: "#FF674D"
        },
        subtitle : "rgb(0, 0, 0, 31%)"
    }
})
function Main() {
    
    const [sidebar, setSidebar] = React.useState(false)

    const toggleSidebar = () => {
        setSidebar(prevState => !prevState)
    }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <MobileNav sidebar={sidebar}/>
                <Backdrop sidebar={sidebar}/>
                <Navbar openSidebar={toggleSidebar}/>
                <Hero/>

                <Container>
                    <Grid spacing={2} container sx={{mt:3}}>
                        <Grid item md={2}>
                            <Filter/>
                        </Grid>
                        <Grid item md={10}>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default Main;

if (document.getElementById('example')) {
    ReactDOM.render(<Main/>, document.getElementById('example'));
}
