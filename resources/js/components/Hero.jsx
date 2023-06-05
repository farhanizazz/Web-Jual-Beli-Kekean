import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import HeroModel from "./HeroModel";
import { Canvas } from "@react-three/fiber";

export default function Hero() {
    return (
        <>
            <Container sx={{ display: { mobile: "none", laptop: "flex" }, mt: 5, justifyContent: 'space-around', backgroundImage: 'linear-gradient(to right, #0000 , #FFC58B)', p: 2, borderRadius: 1, px: 10 }}>
                {/* <Carousel indicators={true} swipe={false} height={275}>
                <div className="hero">
                    <Box
                        sx={{ borderRadius: 1, width: "100%" }}
                        component="img"
                        src="../images/hero-1.png"
                    />
                </div>
                <div className="hero">
                    <Box
                        sx={{ borderRadius: 1, width: "100%" }}
                        component="img"
                        src="../images/hero-2.png"
                    />
                </div>
            </Carousel> */}
                <Box>
                    <Typography
                        color={"black"}
                        fontSize={{mobile: 20,laptop: 40}}
                        fontWeight={'600'}
                        mr={4}
                    >
                        Batik Tenun
                    </Typography>
                    <Typography fontSize={24} fontWeight={'600'} color={'#AC9D8D'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </Box>
                <Box sx={{ px: 2 }}>
                    <model-viewer src="" ar shadow-intensity="1" camera-controls touch-action="pan-y" auto-rotate>

                    </model-viewer>
                </Box>
            </Container>
            <Box sx={{display: {mobile: 'none', laptop: 'block'}}}>
                <model-viewer style={{ position: 'absolute', right: 0, top: '10px', paddingRight: '160px', height: '300px', width: '350px' }} src="Batik Syal Merah Lengan Panjang Abu Hitam.glb" shadow-intensity="1" disable-zoom="" camera-controls="" auto-rotate="" ar-status="not-presenting" disable-pan>

                </model-viewer>
            </Box>
        </>
    );
}
