import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Hero() {
    return (
        <Container sx={{ display: { mobile: "none", laptop: "block" } }}>
            <div className="hero">
                <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../images/hero.png"
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: { laptop: "4.5rem", desktop: "4.7rem" },
                        left: { laptop: "3rem", desktop: "4rem" },
                    }}
                >
                    <Typography
                        fontWeight={"medium"}
                        fontSize={{ tablet: 50, mobile: 13.8, desktop: 70 }}
                    >
                        Batik Cakhra 1.1
                    </Typography>
                    <Typography
                        fontWeight={600}
                        color="subtitle"
                        fontSize={{ tablet: 15, mobile: 8.28, desktop: 20 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur
                        <br /> adipiscing elit.{" "}
                    </Typography>
                    <Button
                        sx={{
                            display: { mobile: "none", laptop: "block" },
                            px: 1,
                            mt: { laptop: 8, mobile: 3, desktop: 13 },
                        }}
                        variant="contained"
                        color="primary"
                        disableElevation
                    >
                        <Typography fontSize={{desktop: 20}} variant="button" color="white">
                            Beli Sekarang
                        </Typography>
                        <Typography
                            pl={0.5}
                            fontSize={17}
                            color="white"
                            className="bx bx-shopping-bag"
                        ></Typography>
                    </Button>
                </Box>
            </div>
        </Container>
    );
}
