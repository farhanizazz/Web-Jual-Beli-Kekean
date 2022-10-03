import React from "react";
import { Container, Grid, Typography, Box, Skeleton } from "@mui/material/";
import CatalogItem from "../components/CatalogItem";
import ArticleItem from "../components/ArticleItem";
import { Link } from "react-router-dom";
import CatalogCollection from "./CatalogCollection";
import ArticleCollection from "./ArticleCollection";

export default function MainPage(props) {
    // const product = JSON.parse(JSON.stringify(require('../product.json')))
    

    const [loading, setLoading] = React.useState(true);
    const [product, setProduct] = React.useState([]);
    let isMounted = true;

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                axios.get(`api/products`).then((res) => {
                    if (res.data.status === 200) {
                        setProduct(res.data.products);
                        setLoading(false)
                    }
                });
            } catch(error) {
                console.error(error.message)
            }
        }
        fetchData()
        isMounted = false;
    }, []) 
    if(!loading) {
        var showProductList = "";
        showProductList = product.map((item, id) => 
            <CatalogItem
                key={id}
                id={item.id}
                description={item.description}
                nama={item.product_name}
                image={item.image_detail1}
                harga={item.price}
                have3d={item.has_3d}
                model={item.model_3d}
            />
        );
        console.log(product)
    }

    return (
        <Box>
            <Grid
                display={{ mobile: "flex", laptop: "none" }}
                container
                alignItems="center"
                justifyContent="center"
                pt={0}
            >
                <CatalogCollection />
                <CatalogCollection />
                <CatalogCollection />
                <ArticleCollection />
                <Grid item mobile={12}>
                    <Container>
                        <Typography
                            display={{ mobile: "block", laptop: "none" }}
                            fontWeight={"light"}
                            fontSize={18}
                            py={2}
                            textAlign={"center"}
                        >
                            About Us
                        </Typography>
                        <Box
                            sx={{ width: "100%" }}
                            component="img"
                            src={`../images/aboutUs.png`}
                        />
                        <Typography
                            fontSize={8.65}
                            mt={1}
                            fontWeight={"regular"}
                            mb={5}
                        >
                            Kekean Wastra Gallery is a business that carries
                            local Indonesian cultural values. This business was
                            established in Bali on December 2, 2014. Kekean
                            Wastra Gallery focuses on sustainable fashion with
                            Batik, Weaving, and Embroidery.
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
            <Grid
                sx={{ display: { mobile: "none", laptop: "flex" } }}
                container
                spacing={2}
            >
                {loading?(
                    <>
                    <Grid item>
                        <Skeleton variant="rounded" width={250} height={130}/>
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rounded" width={250} height={130}/>
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rounded" width={250} height={130}/>
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rounded" width={250} height={130}/>
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rounded" width={250} height={130}/>
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rounded" width={250} height={130}/>
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                    </Grid>
                    
                    </>
                ):showProductList}
            </Grid>
        </Box>
    );
}
